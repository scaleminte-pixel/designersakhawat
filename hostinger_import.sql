-- Hostinger Portfolio Database Dump
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- Table structure for media
DROP TABLE IF EXISTS `media`;
CREATE TABLE `media` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `original_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int NOT NULL,
  `width` int DEFAULT NULL,
  `height` int DEFAULT NULL,
  `alt_text` text COLLATE utf8mb4_unicode_ci,
  `focal_x` float DEFAULT '0.5',
  `focal_y` float DEFAULT '0.5',
  `storage_path` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumb_path` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `medium_path` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `webp_path` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for media
INSERT INTO `media` (`id`, `filename`, `original_name`, `mime_type`, `size`, `width`, `height`, `alt_text`, `focal_x`, `focal_y`, `storage_path`, `thumb_path`, `medium_path`, `webp_path`, `created_at`) VALUES
  (1, 'project-1.webp', 'project-1.webp', 'image/webp', 150000, 1000, 1000, 'Aura Tech Brand Identity', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827840/portfolio_uploads/project-1.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827840/portfolio_uploads/project-1.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827840/portfolio_uploads/project-1.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827840/portfolio_uploads/project-1.webp', '2026-09-18 17:11:27'),
  (2, 'project-2.webp', 'project-2.webp', 'image/webp', 150000, 1000, 1000, 'Maison Luxe Perfume Packaging', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827841/portfolio_uploads/project-2.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827841/portfolio_uploads/project-2.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827841/portfolio_uploads/project-2.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827841/portfolio_uploads/project-2.webp', '2026-09-18 17:11:27'),
  (3, 'project-3.webp', 'project-3.webp', 'image/webp', 150000, 1000, 1000, 'Apex Athletics Social Campaign', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827842/portfolio_uploads/project-3.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827842/portfolio_uploads/project-3.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827842/portfolio_uploads/project-3.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827842/portfolio_uploads/project-3.webp', '2026-09-18 17:11:27'),
  (4, 'project-4.webp', 'project-4.webp', 'image/webp', 150000, 1000, 1000, 'Zenith AI Video Editing', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827843/portfolio_uploads/project-4.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827843/portfolio_uploads/project-4.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827843/portfolio_uploads/project-4.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827843/portfolio_uploads/project-4.webp', '2026-09-18 17:11:27'),
  (5, 'project-5.webp', 'project-5.webp', 'image/webp', 150000, 1000, 1000, 'Botanica Organics Tea Packaging', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827844/portfolio_uploads/project-5.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827844/portfolio_uploads/project-5.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827844/portfolio_uploads/project-5.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827844/portfolio_uploads/project-5.jpg', '2026-09-18 17:11:27'),
  (6, 'project-6.webp', 'project-6.webp', 'image/webp', 150000, 1000, 1000, 'Veloce Motors Monogram', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827845/portfolio_uploads/project-6.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827845/portfolio_uploads/project-6.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827845/portfolio_uploads/project-6.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827845/portfolio_uploads/project-6.jpg', '2026-09-18 17:11:27'),
  (7, 'project-7.webp', 'project-7.webp', 'image/webp', 150000, 1000, 1000, 'Geometric Brandmark', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827847/portfolio_uploads/project-7.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827847/portfolio_uploads/project-7.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827847/portfolio_uploads/project-7.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827847/portfolio_uploads/project-7.jpg', '2026-09-18 17:11:27'),
  (8, 'project-8.webp', 'project-8.webp', 'image/webp', 150000, 1000, 1000, 'Corporate Identity System', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827848/portfolio_uploads/project-8.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827848/portfolio_uploads/project-8.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827848/portfolio_uploads/project-8.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827848/portfolio_uploads/project-8.jpg', '2026-09-18 17:11:27'),
  (10, 'pkg-tea-box.jpg', 'pkg-tea-box.jpg', 'image/jpeg', 758411, 1024, 1024, 'Aethel Organic Herbal Tea Box & Pouch', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827849/portfolio_uploads/pkg-tea-box.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827849/portfolio_uploads/pkg-tea-box.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827849/portfolio_uploads/pkg-tea-box.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827849/portfolio_uploads/pkg-tea-box.jpg', '2026-09-18 17:22:16'),
  (11, 'pkg-cosmetics.jpg', 'pkg-cosmetics.jpg', 'image/jpeg', 649451, 1024, 1024, 'Aurelia Facial Serum Luxury Dropper & Box', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827850/portfolio_uploads/pkg-cosmetics.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827850/portfolio_uploads/pkg-cosmetics.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827850/portfolio_uploads/pkg-cosmetics.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827850/portfolio_uploads/pkg-cosmetics.jpg', '2026-09-18 17:22:16'),
  (12, 'pkg-coffee.jpg', 'pkg-coffee.jpg', 'image/jpeg', 815983, 1024, 1024, 'The Arcturus Blend Specialty Coffee Packaging', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827851/portfolio_uploads/pkg-coffee.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827851/portfolio_uploads/pkg-coffee.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827851/portfolio_uploads/pkg-coffee.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827851/portfolio_uploads/pkg-coffee.jpg', '2026-09-18 17:22:16'),
  (13, 'social-fintech.jpg', 'social-fintech.jpg', 'image/jpeg', 715164, 1024, 1024, 'FinTrack Fintech Analytics Instagram Carousel', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827852/portfolio_uploads/social-fintech.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827852/portfolio_uploads/social-fintech.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827852/portfolio_uploads/social-fintech.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827852/portfolio_uploads/social-fintech.jpg', '2026-09-18 17:22:16'),
  (14, 'social-sneaker.jpg', 'social-sneaker.jpg', 'image/jpeg', 918359, 1024, 1024, 'Astra Kinetic Streetwear Limited Drop Social Ad', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827853/portfolio_uploads/social-sneaker.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827853/portfolio_uploads/social-sneaker.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827853/portfolio_uploads/social-sneaker.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827853/portfolio_uploads/social-sneaker.jpg', '2026-09-18 17:22:16'),
  (15, 'video-hypercar.jpg', 'video-hypercar.jpg', 'image/jpeg', 934768, 1024, 1024, 'Apex Electric Hypercar Night Drift Commercial', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827853/portfolio_uploads/video-hypercar.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827853/portfolio_uploads/video-hypercar.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827853/portfolio_uploads/video-hypercar.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827853/portfolio_uploads/video-hypercar.jpg', '2026-09-18 17:22:17'),
  (16, 'video-ai-cyber.jpg', 'video-ai-cyber.jpg', 'image/jpeg', 951366, 1024, 1024, 'CyberCore AI VFX Motion Reel', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827854/portfolio_uploads/video-ai-cyber.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827854/portfolio_uploads/video-ai-cyber.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827854/portfolio_uploads/video-ai-cyber.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827854/portfolio_uploads/video-ai-cyber.jpg', '2026-09-18 17:22:17'),
  (17, 'branding-arcada.jpg', 'branding-arcada.jpg', 'image/jpeg', 806750, 1024, 1024, 'Arcada Modern Architecture Monogram & Stationery', 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827855/portfolio_uploads/branding-arcada.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827855/portfolio_uploads/branding-arcada.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827855/portfolio_uploads/branding-arcada.jpg', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827855/portfolio_uploads/branding-arcada.jpg', '2026-09-18 17:22:17'),
  (18, 'fRxaiVoQA4y-_Codex_Image_17_Sept_2026_13_40_47_original.webp', 'Codex Image 17 Sept 2026, 13_40_47.png', 'image/png', 1368915, 1193, 1319, NULL, 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827856/portfolio_uploads/fRxaiVoQA4y-_Codex_Image_17_Sept_2026_13_40_47_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827856/portfolio_uploads/fRxaiVoQA4y-_Codex_Image_17_Sept_2026_13_40_47_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827856/portfolio_uploads/fRxaiVoQA4y-_Codex_Image_17_Sept_2026_13_40_47_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827856/portfolio_uploads/fRxaiVoQA4y-_Codex_Image_17_Sept_2026_13_40_47_original.webp', '2026-09-19 08:16:09'),
  (19, 'RYQxm1vzsMrL_ChatGPT_Image_Sep_8_2026_01_52_59_AM_original.webp', 'ChatGPT Image Sep 8, 2026, 01_52_59 AM.png', 'image/png', 2316186, 1254, 1254, NULL, 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827857/portfolio_uploads/RYQxm1vzsMrL_ChatGPT_Image_Sep_8_2026_01_52_59_AM_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827857/portfolio_uploads/RYQxm1vzsMrL_ChatGPT_Image_Sep_8_2026_01_52_59_AM_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827857/portfolio_uploads/RYQxm1vzsMrL_ChatGPT_Image_Sep_8_2026_01_52_59_AM_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827857/portfolio_uploads/RYQxm1vzsMrL_ChatGPT_Image_Sep_8_2026_01_52_59_AM_original.webp', '2026-09-19 09:34:55'),
  (20, 'b0URFl9LDwB1_ChatGPT_Image_Sep_8_2026_01_52_59_AM_original.webp', 'ChatGPT Image Sep 8, 2026, 01_52_59 AM.png', 'image/png', 2316186, 1254, 1254, NULL, 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827858/portfolio_uploads/b0URFl9LDwB1_ChatGPT_Image_Sep_8_2026_01_52_59_AM_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827858/portfolio_uploads/b0URFl9LDwB1_ChatGPT_Image_Sep_8_2026_01_52_59_AM_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827858/portfolio_uploads/b0URFl9LDwB1_ChatGPT_Image_Sep_8_2026_01_52_59_AM_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827858/portfolio_uploads/b0URFl9LDwB1_ChatGPT_Image_Sep_8_2026_01_52_59_AM_original.webp', '2026-09-19 09:35:29'),
  (21, 'qWwCZJrwj1O9_Logo_and_Branding_original.webp', 'Logo and Branding.jpg', 'image/jpeg', 456477, 1200, 800, NULL, 0.5, 0.5, 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827858/portfolio_uploads/qWwCZJrwj1O9_Logo_and_Branding_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_fill,w_400,h_300,q_auto,f_auto/v1789827858/portfolio_uploads/qWwCZJrwj1O9_Logo_and_Branding_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/c_limit,w_1200,h_1200,q_auto,f_auto/v1789827858/portfolio_uploads/qWwCZJrwj1O9_Logo_and_Branding_original.webp', 'https://res.cloudinary.com/sgmbxuyt/image/upload/v1789827858/portfolio_uploads/qWwCZJrwj1O9_Logo_and_Branding_original.webp', '2026-09-19 09:54:53');

-- Table structure for admin_users
DROP TABLE IF EXISTS `admin_users`;
CREATE TABLE `admin_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password_hash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for admin_users
INSERT INTO `admin_users` (`id`, `email`, `password_hash`, `name`, `created_at`, `last_login`) VALUES
  (1, 'designersakhawat86@gmail.com', '$2b$12$9FwtY7peSM1Np0AavN69C.gi76LJDvsjD/6UB1u8tLqUcXBiE/qUm', 'Md Sakhawat Hossain', '2026-09-18 15:20:19', '2026-09-19 12:29:34');

-- Table structure for activity_log
DROP TABLE IF EXISTS `activity_log`;
CREATE TABLE `activity_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `entity_type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `entity_id` int DEFAULT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for activity_log
INSERT INTO `activity_log` (`id`, `action`, `entity_type`, `entity_id`, `detail`, `created_at`) VALUES
  (1, 'admin_created', 'admin_user', NULL, 'Admin account created for designersakhawat86@gmail.com', '2026-09-18 15:20:19'),
  (2, 'login', 'admin_user', 1, 'Login from ::1', '2026-09-18 15:22:25'),
  (3, 'login', 'admin_user', 1, 'Login from ::1', '2026-09-18 15:27:03'),
  (4, 'login', 'admin_user', 1, 'Login from ::1', '2026-09-18 15:45:53'),
  (5, 'login', 'admin_user', 1, 'Login from ::1', '2026-09-18 16:15:41'),
  (6, 'login', 'admin_user', 1, 'Login from ::1', '2026-09-18 16:15:51'),
  (7, 'service_updated', 'service', 1, 'Updated service: Logo & Branding', '2026-09-18 16:18:25'),
  (8, 'settings_updated', 'settings', NULL, 'Updated 20 settings', '2026-09-18 16:19:09'),
  (9, 'settings_updated', 'settings', NULL, 'Updated 20 settings', '2026-09-19 08:06:59'),
  (10, 'service_updated', 'service', 2, 'Updated service: Ads Creative Design', '2026-09-19 08:11:12'),
  (11, 'service_updated', 'service', 3, 'Updated service: Packaging & Label Design', '2026-09-19 08:12:23'),
  (12, 'service_updated', 'service', 3, 'Updated service: Packaging & Label Design', '2026-09-19 08:12:25'),
  (13, 'service_updated', 'service', 3, 'Updated service: Packaging & Label Design', '2026-09-19 08:12:31'),
  (14, 'project_created', 'project', 13, 'Created project: Dhurbomart Logo ', '2026-09-19 08:15:26'),
  (15, 'media_uploaded', 'media', 18, 'Uploaded: Codex Image 17 Sept 2026, 13_40_47.png', '2026-09-19 08:16:09'),
  (16, 'project_updated', 'project', 13, 'Updated project: Dhurbomart Logo ', '2026-09-19 08:16:23'),
  (17, 'login', 'admin_user', 1, 'Login from ::1', '2026-09-19 08:29:03'),
  (18, 'project_published', 'project', 13, 'Published project', '2026-09-19 09:29:12'),
  (19, 'project_created', 'project', 14, 'Created project: ads creative', '2026-09-19 09:31:22'),
  (20, 'project_trashed', 'project', 14, 'Moved project to trash', '2026-09-19 09:32:31'),
  (21, 'project_updated', 'project', 1, 'Updated project: Aura Tech — Minimalist Brand Identity & Guidelines', '2026-09-19 09:33:02'),
  (22, 'project_updated', 'project', 1, 'Updated project: Aura Tech — Minimalist Brand Identity & Guidelines', '2026-09-19 09:33:23'),
  (23, 'project_updated', 'project', 1, 'Updated project: Aura Tech — Minimalist Brand Identity & Guidelines', '2026-09-19 09:33:25'),
  (24, 'media_uploaded', 'media', 19, 'Uploaded: ChatGPT Image Sep 8, 2026, 01_52_59 AM.png', '2026-09-19 09:34:55'),
  (25, 'media_uploaded', 'media', 20, 'Uploaded: ChatGPT Image Sep 8, 2026, 01_52_59 AM.png', '2026-09-19 09:35:29'),
  (26, 'project_updated', 'project', 5, 'Updated project: Botanica Organics — Sustainable Tea Box & Label Design', '2026-09-19 09:35:32'),
  (27, 'project_trashed', 'project', 8, 'Moved project to trash', '2026-09-19 09:41:20'),
  (28, 'project_trashed', 'project', 9, 'Moved project to trash', '2026-09-19 09:41:25'),
  (29, 'project_trashed', 'project', 10, 'Moved project to trash', '2026-09-19 09:41:29'),
  (30, 'project_trashed', 'project', 11, 'Moved project to trash', '2026-09-19 09:41:32'),
  (31, 'project_updated', 'project', 6, 'Updated project: Veloce Motors — Modern Automotive Identity & Monogram', '2026-09-19 09:41:51'),
  (32, 'media_uploaded', 'media', 21, 'Uploaded: Logo and Branding.jpg', '2026-09-19 09:54:53'),
  (33, 'service_updated', 'service', 1, 'Updated service: Logo & Branding', '2026-09-19 09:54:57'),
  (34, 'login', 'admin_user', 1, 'Login from ::1', '2026-09-19 12:29:34');

-- Table structure for settings
DROP TABLE IF EXISTS `settings`;
CREATE TABLE `settings` (
  `key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for settings
INSERT INTO `settings` (`key`, `value`, `updated_at`) VALUES
  ('about_bio', 'I\'m Md Sakhawat Hossain, a creative graphic designer helping brands express their identity through thoughtful visuals. I specialize in logo and branding, social media design, packaging and label design, and AI-powered video editing.\n\nHave a project in mind? Let\'s create something that brings your brand to life.', '2026-09-18 15:20:09'),
  ('contact_email', 'designersakhawat86@gmail.com', '2026-09-18 15:20:09'),
  ('contact_location', 'Bangladesh', '2026-09-18 15:20:09'),
  ('contact_whatsapp', '+8801781955355', '2026-09-18 15:20:09'),
  ('contact_whatsapp_url', 'https://wa.me/8801781955355', '2026-09-18 15:20:09'),
  ('creator_philosophy', 'I craft visual systems that do not just look aesthetic ??? they command attention, establish instant credibility, and drive real conversions.', '2026-09-19 09:27:15'),
  ('creator_tagline', 'Visual Designer & Brand Architect', '2026-09-19 09:27:15'),
  ('hero_badge_text', 'Visual Designer', '2026-09-19 09:27:15'),
  ('hero_cta_primary_href', '/portfolio', '2026-09-18 15:20:09'),
  ('hero_cta_primary_label', 'View My Work', '2026-09-18 15:20:09'),
  ('hero_cta_secondary_href', 'https://wa.me/8801781955355', '2026-09-18 15:20:09'),
  ('hero_cta_secondary_label', 'Let\'s Talk', '2026-09-18 15:20:09'),
  ('hero_headline', 'Crafting Brands That Leave a Mark', '2026-09-18 15:20:09'),
  ('hero_subline', 'Brand Identity • Packaging Design • Social Media Ads • AI Video Editing', '2026-09-19 09:12:13'),
  ('seo_default_description', 'Md Sakhawat Hossain is a creative graphic designer specializing in logo & branding, social media design, packaging, and AI video editing.', '2026-09-18 15:20:09'),
  ('seo_title_template', 'Md Sakhawat Hossain Creative Graphic Designer', '2026-09-18 16:19:09'),
  ('site_name', 'Md Sakhawat Hossain', '2026-09-18 15:20:09'),
  ('site_tagline', 'Creative Graphic Designer', '2026-09-18 15:20:09'),
  ('social_behance', 'https://www.behance.net/sakhawatdesigner', '2026-09-19 08:06:59'),
  ('social_facebook', 'https://www.facebook.com/designersakhawat', '2026-09-18 15:20:09'),
  ('social_instagram', '', '2026-09-18 15:20:09'),
  ('social_linkedin', '', '2026-09-18 15:20:09'),
  ('social_youtube', '', '2026-09-18 15:20:09'),
  ('stat_projects', '590+', '2026-09-19 09:27:15'),
  ('stat_satisfaction', '99%', '2026-09-19 09:27:15'),
  ('stat_years_exp', '3+', '2026-09-19 09:27:15');

-- Table structure for industries
DROP TABLE IF EXISTS `industries`;
CREATE TABLE `industries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `display_order` int NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for industries
INSERT INTO `industries` (`id`, `name`, `icon`, `display_order`, `visible`, `created_at`) VALUES
  (1, 'E-Commerce & Retail', '🛍️', 1, 1, '2026-09-18 15:31:01'),
  (2, 'Tech & SaaS Startups', '💻', 2, 1, '2026-09-18 15:31:01'),
  (3, 'Fashion & Apparel', '✨', 3, 1, '2026-09-18 15:31:01'),
  (4, 'Food & Beverage', '🍷', 4, 1, '2026-09-18 15:31:01'),
  (5, 'Beauty & Cosmetics', '💄', 5, 1, '2026-09-18 15:31:01'),
  (6, 'Health & Fitness', '⚡', 6, 1, '2026-09-18 15:31:01'),
  (7, 'Real Estate & Architecture', '🏢', 7, 1, '2026-09-18 15:31:01'),
  (8, 'Media & Entertainment', '🎬', 8, 1, '2026-09-18 15:31:01');

-- Table structure for services
DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `cover_media_id` int DEFAULT NULL,
  `pricing_mode` enum('quote_only','pricing','both') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'quote_only',
  `display_order` int NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `cover_media_id` (`cover_media_id`),
  CONSTRAINT `services_ibfk_1` FOREIGN KEY (`cover_media_id`) REFERENCES `media` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for services
INSERT INTO `services` (`id`, `name`, `slug`, `description`, `cover_media_id`, `pricing_mode`, `display_order`, `visible`, `deleted_at`, `created_at`, `updated_at`) VALUES
  (1, 'Logo & Branding', 'logo-branding', 'From conceptual discovery to final guidelines, I craft timeless logos, cohesive color systems, typography hierarchies, and complete brand identity packages that command attention and drive recognition.', 21, 'both', 1, 1, NULL, '2026-09-18 15:20:09', '2026-09-19 09:54:57'),
  (2, 'Ads Creative Design', 'ads-creative-design', 'High-converting visual creatives engineered for digital engagement: eye-catching Instagram feeds, carousel infographics, Facebook ad creatives, YouTube thumbnails, and LinkedIn banners tailored to captivate your audience.', 3, 'both', 2, 1, NULL, '2026-09-18 15:20:09', '2026-09-19 08:11:12'),
  (3, 'Packaging & Label Design', 'packaging-label-design', 'Shelf-ready packaging and label designs that convert browsing into buying: print-ready dielines, 3D product mockups, premium finishes, bottle labels, box packaging, and pouch designs.', 2, 'both', 3, 1, NULL, '2026-09-18 15:20:09', '2026-09-19 08:12:25'),
  (4, 'AI Video Editing', 'ai-video-editing', 'Cutting-edge AI-assisted video editing for reels, ads, and product demos: dynamic pacing, cinematic transitions, AI voice sync, caption styling, color grading, and motion graphics optimized for modern platforms.', 4, 'both', 4, 1, NULL, '2026-09-18 15:20:09', '2026-09-18 17:57:36');

-- Table structure for service_packages
DROP TABLE IF EXISTS `service_packages`;
CREATE TABLE `service_packages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `currency` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'USD',
  `is_starting_from` tinyint(1) NOT NULL DEFAULT '0',
  `description` text COLLATE utf8mb4_unicode_ci,
  `features_json` json DEFAULT NULL,
  `display_order` int NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `service_id` (`service_id`),
  CONSTRAINT `service_packages_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for service_packages
INSERT INTO `service_packages` (`id`, `service_id`, `name`, `price`, `currency`, `is_starting_from`, `description`, `features_json`, `display_order`, `visible`, `created_at`, `updated_at`) VALUES
  (1, 1, 'Starter Brand Kit', '150.00', 'USD', 1, 'Ideal for early-stage startups and creators launching a fresh new venture.', '["2 Distinct Logo Concepts","Curated Typography & Color System","High-Res PNG, JPG & Vector SVG","Dark & Light Mode Variants","3 Revisions & Full Commercial Rights"]', 0, 1, '2026-09-18 17:57:36', '2026-09-19 08:08:11'),
  (2, 1, 'Complete Brand Identity', '350.00', 'USD', 1, 'Full brand identity designed to position your company as an industry leader.', '["4 Unique Logo Explorations","Comprehensive Brand Guidelines PDF","Stationery Design (Business Card, Letterhead)","Social Media Kit (Avatar, Cover, Templates)","Full Vector Source Files (.AI, .EPS, .PDF)","Unlimited Revisions until 100% Satisfied"]', 1, 1, '2026-09-18 17:57:36', '2026-09-19 08:08:11'),
  (3, 1, 'Enterprise Transformation', '750.00', 'USD', 1, 'Complete visual ecosystem for scaling companies and international brands.', '["In-Depth Visual Strategy & Positioning","Full Multi-Asset Design Suite & Merch Kit","Photorealistic 3D Brand Mockups","Complete Print & Digital Asset Library","Direct 1-on-1 WhatsApp Priority Support"]', 2, 1, '2026-09-18 17:57:36', '2026-09-19 08:08:11'),
  (4, 2, 'Social Starter Pack', '120.00', 'USD', 1, 'A quick boost of eye-catching social graphics to upgrade your feed.', '["6 Custom Instagram / LinkedIn Posts","Matching Story Layouts Included","High-Engagement Typography & Visuals","Royalty-Free Premium Stock Assets","Figma / Photoshop Editable Files"]', 0, 1, '2026-09-18 17:57:36', '2026-09-19 08:10:25'),
  (5, 2, 'Growth Monthly Kit', '280.00', 'USD', 1, 'Continuous high-converting content kit built to accelerate followers & sales.', '["15 Custom Carousels & Static Posts","15 Matching Stories & Highlight Covers","High-Converting Ad Creatives (Meta & Google)","Structured Content Rhythm & Layouts","Source Files (.PSD / .FIGMA) & Unlimited Tweaks"]', 1, 1, '2026-09-18 17:57:36', '2026-09-19 08:10:25'),
  (6, 2, 'Brand Dominance Bundle', '550.00', 'USD', 1, 'Full monthly creative firepower for aggressive growth brands.', '["30 Custom Posts, Carousels & Video Thumbnails","Full Performance Paid Ad Creative Suite","Custom Micro-Animations & Motion Covers","Consistent Cohesive Visual Direction","Priority Same-Day Turnaround Support"]', 2, 1, '2026-09-18 17:57:36', '2026-09-19 08:10:25'),
  (7, 3, 'Single SKU Label', '180.00', 'USD', 1, 'Sleek, market-ready label or pouch design tailored for shelf-appeal.', '["1 Custom Label / Bottle / Pouch Design","Print-Ready Vector Dieline with Bleed","Photorealistic 3D Product Mockup","CMYK Color Profile for Flawless Printing","Commercial Use & Source Files Included"]', 1, 1, '2026-09-18 17:57:36', '2026-09-18 17:57:36'),
  (8, 3, 'Product Line Collection', '380.00', 'USD', 1, 'Cohesive packaging system for a 3-flavor or multi-item product range.', '["3 Cohesive Product Packaging Designs","Foil Stamping, Emboss & Spot UV Specs","High-Resolution 4K 3D Renderings for E-Commerce","Custom Dieline Architecture & Measurements","Direct Printer Communication Support"]', 2, 1, '2026-09-18 17:57:36', '2026-09-18 17:57:36'),
  (9, 3, 'Luxury Packaging Architecture', '750.00', 'USD', 1, 'End-to-end luxury packaging engineering for premium cosmetic & food brands.', '["Complete Outer Box, Bottle & Unboxing Experience","Multiple Angles & 360° 3D Cinema Mockups","Regulatory & Barcode Placement Compliance","Full Vector Print Files with Die-Cut Lines","Dedicated Revisions until Production Run"]', 3, 1, '2026-09-18 17:57:36', '2026-09-18 17:57:36'),
  (10, 4, 'Short-Form Reel / TikTok', '99.00', 'USD', 1, 'High-retention viral vertical video designed for TikTok, Reels, & Shorts.', '["1 Dynamic 30-60s Short-Form Video","Kinetic Subtitles & Sound Effects (SFX)","Pacing Optimization for Maximum Retention","Color Grading & Dynamic B-Roll Inserts","Quick 24-48 Hour Turnaround"]', 1, 1, '2026-09-18 17:57:36', '2026-09-18 17:57:36'),
  (11, 4, 'YouTube & Brand Video', '250.00', 'USD', 1, 'Cinematic promotional or YouTube video with studio-grade polish.', '["Up to 3-5 Min Full Video Editing","Dynamic Motion Graphics & Lower Thirds","AI Voice Enhancement & Audio Mastering","Licensed Royalty-Free Soundtrack","4K Master Export with YouTube Thumbnail"]', 2, 1, '2026-09-18 17:57:36', '2026-09-18 17:57:36'),
  (12, 4, 'Full Ad Campaign Suite', '600.00', 'USD', 1, 'High-converting multi-format video ads engineered for Meta, TikTok & YouTube.', '["3 Aspect Ratios (16:9 Landscape, 9:16 Vertical, 1:1 Square)","Custom 3D Motion Intro / Outro Hook","Multiple Hook Variations for A/B Ad Testing","Comprehensive Audio & Color Grading","Priority VIP Turnaround & Revisions"]', 3, 1, '2026-09-18 17:57:36', '2026-09-18 17:57:36');

-- Table structure for projects
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover_media_id` int DEFAULT NULL,
  `video_url` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service_id` int DEFAULT NULL,
  `client` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `industry` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci,
  `challenge` text COLLATE utf8mb4_unicode_ci,
  `solution` text COLLATE utf8mb4_unicode_ci,
  `result` text COLLATE utf8mb4_unicode_ci,
  `services_provided` text COLLATE utf8mb4_unicode_ci,
  `featured` tinyint(1) NOT NULL DEFAULT '0',
  `display_order` int NOT NULL DEFAULT '0',
  `status` enum('draft','published','trashed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'draft',
  `seo_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seo_description` text COLLATE utf8mb4_unicode_ci,
  `og_image_id` int DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `cover_media_id` (`cover_media_id`),
  KEY `service_id` (`service_id`),
  KEY `og_image_id` (`og_image_id`),
  CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`cover_media_id`) REFERENCES `media` (`id`) ON DELETE SET NULL,
  CONSTRAINT `projects_ibfk_2` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE SET NULL,
  CONSTRAINT `projects_ibfk_3` FOREIGN KEY (`og_image_id`) REFERENCES `media` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for projects
INSERT INTO `projects` (`id`, `title`, `slug`, `cover_media_id`, `video_url`, `service_id`, `client`, `industry`, `short_description`, `challenge`, `solution`, `result`, `services_provided`, `featured`, `display_order`, `status`, `seo_title`, `seo_description`, `og_image_id`, `deleted_at`, `published_at`, `created_at`, `updated_at`) VALUES
  (1, 'Aura Tech — Minimalist Brand Identity & Guidelines', 'aura-tech-brand-identity', 1, NULL, 1, 'Aura Technologies', NULL, 'Comprehensive brand identity system including logo design, color palette, custom iconography, and brand guideline manual for a cutting-edge cloud infrastructure platform.', NULL, NULL, NULL, NULL, 0, 1, 'published', NULL, NULL, NULL, NULL, NULL, '2026-09-18 15:30:39', '2026-09-19 09:33:02'),
  (2, 'Maison Luxe — Premium Perfume Packaging & 3D Mockup', 'maison-luxe-packaging', 2, NULL, 3, 'Maison Luxe Cosmetics', NULL, 'Luxury packaging and bottle label design featuring gold foil accents, bespoke serif typography, and ultra-realistic 3D box mockups ready for commercial production.', NULL, NULL, NULL, NULL, 1, 2, 'published', NULL, NULL, NULL, NULL, NULL, '2026-09-18 15:30:39', '2026-09-18 17:11:27'),
  (3, 'Apex Athletics — High-Conversion Social Media Ad Campaign', 'apex-athletics-social-campaign', 3, NULL, 2, 'Apex Athletics', NULL, 'Set of 30+ high-energy Instagram and Facebook promo creatives, carousel ads, and story templates optimized for e-commerce conversion and brand awareness.', NULL, NULL, NULL, NULL, 1, 3, 'published', NULL, NULL, NULL, NULL, NULL, '2026-09-18 15:30:39', '2026-09-18 17:11:27'),
  (4, 'Zenith AI — Dynamic Brand Video & AI Motion Graphics', 'zenith-ai-brand-video', 4, 'https://www.youtube.com/watch?v=EngW7tLk6R8', 4, 'Zenith AI Labs', NULL, 'AI-assisted promo video editing with cinematic transitions, dynamic text animations, sound design, and color grading for a breakthrough SaaS product launch.', NULL, NULL, NULL, NULL, 1, 4, 'published', NULL, NULL, NULL, NULL, NULL, '2026-09-18 15:30:39', '2026-09-18 17:49:17'),
  (5, 'Botanica Organics — Sustainable Tea Box & Label Design', 'botanica-tea-packaging', 20, NULL, 3, 'Botanica Organics', NULL, 'Eco-friendly, botanical packaging design for an artisanal organic tea collection with earthy color harmony, custom patterns, and hand-drawn line art.', NULL, NULL, NULL, NULL, 1, 5, 'published', NULL, NULL, NULL, NULL, NULL, '2026-09-18 15:30:39', '2026-09-19 09:35:32'),
  (6, 'Veloce Motors — Modern Automotive Identity & Monogram', 'veloce-motors-identity', 6, NULL, 1, 'Veloce Motors', NULL, 'Aerodynamic monogram logo, showroom signage, business cards, and digital brand presence designed for a boutique performance automotive brand.', NULL, NULL, NULL, NULL, 0, 6, 'published', NULL, NULL, NULL, NULL, NULL, '2026-09-18 15:30:39', '2026-09-19 09:41:51'),
  (8, 'Nexus Studio — Kinetic Brand Motion & Commercial Reel', 'nexus-studio-motion', NULL, 'https://www.youtube.com/watch?v=EngW7tLk6R8', 4, NULL, NULL, 'High-energy commercial reel featuring kinetic typography and 3D visual effects.', NULL, NULL, NULL, NULL, 1, 7, 'trashed', NULL, NULL, NULL, '2026-09-19 09:41:20', NULL, '2026-09-18 17:58:23', '2026-09-19 09:41:20'),
  (9, 'Cyber Shield — Cyber Security Visual Identity', 'cyber-shield-identity', NULL, NULL, 1, NULL, NULL, 'Next-generation visual identity for an enterprise cybersecurity firm.', NULL, NULL, NULL, NULL, 1, 8, 'trashed', NULL, NULL, NULL, '2026-09-19 09:41:25', NULL, '2026-09-18 17:58:23', '2026-09-19 09:41:25'),
  (10, 'Velocity Gym — High-Energy Social Creative Kit', 'velocity-gym-social', NULL, NULL, 2, NULL, NULL, 'Aggressive, high-contrast social media ads driving memberships and sales.', NULL, NULL, NULL, NULL, 1, 9, 'trashed', NULL, NULL, NULL, '2026-09-19 09:41:29', NULL, '2026-09-18 17:58:23', '2026-09-19 09:41:29'),
  (11, 'Pulse AI — Futuristic Commercial Concept', 'pulse-ai-commercial', NULL, 'https://www.youtube.com/watch?v=EngW7tLk6R8', 4, NULL, NULL, 'Cutting-edge AI-assisted video editing and promotional spot for tech brands.', NULL, NULL, NULL, NULL, 1, 10, 'trashed', NULL, NULL, NULL, '2026-09-19 09:41:32', NULL, '2026-09-18 17:58:23', '2026-09-19 09:41:32'),
  (13, 'Dhurbomart Logo ', 'dhurbomart-logo', 18, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 'published', NULL, NULL, NULL, NULL, '2026-09-19 09:29:12', '2026-09-19 08:15:26', '2026-09-19 09:29:12'),
  (14, 'ads creative', 'ads-creative', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 'trashed', NULL, NULL, NULL, '2026-09-19 09:32:31', NULL, '2026-09-19 09:31:22', '2026-09-19 09:32:31');

-- Table structure for project_media
DROP TABLE IF EXISTS `project_media`;
CREATE TABLE `project_media` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_id` int NOT NULL,
  `media_id` int DEFAULT NULL,
  `video_url` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_type` enum('file','youtube','vimeo') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `poster_id` int DEFAULT NULL,
  `display_order` int NOT NULL DEFAULT '0',
  `type` enum('image','video') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'image',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `project_id` (`project_id`),
  KEY `media_id` (`media_id`),
  KEY `poster_id` (`poster_id`),
  CONSTRAINT `project_media_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE,
  CONSTRAINT `project_media_ibfk_2` FOREIGN KEY (`media_id`) REFERENCES `media` (`id`) ON DELETE CASCADE,
  CONSTRAINT `project_media_ibfk_3` FOREIGN KEY (`poster_id`) REFERENCES `media` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for client_logos
DROP TABLE IF EXISTS `client_logos`;
CREATE TABLE `client_logos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `media_id` int DEFAULT NULL,
  `website_url` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `display_order` int NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `media_id` (`media_id`),
  CONSTRAINT `client_logos_ibfk_1` FOREIGN KEY (`media_id`) REFERENCES `media` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for client_logos
INSERT INTO `client_logos` (`id`, `name`, `media_id`, `website_url`, `display_order`, `visible`, `deleted_at`, `created_at`, `updated_at`) VALUES
  (1, 'Aura Technologies', NULL, 'https://auratech.example.com', 1, 1, NULL, '2026-09-18 15:30:10', '2026-09-18 15:30:10'),
  (2, 'Maison Luxe', NULL, 'https://maisonluxe.example.com', 2, 1, NULL, '2026-09-18 15:30:10', '2026-09-18 15:30:10'),
  (3, 'Apex Athletics', NULL, 'https://apexathletics.example.com', 3, 1, NULL, '2026-09-18 15:30:10', '2026-09-18 15:30:10'),
  (4, 'Nordic Wood Craft', NULL, 'https://nordicwood.example.com', 4, 1, NULL, '2026-09-18 15:30:10', '2026-09-18 15:30:10'),
  (5, 'Pulse Media Global', NULL, 'https://pulsemedia.example.com', 5, 1, NULL, '2026-09-18 15:30:10', '2026-09-18 15:30:10'),
  (6, 'Zenith AI Labs', NULL, 'https://zenithai.example.com', 6, 1, NULL, '2026-09-18 15:30:10', '2026-09-18 15:30:10');

-- Table structure for testimonials
DROP TABLE IF EXISTS `testimonials`;
CREATE TABLE `testimonials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo_media_id` int DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` tinyint NOT NULL DEFAULT '5',
  `display_order` int NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `project_id` int DEFAULT NULL,
  `avatar_media_id` int DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `photo_media_id` (`photo_media_id`),
  CONSTRAINT `testimonials_ibfk_1` FOREIGN KEY (`photo_media_id`) REFERENCES `media` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data for testimonials
INSERT INTO `testimonials` (`id`, `author_name`, `author_role`, `company`, `photo_media_id`, `content`, `rating`, `display_order`, `visible`, `project_id`, `avatar_media_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
  (1, 'Alex Morgan', 'Founder & CEO', 'Aura Tech Solutions', NULL, 'Sakhawat transformed our tech brand identity completely. The logo and brand guidelines he delivered elevated our product to look like an established market leader. Exceptional communication, pixel-perfect attention to detail, and fast delivery!', 5, 1, 1, NULL, NULL, NULL, '2026-09-18 15:30:10', '2026-09-18 15:30:10'),
  (2, 'Sophie Laurent', 'Creative Director', 'Maison Luxe Cosmetics', NULL, 'Working with Sakhawat on our luxury skincare packaging design was an absolute pleasure. His eye for luxury typography, minimalist packaging aesthetics, and realistic 3D mockups exceeded all expectations.', 5, 2, 1, NULL, NULL, NULL, '2026-09-18 15:30:10', '2026-09-18 15:30:10'),
  (3, 'Rahim Ahmed', 'Co-Founder', 'QuickMart E-Commerce', NULL, 'The promotional ad creatives and social media post kits Sakhawat created for our campaign gave us an instant 45% bump in click-through rates. He is our go-to designer for every launch!', 5, 3, 1, NULL, NULL, NULL, '2026-09-18 15:30:10', '2026-09-18 15:30:10'),
  (4, 'Marcus Vance', 'Lead Producer', 'Pulse Media Agency', NULL, 'The AI video editing and promotional motion graphics Sakhawat created were mesmerizing. He has a brilliant sense of timing, rhythm, and visual storytelling on an elite level.', 5, 4, 1, NULL, NULL, NULL, '2026-09-18 15:30:10', '2026-09-18 15:30:10');

-- Table structure for inquiries
DROP TABLE IF EXISTS `inquiries`;
CREATE TABLE `inquiries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `budget` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ip_hash` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `read_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
