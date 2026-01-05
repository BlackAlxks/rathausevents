/*
  # Create Logo Storage Bucket

  1. New Storage Bucket
    - `logo` - For website logo and branding images
  
  2. Security Policies
    - Publicly readable (for displaying on website)
    - Authenticated users can upload, update, and delete logos
    - Public users can only view logos
  
  3. Notes
    - Public bucket for easy access
    - 10MB file size limit
    - Supports common image formats including SVG for logos
*/

-- Create logo storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('logo', 'logo', true, 10485760, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml']::text[])
ON CONFLICT (id) DO NOTHING;

-- Policy: Public users can view all logos
CREATE POLICY "Public users can view all logos"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'logo');

-- Policy: Authenticated users can upload logos
CREATE POLICY "Authenticated users can upload logos"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'logo');

-- Policy: Authenticated users can update logos
CREATE POLICY "Authenticated users can update logos"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'logo')
  WITH CHECK (bucket_id = 'logo');

-- Policy: Authenticated users can delete logos
CREATE POLICY "Authenticated users can delete logos"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'logo');