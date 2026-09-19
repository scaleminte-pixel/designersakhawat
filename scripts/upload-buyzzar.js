const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({
  cloud_name: 'sgmbxuyt',
  api_key: '166113552595581',
  api_secret: 'b0aCoyOy8RraaDnDglzbJmojuOI',
  secure: true,
});

async function run() {
  const filePath = path.join(__dirname, '..', 'uploads', 'qWwCZJrwj1O9_Logo_and_Branding_original.webp');
  const res = await cloudinary.uploader.upload(filePath, {
    folder: 'portfolio_uploads',
    public_id: 'buyzzar_logo_branding',
    overwrite: true,
  });
  console.log('Uploaded successfully:', res.secure_url);
}

run().catch(console.error);
