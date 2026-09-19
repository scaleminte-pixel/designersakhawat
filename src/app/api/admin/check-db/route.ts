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

export async function POST() {
  try {
    const { execute } = await import("@/lib/db");
    const { revalidatePath } = await import("next/cache");

    // Fix media 22 (Logo & Branding -> Buyzzar logo)
    await execute(
      `UPDATE media SET 
        storage_path = 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789829625/portfolio_uploads/buyzzar_logo_branding.webp',
        medium_path = 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789829625/portfolio_uploads/buyzzar_logo_branding.webp',
        thumb_path = 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_thumb,w_300,h_300,g_face,q_auto,f_auto/v1789829625/portfolio_uploads/buyzzar_logo_branding.webp'
      WHERE id = 22`
    );

    // Fix media 25 (Ads Creative Design -> project 3)
    await execute(
      `UPDATE media SET 
        storage_path = 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827842/portfolio_uploads/project-3.webp',
        medium_path = 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827842/portfolio_uploads/project-3.webp',
        thumb_path = 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_thumb,w_300,h_300,g_face,q_auto,f_auto/v1789827842/portfolio_uploads/project-3.webp'
      WHERE id = 25`
    );

    // Fix media 24 (Packaging & Label Design -> project 2)
    await execute(
      `UPDATE media SET 
        storage_path = 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827841/portfolio_uploads/project-2.webp',
        medium_path = 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827841/portfolio_uploads/project-2.webp',
        thumb_path = 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_thumb,w_300,h_300,g_face,q_auto,f_auto/v1789827841/portfolio_uploads/project-2.webp'
      WHERE id = 24`
    );

    // Make sure services point to valid media
    await execute("UPDATE services SET cover_media_id = 22 WHERE id = 1");
    await execute("UPDATE services SET cover_media_id = 25 WHERE id = 2");
    await execute("UPDATE services SET cover_media_id = 24 WHERE id = 3");
    await execute("UPDATE services SET cover_media_id = 4 WHERE id = 4");

    revalidatePath("/");
    revalidatePath("/services");

    return NextResponse.json({
      status: "SUCCESS",
      message: "Successfully fixed media 22, 24, 25 to permanent Cloudinary URLs!",
    });
  } catch (err: unknown) {
    const error = err as { message?: string };
    return NextResponse.json({
      status: "ERROR",
      message: error?.message || "Failed to update media",
    }, { status: 500 });
  }
}

