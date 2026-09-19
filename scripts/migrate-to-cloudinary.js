const mysql = require('mysql2/promise');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'sgmbxuyt',
  api_key: '166113552595581',
  api_secret: 'b0aCoyOy8RraaDnDglzbJmojuOI',
  secure: true
});

async function migrate() {
  const conn = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'SakhawatDev2024!',
    database: 'portfolio_db'
  });

  const [rows] = await conn.execute('SELECT * FROM media');
  console.log(`Found ${rows.length} media records in DB`);

  let sqlUpdates = '-- Cloudinary Media Migration SQL\n';

  for (const row of rows) {
    if (row.storage_path && row.storage_path.startsWith('http')) {
      console.log(`Media #${row.id} already on Cloudinary, skipping.`);
      continue;
    }

    // Try finding the file in uploads folder
    const filename = row.filename || path.basename(row.storage_path);
    let filePath = path.join(__dirname, '..', 'uploads', filename);

    if (!fs.existsSync(filePath)) {
      // Try searching by original_name
      const origPath = path.join(__dirname, '..', 'uploads', row.original_name);
      if (fs.existsSync(origPath)) {
        filePath = origPath;
      } else {
        // Search in public/images/projects
        const pubPath = path.join(__dirname, '..', 'public', 'images', 'projects', filename);
        if (fs.existsSync(pubPath)) {
          filePath = pubPath;
        } else {
          console.warn(`File not found for media #${row.id}: ${filename}`);
          continue;
        }
      }
    }

    console.log(`Uploading media #${row.id} (${filename}) to Cloudinary...`);
    try {
      const isVideo = row.mime_type && row.mime_type.startsWith('video/');
      const uploadRes = await cloudinary.uploader.upload(filePath, {
        folder: 'portfolio_uploads',
        resource_type: isVideo ? 'video' : 'image',
        public_id: path.basename(filename, path.extname(filename))
      });

      const secureUrl = uploadRes.secure_url;
      const thumbUrl = isVideo ? null : secureUrl.replace('/upload/', '/upload/c_fill,w_400,h_300,q_auto,f_auto/');
      const mediumUrl = isVideo ? null : secureUrl.replace('/upload/', '/upload/c_limit,w_1200,h_1200,q_auto,f_auto/');

      // Update in DB
      await conn.execute(
        'UPDATE media SET storage_path = ?, thumb_path = ?, medium_path = ?, webp_path = ? WHERE id = ?',
        [secureUrl, thumbUrl, mediumUrl, secureUrl, row.id]
      );

      sqlUpdates += `UPDATE \`media\` SET \`storage_path\` = '${secureUrl}', \`thumb_path\` = ${thumbUrl ? `'${thumbUrl}'` : 'NULL'}, \`medium_path\` = ${mediumUrl ? `'${mediumUrl}'` : 'NULL'}, \`webp_path\` = '${secureUrl}' WHERE \`id\` = ${row.id};\n`;

      console.log(`Media #${row.id} uploaded successfully: ${secureUrl}`);
    } catch (err) {
      console.error(`Failed to upload media #${row.id}:`, err.message);
    }
  }

  const outSql = path.join(__dirname, '..', 'cloudinary_media_update.sql');
  fs.writeFileSync(outSql, sqlUpdates, 'utf8');
  console.log(`Generated ${outSql}`);
  await conn.end();
}

migrate().catch(console.error);
