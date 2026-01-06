'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Lightbox } from '@/components/lightbox';
import { FoodBeverageSlideshow } from '@/components/food-beverage-slideshow';
import { HeroFloatingTiles } from '@/components/hero-floating-tiles';
import { EventProcessSection } from '@/components/event-process-section';
import { useState } from 'react';
import {
  Building2,
  Users,
  Music,
  Briefcase,
  Heart,
  Camera,
  MapPin,
  CheckCircle,
  Download,
  ArrowRight,
  Phone,
  Mail,
} from 'lucide-react';

const roomGalleries = {
  ratssaal: [
    { src: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-13.jpg', alt: 'Festlich gedeckte Tafel im Alten Ratssaal' },
    { src: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-22.jpg', alt: 'Trauung im Alten Ratssaal' },
    { src: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-27.jpg', alt: 'Hochzeitsfeier im Alten Ratssaal' },
    { src: '/images/Party/Party_55A6675.jpg', alt: 'Party im Ratssaal' },
    { src: '/images/Party/Party_55A7097.jpg', alt: 'Event im Saal' },
  ],
  ratskeller: [
    { src: '/images/Ratskeller/Ratskeller__55A1776.jpg', alt: 'Ratskeller Gewölbe' },
    { src: '/images/Ratskeller/Ratskeller__55A1262.jpg', alt: 'Ratskeller Hauptraum' },
    { src: '/images/Ratskeller/Ratskeller__55A1842.jpg', alt: 'Ratskeller Feier' },
    { src: '/images/Ratskeller/Ratskeller__55A1859.jpg', alt: 'Ratskeller Bar' },
    { src: '/images/Ratskeller/Ratskeller_gaeste.jpg', alt: 'Ratskeller Gäste' },
    { src: '/images/Ratskeller/Ratskeller_gaeste3.jpg', alt: 'Ratskeller Event' },
  ],
  hoftheke: [
    { src: '/images/Hoftheke/Hoftheke_55A8729-Panorama.jpg', alt: 'Hoftheke Panorama' },
    { src: '/images/Hoftheke/Hoftheke_555A7081.jpg', alt: 'Hoftheke' },
    { src: '/images/Hoftheke/Hoftheke_55A9612.jpg', alt: 'Hoftheke Innenraum' },
    { src: '/images/Hoftheke/Hoftheke_55A9885.jpg', alt: 'Hoftheke Sommerfest' },
  ],
  buergermeisterzimmer: [
    { src: '/images/Bürgermeisterzimmer/Bürgermeisterzimmer_20160615-IMG_0361.JPG', alt: 'Historisches Bürgermeisterzimmer' },
    { src: '/images/Bürgermeisterzimmer/Bürgermeisterzimmer_IMG_0292.JPG', alt: 'Bürgermeisterzimmer Detail' },
    { src: '/images/Bürgermeisterzimmer/Bürgermeisterzimmer_IMG_0294.JPG', alt: 'Bürgermeisterzimmer Salon' },
  ],
};

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<keyof typeof roomGalleries>('ratssaal');

  const openLightbox = (room: keyof typeof roomGalleries) => {
    setCurrentGallery(room);
    setLightboxOpen(true);
  };

  return (
    <main>
      <Lightbox
        images={roomGalleries[currentGallery]}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
      <section className="relative bg-gradient-to-br from-neutral-50 to-amber-50 py-20 lg:py-28 overflow-hidden min-h-[600px]">
        <HeroFloatingTiles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl lg:max-w-3xl">
            <div className="text-amber-700 font-medium mb-3">
              Eventlocation in Berlin-Friedrichshagen für 10 bis 200 Personen
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Feiern, Tagen und Kultur im historischen Rathaus Friedrichshagen
            </h1>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Ob Hochzeit, Firmenfeier, Konzert oder Workshop: Im Rathaus
              Friedrichshagen triffst du auf ein Stück Berliner Geschichte, das
              heute als wandelbare Eventlocation genutzt wird. Historische
              Architektur, flexible Raumkonzepte und ein erfahrenes Team im
              Hintergrund sorgen dafür, dass aus deiner Idee ein stimmiges Event
              wird.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 transition-all duration-200 hover:shadow-lg"
              >
                <Link href="/kontakt">
                  Jetzt Event anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-all duration-200 hover:border-amber-700 hover:text-amber-700">
                <Link href="#raeume">Räume entdecken</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 lg:hidden grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-13.jpg"
                alt="Hochzeit im Rathaus"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/Party/Party_55A6675.jpg"
                alt="Party im Rathaus"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Was das Rathaus Friedrichshagen besonders macht
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Ein Haus mit vielen Möglichkeiten, alles unter einem Dach.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Das historische Rathaus Friedrichshagen verbindet den Charme
                eines denkmalgeschützten Gebäudes mit den Anforderungen moderner
                Veranstaltungen. Die Räume wurden sorgsam saniert, ohne ihren
                Charakter zu verlieren, und lassen sich für verschiedene Setups
                von 10 bis 200 Personen nutzen.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <img
                src="/images/Außenansicht/Outside_rathaus_outside_view.jpg"
                alt="Außenansicht des historischen Rathauses Friedrichshagen mit Fassade und Eingangsbereich"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <Building2 className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  Historisch und repräsentativ
                </h3>
                <p className="text-sm text-neutral-600">
                  Denkmalgeschützte Räume im Stil der Kaiserzeit
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  Flexibel und wandelbar
                </h3>
                <p className="text-sm text-neutral-600">
                  Passende Setups für 10 bis 200 Personen
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Music className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  Alle Eventarten
                </h3>
                <p className="text-sm text-neutral-600">
                  Private Feiern, Business, Kultur und Produktionen
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">
                  Persönliche Betreuung
                </h3>
                <p className="text-sm text-neutral-600">
                  Von der ersten Idee bis zum Veranstaltungsende
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="raeume" className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Unsere Räume im Rathaus
            </h2>
            <p className="text-lg text-neutral-600">
              Vom großen Saal mit Stuck bis zum gemütlichen Kellergewölbe.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              onClick={() => openLightbox('ratssaal')}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <img
                src="/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-27.jpg"
                alt="Hochzeitsfeier im Alten Ratssaal mit Gästen"
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Alter Ratssaal
                </h3>
                <p className="text-sm text-amber-700 mb-3">
                  Für Feste, Tagungen und Konzerte
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Das Herzstück des Hauses: hohe Decken, Stuck, Wandgemälde und
                  große Fensterfronten schaffen eine eindrucksvolle Kulisse. Bis
                  zu 150 Personen, flexibel von Reihenbestuhlung bis zur
                  festlich gedeckten Tafel.
                </p>
              </div>
            </div>

            <div
              onClick={() => openLightbox('ratskeller')}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <img
                src="/images/Ratskeller/Ratskeller__55A1776.jpg"
                alt="Ratskeller mit gedeckten Tischen für Feiern"
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Ratskeller
                </h3>
                <p className="text-sm text-amber-700 mb-3">
                  Rustikaler Keller für Feiern
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Der gemütliche Gegenpol zum großen Saal. Mit historischem
                  Gewölbe, Bar und Platz für Buffet, kleine Bühne oder
                  Tanzfläche. Ideal für Weihnachtsfeiern, Geburtstage und
                  Themenabende.
                </p>
              </div>
            </div>

            <div
              onClick={() => openLightbox('hoftheke')}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <img
                src="/images/Hoftheke/Hoftheke_55A8729-Panorama.jpg"
                alt="Panoramaaufnahme der Hoftheke mit angrenzendem Innenhof"
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Hoftheke
                </h3>
                <p className="text-sm text-amber-700 mb-3">
                  Raum mit Hofzugang
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Erdgeschoss mit direktem Zugang zum Innenhof. Ideal für
                  kleinere Feiern, Teamevents oder Sommerfeste, bei denen Gäste
                  zwischen drinnen und draußen wechseln können.
                </p>
              </div>
            </div>

            <div
              onClick={() => openLightbox('buergermeisterzimmer')}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <img
                src="/images/Bürgermeisterzimmer/Bürgermeisterzimmer_20160615-IMG_0361.JPG"
                alt="Historisches Bürgermeisterzimmer mit Holzvertäfelung und klassischem Mobiliar"
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Bürgermeisterzimmer
                </h3>
                <p className="text-sm text-amber-700 mb-3">
                  Historische Salons
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Zwei holzvertäfelte Salons mit besonderem Flair. Für
                  vertrauliche Gespräche, exklusive Empfänge oder als ruhiger
                  Rückzugsort innerhalb größerer Events.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center text-sm text-neutral-600">
            <CheckCircle className="h-4 w-4 mr-2 text-amber-700" />
            Alle Ebenen sind barrierefrei über einen Aufzug erreichbar
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Für welchen Anlass suchst du eine Location?
            </h2>
            <p className="text-lg text-neutral-600">
              Flexibel in Anlass, Ablauf und Größe von 10 bis 200 Personen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg border border-amber-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200 cursor-pointer">
              <Heart className="h-8 w-8 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Hochzeiten und private Feiern
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Standesamtliche Trauung, Hochzeit, Geburtstag oder Jubiläum:
                Empfang, Essen und Feier unter einem Dach. Der Alte Ratssaal
                bietet die große Bühne, weitere Räume den Rahmen für den
                Ausklang im kleineren Kreis.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg border border-amber-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200 cursor-pointer">
              <Briefcase className="h-8 w-8 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Firmenfeiern, Tagungen und Workshops
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Vom Team-Meeting über Workshops und Tagungen bis zur Jahresfeier:
                Die Mischung aus professionellem Rahmen und angenehmer
                Atmosphäre. Präsentationen, Austausch und lockerer Teil am Abend
                unter einem Dach.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg border border-amber-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200 cursor-pointer">
              <Music className="h-8 w-8 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Kultur und Konzerte
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Konzerte, Lesungen, Kabarett, Tanzveranstaltungen oder
                Chorkonzerte: Der Alte Ratssaal hat bereits viele Kulturformate
                gesehen. Bühne, Bestuhlung, Akustik und Licht können an die
                jeweilige Veranstaltung angepasst werden.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg border border-amber-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200 cursor-pointer">
              <Camera className="h-8 w-8 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Drehs und Fotoshootings
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Die historischen Räume wurden bereits mehrfach als Film- und
                Fotolocation genutzt. Vom repräsentativen Saal über die Salons
                bis zum rustikalen Keller bieten viele Motive und Perspektiven.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EventProcessSection />

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Essen, Trinken und planbare Pauschalen
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Kulinarik, die zum Event und zur Gästezahl passt.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Gemeinsam mit der Gastronomie im Haus entwickeln wir Menü- oder
                Buffetvorschläge, die zu deinem Anlass und Budget passen, von
                der kleinen Runde bis zum großen Fest. Ob gesetztes Dinner,
                klassisches Buffet oder Fingerfood im Stehen: Wir achten darauf,
                dass Angebot, Ablauf und Timing stimmig sind.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-8">
                Zusätzlich kannst du aus verschiedenen Getränkepauschalen wählen
                oder dich individuell beraten lassen. So bleibt die Kalkulation
                transparent und du weißt schon im Vorfeld, womit du rechnen
                kannst.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-amber-700 text-amber-700 hover:bg-amber-50 transition-all duration-200 hover:border-amber-800"
              >
                <a href="/pdf/0-Angebote-Bankett-Brau-und-Genusswerkstatt_2026.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  PDF mit Beispielpauschalen herunterladen
                </a>
              </Button>
            </div>
            <FoodBeverageSlideshow />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Warum Veranstalter gern mit uns planen
            </h2>
            <p className="text-lg text-neutral-600">
              Sicherheit in Planung und Ablauf, mit einem Team, das mitdenkt.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">
                Fester Kontakt
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Persönliche Ansprechpartner für dein Event, die den gesamten
                Prozess begleiten
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Erfahrung</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Langjährige Expertise mit privaten, geschäftlichen und
                kulturellen Veranstaltungen
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">
                Flexibilität
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Raumkombinationen und Setups für 10 bis 200 Personen, angepasst
                an deinen Anlass
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">
                Erreichbarkeit
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Gute Anbindung und barrierefreier Zugang für alle Gäste
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2 text-center">
              Ansprechpartner
            </h3>
            <p className="text-neutral-600 text-center mb-8">
              Deine persönlichen Ansprechpartner für Events im Rathaus Friedrichshagen
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-neutral-200 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-neutral-900 mb-3">Samantha Krebs</h4>
                <p className="text-sm text-neutral-600 mb-6">
                  Firmen und Privatfeiern, Hochzeiten, Trauungen, Dreharbeiten
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-neutral-700">
                    <Phone className="h-5 w-5 text-amber-700 flex-shrink-0" />
                    <a href="tel:01624533204" className="hover:text-amber-700 transition-colors">
                      0162 4533204
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-700">
                    <Mail className="h-5 w-5 text-amber-700 flex-shrink-0" />
                    <a href="mailto:convention@brauerei-friedrichshagen.de" className="hover:text-amber-700 transition-colors break-all text-sm">
                      convention@brauerei-friedrichshagen.de
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-neutral-200 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-neutral-900 mb-3">René Baruth</h4>
                <p className="text-sm text-neutral-600 mb-6">
                  Firmen und Privatfeiern, Bankette, Veranstaltungen
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-neutral-700">
                    <Phone className="h-5 w-5 text-amber-700 flex-shrink-0" />
                    <a href="tel:01624533204" className="hover:text-amber-700 transition-colors">
                      0162 4533204
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-700">
                    <Mail className="h-5 w-5 text-amber-700 flex-shrink-0" />
                    <a href="mailto:bankett@rathaus-events.de" className="hover:text-amber-700 transition-colors break-all text-sm">
                      bankett@rathaus-events.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src="/images/map/makrolage.png"
                  alt="Makrolage Berlin Friedrichshagen"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src="/images/map/mikrolage.png"
                  alt="Mikrolage Rathaus Friedrichshagen"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Gut erreichbar in Berlin-Friedrichshagen
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Zwischen Bölschestraße und Müggelsee, Stadt und Ausflug in einem.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Das Rathaus Friedrichshagen liegt an der Bölschestr. 87/88 im
                Berliner Südosten, in einem lebendigen Stadtteil mit viel
                Geschichte, Gastronomie und Nähe zum Müggelsee. Deine Gäste
                erreichen das Haus mit der S-Bahn, Linie S3, Bahnhof
                Friedrichshagen, und den Tram-Linien 60 und 61 in kurzer Zeit
                aus der Innenstadt.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Für die Anreise mit dem Auto ist das Rathaus gut über die B1/B5
                angebunden, im Umfeld stehen öffentliche Parkmöglichkeiten zur
                Verfügung. Alle Ebenen sind über einen Aufzug erreichbar,
                außerdem steht ein barrierefreies WC zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Lass uns über dein Event sprechen
          </h2>
          <p className="text-lg text-amber-100 mb-8">
            Kurze Anfrage, klare Rückmeldung. Du hast schon ein Datum im Kopf
            oder planst erst grob? Wir prüfen die Verfügbarkeit, melden uns mit
            Rückfragen oder einem ersten Vorschlag und begleiten dich von dort
            an durch die weitere Planung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 transition-all duration-200"
            >
              <a href="tel:01624533204">
                <Phone className="mr-2 h-4 w-4" />
                Anrufen
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-amber-700 hover:bg-amber-50 transition-all duration-200 hover:shadow-lg"
            >
              <Link href="/kontakt">
                Jetzt anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 transition-all duration-200"
            >
              <a href="mailto:convention@brauerei-friedrichshagen.de">
                <Mail className="mr-2 h-4 w-4" />
                E-Mail schreiben
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
