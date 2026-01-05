/*
  # Kontaktanfragen Tabelle erstellen
  
  1. Neue Tabelle
    - `kontaktanfragen`
      - `id` (uuid, primary key)
      - `anlass` (text)
      - `veranstaltungsart` (text)
      - `wunschtermin` (date, optional)
      - `alternativtermin` (date, optional)
      - `uhrzeit` (text, optional)
      - `personenzahl` (text, optional)
      - `raumwunsch` (text, optional)
      - `gastronomie` (jsonb, array of strings)
      - `getraenke` (jsonb, array of strings)
      - `technik` (jsonb, array of strings)
      - `budget` (text, optional)
      - `freitext` (text, optional)
      - `name` (text, required)
      - `firma` (text, optional)
      - `email` (text, required)
      - `telefon` (text, optional)
      - `created_at` (timestamptz, default now())
      - `status` (text, default 'neu')
  
  2. Sicherheit
    - Enable RLS auf `kontaktanfragen` Tabelle
    - Policy für öffentliches INSERT (damit das Formular funktioniert)
    - Policy für Admin-Zugriff auf alle Daten
*/

CREATE TABLE IF NOT EXISTS kontaktanfragen (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  anlass text,
  veranstaltungsart text,
  wunschtermin date,
  alternativtermin date,
  uhrzeit text,
  personenzahl text,
  raumwunsch text,
  gastronomie jsonb DEFAULT '[]'::jsonb,
  getraenke jsonb DEFAULT '[]'::jsonb,
  technik jsonb DEFAULT '[]'::jsonb,
  budget text,
  freitext text,
  name text NOT NULL,
  firma text,
  email text NOT NULL,
  telefon text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'neu'
);

ALTER TABLE kontaktanfragen ENABLE ROW LEVEL SECURITY;

-- Policy: Jeder kann eine Anfrage erstellen (INSERT)
CREATE POLICY "Öffentliches INSERT für Kontaktformular"
  ON kontaktanfragen
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Authentifizierte Nutzer können alle Anfragen lesen (für Admin-Bereich)
CREATE POLICY "Authentifizierte können alle Anfragen lesen"
  ON kontaktanfragen
  FOR SELECT
  TO authenticated
  USING (true);
