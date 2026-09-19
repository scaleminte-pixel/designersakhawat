import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const envInfo = {
    DB_HOST: process.env.DB_HOST || "(not set - default localhost)",
    DB_PORT: process.env.DB_PORT || "(not set - default 3306)",
    DB_NAME: process.env.DB_NAME || "(not set - default portfolio_db)",
    DB_USER: process.env.DB_USER || "(not set - default root)",
    DB_PASSWORD_EXISTS: !!process.env.DB_PASSWORD,
    DB_PASSWORD_LENGTH: process.env.DB_PASSWORD ? process.env.DB_PASSWORD.length : 0,
    SESSION_SECRET_EXISTS: !!process.env.SESSION_SECRET,
  };

  try {
    const [users, mediaRows, serviceRows] = await Promise.all([
      query("SELECT id, email, name, last_login FROM admin_users"),
      query("SELECT id, filename, storage_path FROM media ORDER BY id ASC LIMIT 30"),
      query("SELECT id, name, slug, cover_media_id FROM services"),
    ]);
    return NextResponse.json({
      status: "SUCCESS",
      message: "Connected to MySQL successfully!",
      env: envInfo,
      adminUsers: users,
      services: serviceRows,
      mediaCount: mediaRows.length,
      media: mediaRows,
    });
  } catch (err: unknown) {
    const error = err as { message?: string; code?: string; sqlMessage?: string };
    return NextResponse.json({
      status: "ERROR",
      message: "Failed to connect to MySQL database.",
      env: envInfo,
      errorDetails: {
        message: error?.message,
        code: error?.code,
        sqlMessage: error?.sqlMessage,
      },
    }, { status: 500 });
  }
}
