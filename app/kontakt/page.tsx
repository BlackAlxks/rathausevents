'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, MapPin, Train } from 'lucide-react';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

/*
 * Supabase Client Setup
 * Konfiguration für Datenbankzugriff und Edge Functions
 * Die E-Mail-Adresse für Admin-Benachrichtigungen ist in der Edge Function konfiguriert:
 * kontakt@polymedia.agency
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    anlass: '',
    veranstaltungsart: '',
    wunschtermin: '',
    alternativtermin: '',
    uhrzeit: '',
    personenzahl: '',
    raumwunsch: '',
    gastronomie: [] as string[],
    getraenke: [] as string[],
    technik: [] as string[],
    budget: '',
    freitext: '',
    name: '',
    firma: '',
    email: '',
    telefon: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Daten in Supabase speichern
      const { data, error } = await supabase
        .from('kontaktanfragen')
        .insert([
          {
            anlass: formData.anlass,
            veranstaltungsart: formData.veranstaltungsart,
            wunschtermin: formData.wunschtermin || null,
            alternativtermin: formData.alternativtermin || null,
            uhrzeit: formData.uhrzeit,
            personenzahl: formData.personenzahl,
            raumwunsch: formData.raumwunsch,
            gastronomie: formData.gastronomie,
            getraenke: formData.getraenke,
            technik: formData.technik,
            budget: formData.budget || null,
            freitext: formData.freitext || null,
            name: formData.name,
            firma: formData.firma || null,
            email: formData.email,
            telefon: formData.telefon || null,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      // 2. E-Mail via Edge Function versenden
      const emailResponse = await fetch(
        `${supabaseUrl}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseAnonKey}`,
          },
          body: JSON.stringify({
            ...formData,
            id: data.id,
          }),
        }
      );

      if (!emailResponse.ok) {
        console.error('E-Mail-Versand fehlgeschlagen, aber Anfrage wurde gespeichert');
      }

      // Erfolg
      alert('Vielen Dank für deine Anfrage! Wir melden uns in Kürze bei dir.');

      // Formular zurücksetzen
      setFormData({
        anlass: '',
        veranstaltungsart: '',
        wunschtermin: '',
        alternativtermin: '',
        uhrzeit: '',
        personenzahl: '',
        raumwunsch: '',
        gastronomie: [],
        getraenke: [],
        technik: [],
        budget: '',
        freitext: '',
        name: '',
        firma: '',
        email: '',
        telefon: '',
      });
    } catch (error) {
      console.error('Fehler beim Absenden:', error);
      alert('Es gab einen Fehler beim Absenden. Bitte versuche es erneut oder kontaktiere uns direkt per E-Mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (field: 'gastronomie' | 'getraenke' | 'technik', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  return (
    <main>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-neutral-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Kontakt und Anfrage
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Ein paar Angaben genügen, den Rest klären wir gemeinsam. Nutze das
            Formular, um uns die wichtigsten Eckdaten zu deiner geplanten
            Veranstaltung im Rathaus Friedrichshagen zu schicken. Je genauer
            deine Angaben zu Anlass, Datum und Gästezahl sind, desto
            zielgerichteter können wir dir Räume, Pauschalen und mögliche
            Abläufe vorschlagen.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Dein Event
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="anlass">Anlass</Label>
                  <Select
                    value={formData.anlass}
                    onValueChange={(value) =>
                      setFormData({ ...formData, anlass: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hochzeit">Hochzeit</SelectItem>
                      <SelectItem value="geburtstag">
                        Geburtstag oder Jubiläum
                      </SelectItem>
                      <SelectItem value="firmenfeier">Firmenfeier</SelectItem>
                      <SelectItem value="tagung">Tagung oder Workshop</SelectItem>
                      <SelectItem value="kultur">Kultur oder Konzert</SelectItem>
                      <SelectItem value="dreh">
                        Dreh oder Fotoshooting
                      </SelectItem>
                      <SelectItem value="sonstiges">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="veranstaltungsart">
                    Art der Veranstaltung
                  </Label>
                  <Select
                    value={formData.veranstaltungsart}
                    onValueChange={(value) =>
                      setFormData({ ...formData, veranstaltungsart: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="privat">Privat</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="kultur">Kultur</SelectItem>
                      <SelectItem value="produktion">Produktion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wunschtermin">Wunschtermin</Label>
                  <Input
                    type="date"
                    id="wunschtermin"
                    value={formData.wunschtermin}
                    onChange={(e) =>
                      setFormData({ ...formData, wunschtermin: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alternativtermin">
                    Alternativtermin (optional)
                  </Label>
                  <Input
                    type="date"
                    id="alternativtermin"
                    value={formData.alternativtermin}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        alternativtermin: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="uhrzeit">Geplante Uhrzeit / Zeitraum</Label>
                  <Input
                    type="text"
                    id="uhrzeit"
                    placeholder="z.B. 18:00 Uhr oder 14:00 bis 22:00 Uhr"
                    value={formData.uhrzeit}
                    onChange={(e) =>
                      setFormData({ ...formData, uhrzeit: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="personenzahl">Personenzahl</Label>
                  <Input
                    type="text"
                    id="personenzahl"
                    placeholder="z.B. 50 oder 40-60"
                    value={formData.personenzahl}
                    onChange={(e) =>
                      setFormData({ ...formData, personenzahl: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="raumwunsch">Raumwunsch</Label>
                  <Select
                    value={formData.raumwunsch}
                    onValueChange={(value) =>
                      setFormData({ ...formData, raumwunsch: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ratssaal">Alter Ratssaal</SelectItem>
                      <SelectItem value="ratskeller">Ratskeller</SelectItem>
                      <SelectItem value="hoftheke">Hoftheke</SelectItem>
                      <SelectItem value="buergermeisterzimmer">
                        Bürgermeisterzimmer
                      </SelectItem>
                      <SelectItem value="offen">Noch offen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Rahmen und Wünsche
              </h2>
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>Gastronomie</Label>
                  <div className="space-y-2">
                    {[
                      { value: 'empfang', label: 'Empfang' },
                      { value: 'menue', label: 'Menü' },
                      { value: 'buffet', label: 'Buffet' },
                      { value: 'fingerfood', label: 'Fingerfood' },
                      { value: 'unsicher', label: 'Noch unsicher' },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`gastro-${option.value}`}
                          checked={formData.gastronomie.includes(option.value)}
                          onCheckedChange={() =>
                            handleCheckboxChange('gastronomie', option.value)
                          }
                        />
                        <label
                          htmlFor={`gastro-${option.value}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Getränkepauschalen</Label>
                  <p className="text-sm text-neutral-600">
                    Alle Pauschalen können an dein Event angepasst werden
                  </p>
                  <div className="space-y-2">
                    {[
                      { value: 'pauschale-a', label: 'Pauschale A' },
                      { value: 'pauschale-b', label: 'Pauschale B' },
                      { value: 'pauschale-c', label: 'Pauschale C' },
                      { value: 'beratung', label: 'Beratung gewünscht' },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`getraenke-${option.value}`}
                          checked={formData.getraenke.includes(option.value)}
                          onCheckedChange={() =>
                            handleCheckboxChange('getraenke', option.value)
                          }
                        />
                        <label
                          htmlFor={`getraenke-${option.value}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Technik</Label>
                  <div className="space-y-2">
                    {[
                      {
                        value: 'tonanlage',
                        label: 'Tonanlage oder Mikrofon',
                      },
                      { value: 'buehne', label: 'Bühne oder Podium' },
                      { value: 'beamer', label: 'Beamer oder Leinwand' },
                      { value: 'licht', label: 'Licht' },
                      { value: 'sonstiges', label: 'Sonstiges' },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`technik-${option.value}`}
                          checked={formData.technik.includes(option.value)}
                          onCheckedChange={() =>
                            handleCheckboxChange('technik', option.value)
                          }
                        />
                        <label
                          htmlFor={`technik-${option.value}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budgetrahmen (optional)</Label>
                  <Input
                    type="text"
                    id="budget"
                    placeholder="z.B. 2.000 bis 3.000 Euro"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="freitext">
                    Was sollen wir über dein Event noch wissen?
                  </Label>
                  <Textarea
                    id="freitext"
                    rows={4}
                    placeholder="Besondere Wünsche, Ideen oder Fragen..."
                    value={formData.freitext}
                    onChange={(e) =>
                      setFormData({ ...formData, freitext: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Kontakt
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="firma">Firma (optional)</Label>
                  <Input
                    type="text"
                    id="firma"
                    value={formData.firma}
                    onChange={(e) =>
                      setFormData({ ...formData, firma: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefon">Telefon</Label>
                  <Input
                    type="tel"
                    id="telefon"
                    value={formData.telefon}
                    onChange={(e) =>
                      setFormData({ ...formData, telefon: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-sm text-neutral-600 leading-relaxed">
                Wir nutzen deine Angaben ausschließlich zur Bearbeitung deiner
                Anfrage und geben sie nicht an Dritte weiter.
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-amber-700 hover:bg-amber-800 transition-all duration-200"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Anfrage absenden'}
            </Button>
          </form>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            Persönliche Ansprechpartner
          </h2>
          <p className="text-neutral-700 mb-6 leading-relaxed">
            Fragen vorab? Wir sind erreichbar. Wenn du eine spezielle Frage hast
            oder uns dein Vorhaben kurz am Telefon schildern möchtest, kannst du
            uns auch direkt kontaktieren.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-neutral-900 mb-1">
                    Firmen- und Privatfeiern, Kultur und Konzerte, Drehs und
                    Produktionen
                  </div>
                  <a
                    href="mailto:convention@brauerei-friedrichshagen.de"
                    className="text-amber-700 hover:text-amber-800"
                  >
                    convention@brauerei-friedrichshagen.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Anfahrt</h2>
          <div className="bg-neutral-50 p-6 rounded-lg">
            <div className="mb-6">
              <div className="font-semibold text-neutral-900 mb-2">
                Historisches Rathaus Friedrichshagen
              </div>
              <div className="text-neutral-700">
                <div>Bölschestr. 87/88</div>
                <div>12587 Berlin</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Train className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                <div className="text-neutral-700">
                  <div className="font-medium mb-1">ÖPNV</div>
                  <p className="text-sm">
                    S-Bahn Linie S3, Bahnhof Friedrichshagen, sowie Tram-Linien
                    60 und 61, Haltestelle direkt am Haus
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-700 mt-0.5 flex-shrink-0" />
                <div className="text-neutral-700">
                  <div className="font-medium mb-1">Mit dem Auto</div>
                  <p className="text-sm">
                    Gut über die B1/B5 erreichbar, öffentliche Parkmöglichkeiten
                    im Umfeld
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-600">
                <strong>Barrierefreiheit:</strong> Alle Ebenen sind über einen
                Aufzug erreichbar, außerdem gibt es ein barrierefreies WC.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
