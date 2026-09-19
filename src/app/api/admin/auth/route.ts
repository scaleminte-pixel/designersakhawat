import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { queryOne, execute } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { checkRateLimit, getClientIp } from "@/lib/auth/rate-limit";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import type { SessionData } from "@/lib/auth/session";

const SESSION_OPTIONS = {
  password: process.env.SESSION_SECRET || "fallback-secret-minimum-32-characters-long",
  cookieName: "portfolio_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict" as const,
    maxAge: 60 * 60 * 24 * 7,
  },
};

/** POST /api/admin/auth/login */
export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const rateLimitKey = `login:${ip}`;
  const maxAttempts = parseInt(process.env.RATE_LIMIT_LOGIN || "30");

  const rateCheck = checkRateLimit(rateLimitKey, {
    maxRequests: maxAttempts,
    windowMs: 60 * 1000, // 1 minute window
  });

  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: "Too many login attempts. Please wait 1 minute." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const queryEmail = normalizedEmail === "designersakhawat@gmail.com"
      ? "designersakhawat86@gmail.com"
      : normalizedEmail;

    const admin = await queryOne<{
      id: number;
      email: string;
      password_hash: string;
      name: string | null;
    }>("SELECT id, email, password_hash, name FROM admin_users WHERE email = ? OR email = ?", [
      normalizedEmail,
      queryEmail,
    ]);

    if (!admin) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    const valid = await bcrypt.compare(password, admin.password_hash);
    if (!valid) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    // Update last login
    await execute("UPDATE admin_users SET last_login = NOW() WHERE id = ?", [admin.id]);
    await execute(
      "INSERT INTO activity_log (action, entity_type, entity_id, detail) VALUES (?, ?, ?, ?)",
      ["login", "admin_user", admin.id, `Login from ${ip}`]
    );

    // Set session
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, SESSION_OPTIONS);
    session.adminId = admin.id;
    session.adminEmail = admin.email;
    session.adminName = admin.name || "Admin";
    session.isLoggedIn = true;
    await session.save();

    return NextResponse.json({ success: true, name: admin.name });
  } catch (err: unknown) {
    const error = err as { message?: string; code?: string };
    console.error("Login error:", err);
    return NextResponse.json(
      { error: error?.message || "Login failed due to server error." },
      { status: 500 }
    );
  }
}

/** DELETE /api/admin/auth/login — logout */
export async function DELETE() {
  try {
    const session = await getSession();
    session.destroy();
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: true });
  }
}

/** GET /api/admin/auth/login — check session */
export async function GET() {
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return NextResponse.json({ loggedIn: false }, { status: 401 });
    }
    return NextResponse.json({
      loggedIn: true,
      adminId: session.adminId,
      adminEmail: session.adminEmail,
      adminName: session.adminName,
    });
  } catch {
    return NextResponse.json({ loggedIn: false }, { status: 401 });
  }
}
