/*
  # Create Image Storage Buckets for Website

  1. New Storage Buckets
    - `gallery` - For gallery page images (Hochzeiten, Firmenfeiern, etc.)
    - `rooms` - For room images (Großer Saal, Kultursaal, Kaminzimmer, Außenterrasse)
    - `hero` - For hero/banner images
    - `general` - For other website images
  
  2. Security Policies
    - All buckets are publicly readable (marketing images)
    - Authenticated users can upload, update, and delete images
    - Public users can only view images
  
  3. Notes
    - All buckets are set to public for easy access
    - File size limits and mime type restrictions can be configured in Supabase Dashboard
    - Recommended to organize files in folders within buckets (e.g., gallery/hochzeiten/, gallery/firmenfeiern/)
*/

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('gallery', 'gallery', true, 10485760, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']::text[]),
  ('rooms', 'rooms', true, 10485760, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']::text[]),
  ('hero', 'hero', true, 10485760, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']::text[]),
  ('general', 'general', true, 10485760, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']::text[])
ON CONFLICT (id) DO NOTHING;

-- Policy: Public users can view all images
CREATE POLICY "Public users can view all images in gallery bucket"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'gallery');

CREATE POLICY "Public users can view all images in rooms bucket"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'rooms');

CREATE POLICY "Public users can view all images in hero bucket"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'hero');

CREATE POLICY "Public users can view all images in general bucket"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'general');

-- Policy: Authenticated users can upload images
CREATE POLICY "Authenticated users can upload images to gallery"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Authenticated users can upload images to rooms"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'rooms');

CREATE POLICY "Authenticated users can upload images to hero"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'hero');

CREATE POLICY "Authenticated users can upload images to general"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'general');

-- Policy: Authenticated users can update images
CREATE POLICY "Authenticated users can update images in gallery"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'gallery')
  WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Authenticated users can update images in rooms"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'rooms')
  WITH CHECK (bucket_id = 'rooms');

CREATE POLICY "Authenticated users can update images in hero"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'hero')
  WITH CHECK (bucket_id = 'hero');

CREATE POLICY "Authenticated users can update images in general"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'general')
  WITH CHECK (bucket_id = 'general');

-- Policy: Authenticated users can delete images
CREATE POLICY "Authenticated users can delete images in gallery"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'gallery');

CREATE POLICY "Authenticated users can delete images in rooms"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'rooms');

CREATE POLICY "Authenticated users can delete images in hero"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'hero');

CREATE POLICY "Authenticated users can delete images in general"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'general');