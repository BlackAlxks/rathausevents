import Link from 'next/link';
import { Building2, Mail, MapPin, Train } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-5 w-5 text-amber-600" />
              <span className="font-semibold text-white">
                Rathaus Friedrichshagen
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Historische Eventlocation in Berlin-Friedrichshagen für
              Hochzeiten, Firmenfeiern, Kultur und mehr.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-600" />
                <div>
                  <div>Bölschestr. 87/88</div>
                  <div>12587 Berlin</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-amber-600" />
                <a
                  href="mailto:convention@brauerei-friedrichshagen.de"
                  className="hover:text-white transition-colors"
                >
                  convention@brauerei-friedrichshagen.de
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Train className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-600" />
                <div>S3 Friedrichshagen, Tram 60/61</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="hover:text-white transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} Rathaus Friedrichshagen. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-4">
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="hover:text-white transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
