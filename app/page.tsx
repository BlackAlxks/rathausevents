'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Lightbox } from '@/components/lightbox';
import { FoodBeverageSlideshow } from '@/components/food-beverage-slideshow';
import { HeroSlideshow } from '@/components/hero-slideshow';
import { EventProcessSection } from '@/components/event-process-section';
import { SmartImage } from '@/components/smart-image';
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
  Info,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const roomGalleries = {
  ratssaal: [
    { src: '/images/Ratssaal/IMG_9209.webp', alt: 'Alter Ratssaal mit Stuck' },
    { src: '/images/Ratssaal/IMG_9402.webp', alt: 'Ratssaal Detail' },
    { src: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-13.webp', alt: 'Festlich gedeckte Tafel im Alten Ratssaal' },
    { src: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-22.webp', alt: 'Trauung im Alten Ratssaal' },
    { src: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-27.webp', alt: 'Hochzeitsfeier im Alten Ratssaal' },
    { src: '/images/Party/Party_55A6675.webp', alt: 'Party im Ratssaal' },
    { src: '/images/Party/Party_55A7097.webp', alt: 'Event im Saal' },
    { src: '/images/Party/Party_55A6677.webp', alt: 'Konzert im Ratssaal' },
  ],
  ratskeller: [
    { src: '/images/Ratskeller/Ratskeller__55A1776.webp', alt: 'Ratskeller Gewölbe' },
    { src: '/images/Ratskeller/Ratskeller__55A1262.webp', alt: 'Ratskeller Hauptraum' },
    { src: '/images/Ratskeller/Ratskeller__55A1842.webp', alt: 'Ratskeller Feier' },
    { src: '/images/Ratskeller/Ratskeller__55A1859.webp', alt: 'Ratskeller Bar' },
    { src: '/images/Ratskeller/Ratskeller__55A9957.webp', alt: 'Ratskeller Atmosphäre' },
    { src: '/images/Ratskeller/Ratskeller_Keller.webp', alt: 'Ratskeller Gewölbekeller' },
    { src: '/images/Ratskeller/Ratskeller_gaeste.webp', alt: 'Ratskeller Gäste' },
    { src: '/images/Ratskeller/Ratskeller_gaeste3.webp', alt: 'Ratskeller Event' },
    { src: '/images/Ratskeller/Ratskeller_BGW_DollerAbend130622_FH-7251.webp', alt: 'Besonderer Abend im Ratskeller' },
  ],
  hoftheke: [
    { src: '/images/Hoftheke/Hoftheke_55A8738-Pano.webp', alt: 'Hoftheke Panorama' },
    { src: '/images/Hoftheke/Hoftheke_55A8821-Pano.webp', alt: 'Hoftheke Weitwinkel' },
    { src: '/images/Hoftheke/Hoftheke_XX!_55A9788-Panorama.webp', alt: 'Hoftheke 360°' },
    { src: '/images/Hoftheke/Hoftheke_555A7081.webp', alt: 'Hoftheke' },
    { src: '/images/Hoftheke/Hoftheke_55A9612.webp', alt: 'Hoftheke Innenraum' },
    { src: '/images/Hoftheke/Hoftheke_55A9885.webp', alt: 'Hoftheke Sommerfest' },
    { src: '/images/Hoftheke/Hoftheke_Hoftheke Rustikal.webp', alt: 'Hoftheke Rustikal' },
    { src: '/images/Hoftheke/Hoftheke_Hoftheke3.webp', alt: 'Hoftheke Ambiente' },
    { src: '/images/Hoftheke/Hoftheke_03.webp', alt: 'Hoftheke Detail' },
  ],
  buergermeisterzimmer: [
    { src: '/images/Bürgermeisterzimmer/Bürgermeisterzimmer_20160615-IMG_0361.webp', alt: 'Historisches Bürgermeisterzimmer' },
    { src: '/images/Bürgermeisterzimmer/Bürgermeisterzimmer_IMG_0292.webp', alt: 'Bürgermeisterzimmer Detail' },
    { src: '/images/Bürgermeisterzimmer/Bürgermeisterzimmer_IMG_0294.webp', alt: 'Bürgermeisterzimmer Salon' },
  ],
  lounge: [
    { src: '/images/Lounge/2025-04 Lounge .webp', alt: 'Lounge-Bereich' },
    { src: '/images/Allgemein/General_20160615-IMG_0117.webp', alt: 'Rathaus Impression' },
    { src: '/images/Allgemein/General_20160615-IMG_0127.webp', alt: 'Rathaus Detail' },
  ],
};

const packageHighlights = [
  {
    title: 'Saisonales Buffet',
    price: 'ab 48,00 € pro Person',
    features: ['Vorspeisen, Suppe, Hauptgänge & Dessert', 'Fleisch, vegetarisch & vegan möglich', 'Saisonale & regionale Küche', 'ab 30 Personen'],
  },
  {
    title: 'Kleine Vesper',
    price: 'ab 30,00 € pro Person',
    features: ['Kalte Braten & Gemüse', 'Brotauswahl', 'Zwei Eintöpfe (1x pflanzenbasiert)', 'Perfekt für kleinere Runden'],
  },
  {
    title: 'Getränkepauschale Basis',
    price: '38,00 € (5 Stunden)',
    features: ['Bier, Wein & Softgetränks', 'Kaffeespezialitäten & Tee', 'Klassische Auswahl', 'Unbegrenzte Getränke'],
  },
  {
    title: 'Getränkepauschale Volle Kanne',
    price: '47,50 € (5 Stunden)',
    features: ['Bier, Wein, Prosecco', 'Softgetränke & Säfte', 'Longdrinks', 'Premium-Auswahl'],
  },
  {
    title: 'Getränkepauschale Doll Regional',
    price: '50,00 € (5 Stunden)',
    features: ['Regionale Biere & Weine', 'Prosecco & Longdrinks', 'Berliner Spezialitäten', 'Exklusive Auswahl'],
  },
];

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<keyof typeof roomGalleries>('ratssaal');
  const [packageModalOpen, setPackageModalOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(0);

  const openLightbox = (room: keyof typeof roomGalleries) => {
    setCurrentGallery(room);
    setLightboxOpen(true);
  };

  const nextPackage = () => {
    setCurrentPackage((prev) => (prev + 1) % packageHighlights.length);
  };

  const prevPackage = () => {
    setCurrentPackage((prev) => (prev === 0 ? packageHighlights.length - 1 : prev - 1));
  };

  return (
    <main className="relative">
      <Lightbox
        images={roomGalleries[currentGallery]}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        showFoodNotice={currentGallery === 'ratskeller'}
      />

      {packageModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setPackageModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Pauschalen-Übersicht
            </h3>
            <p className="text-neutral-700 mb-6">
              Unsere Buffet- und Getränkepauschalen können individuell kombiniert und an Ihre Veranstaltung angepasst werden.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {packageHighlights.map((pkg, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-200 rounded-lg p-4 hover:border-brand-accent transition-colors"
                >
                  <h4 className="font-bold text-neutral-900 mb-2">{pkg.title}</h4>
                  <p className="text-brand-primary font-semibold mb-3">{pkg.price}</p>
                  <ul className="space-y-1 text-sm text-neutral-700">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
              <p className="text-sm text-neutral-700">
                Die vollständigen Pauschalen mit allen Details finden Sie in den PDF-Dokumenten zum Download.
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="relative">
        <HeroSlideshow />
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Rathaus Friedrichshagen
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 drop-shadow-lg">
              Ihre Eventlocation im Herzen von Berlin
            </p>
            <div className="flex flex-wrap gap-4 justify-center pointer-events-auto">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    borderWidth: '2px',
                    borderColor: 'var(--color-primary)',
                    borderStyle: 'solid'
                  }}
                  className="transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  Jetzt anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/galerie">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-2 transition-all duration-300"
                  style={{
                    borderColor: 'var(--color-primary)',
                    color: 'var(--color-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'white';
                    e.currentTarget.style.color = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.color = 'var(--color-primary)';
                  }}
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Zur Galerie
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                Was das Rathaus Friedrichshagen besonders macht
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Das historische Rathaus Friedrichshagen bietet die ideale Kulisse für Ihre Firmenveranstaltung oder private Feier. Ob Sommerfest, Weihnachtsfeier, Teamevent, Geburtstag oder Hochzeit – wir schaffen den passenden Rahmen für Ihre Veranstaltung.
                </p>
                <p>
                  Unsere flexiblen Räumlichkeiten lassen sich individuell kombinieren und auf Ihre Bedürfnisse abstimmen. Von intimen Zusammenkünften mit 10 Personen bis zu großen Feiern mit bis zu 200 Gästen passen wir die Raumkonfiguration genau an Ihr Event an.
                </p>
                <p>
                  Mit unserem professionellen Eventmanagement begleiten wir Sie von der ersten Planung bis zur erfolgreichen Durchführung. Wir entwickeln maßgeschneiderte Eventpakete, die auf Ihre Vorstellungen zugeschnitten sind.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative aspect-[4/3]">
              <SmartImage
                src="/images/Außenansicht/Outside_rathaus_outside_view.webp"
                alt="Außenansicht des historischen Rathauses Friedrichshagen mit Fassade und Eingangsbereich"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="flex items-start space-x-3">
              <Building2 className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Denkmalgeschützt</h3>
                <p className="text-sm text-neutral-600">Historisches Gebäude mit Charakter</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">10 bis 200 Gäste</h3>
                <p className="text-sm text-neutral-600">Flexibel skalierbar</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Music className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Moderne Technik</h3>
                <p className="text-sm text-neutral-600">Sound, Licht & Präsentation</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Top-Lage Berlin</h3>
                <p className="text-sm text-neutral-600">Sehr gut erreichbar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
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
              <div className="relative aspect-video">
                <SmartImage
                  src="/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-27.webp"
                  alt="Hochzeitsfeier im Alten Ratssaal mit Gästen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Alter Ratssaal
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--color-primary)' }}>
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
              <div className="relative aspect-video">
                <SmartImage
                  src="/images/Ratskeller/Ratskeller__55A1776.webp"
                  alt="Ratskeller mit gedeckten Tischen für Feiern"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: 'var(--color-sand)', color: 'var(--color-primary)' }}>
                    Auch für Essen geöffnet
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Ratskeller
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--color-primary)' }}>
                  Rustikaler Keller für Feiern
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Der gemütliche Gegenpol zum großen Saal. Mit historischem
                  Gewölbe, Bar und Platz für Buffet, kleine Bühne oder
                  Tanzfläche. Ideal für Weihnachtsfeiern, Geburtstage und
                  Themenabende. Kommen Sie auch gern zum Essen vorbei!
                </p>
              </div>
            </div>

            <div
              onClick={() => openLightbox('hoftheke')}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative aspect-video">
                <SmartImage
                  src="/images/Hoftheke/Hoftheke_55A8738-Pano.webp"
                  alt="Panoramaaufnahme der Hoftheke mit angrenzendem Innenhof"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Hoftheke
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--color-primary)' }}>
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
              <div className="relative aspect-video">
                <SmartImage
                  src="/images/Bürgermeisterzimmer/Bürgermeisterzimmer_20160615-IMG_0361.webp"
                  alt="Historisches Bürgermeisterzimmer mit Holzvertäfelung und klassischem Mobiliar"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Bürgermeisterzimmer
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--color-primary)' }}>
                  Repräsentativer Salon
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Historisches Ambiente mit Holzvertäfelung und klassischem
                  Mobiliar. Perfekt für kleine Empfänge, Besprechungen oder
                  standesamtliche Trauungen bis zu 30 Personen.
                </p>
              </div>
            </div>

            <div
              onClick={() => openLightbox('lounge')}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative aspect-video">
                <SmartImage
                  src="/images/Lounge/2025-04 Lounge .webp"
                  alt="Moderne Lounge im Rathaus mit entspannter Atmosphäre"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Lounge
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--color-primary)' }}>
                  Entspannter Empfangsbereich
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Moderne Lounge-Atmosphäre für Empfänge, Networking-Events
                  oder als gemütlicher Rückzugsort bei größeren Veranstaltungen.
                  Ideal für lockere Zusammenkünfte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Von der Idee zum fertigen Event
            </h2>
            <p className="text-lg text-neutral-600">
              Wir begleiten Sie durch den gesamten Planungsprozess – mit persönlicher Beratung und professioneller Umsetzung.
            </p>
          </div>
          <EventProcessSection />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Warum Veranstalter gern mit uns arbeiten
            </h2>
            <p className="text-lg text-neutral-600">
              Verlässliche Planung, professionelle Umsetzung und ein eingespieltes Team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-sand)' }}>
                <Briefcase className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Professionelles Team
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Erfahrenes Servicepersonal und geschulte Techniker sorgen für reibungslose Abläufe. Wir kennen unser Haus und wissen, worauf es ankommt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-sand)' }}>
                <CheckCircle className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Maßgeschneiderte Angebote
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Jedes Event ist einzigartig. Wir entwickeln individuelle Konzepte, die genau zu Ihren Anforderungen und Ihrem Budget passen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-sand)' }}>
                <Users className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Eingespieltes Team
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Durch langjährige Zusammenarbeit greifen alle Prozesse ineinander. Von der Küche bis zur Technik – bei uns arbeiten alle Hand in Hand.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-sand)' }}>
                <Building2 className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Planungssicherheit
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Klare Absprachen, verlässliche Termine und transparente Kostenplanung. Sie wissen jederzeit, woran Sie sind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-sand)' }}>
                <Heart className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Persönliche Betreuung
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Ein fester Ansprechpartner koordiniert Ihre Veranstaltung von Anfang bis Ende. Kurze Wege, schnelle Entscheidungen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-sand)' }}>
                <Music className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Komplette Ausstattung
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Von Sound- und Lichttechnik bis zur Dekoration – wir stellen alles bereit oder vermitteln zuverlässige Partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Catering & Gastronomie
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                In Zusammenarbeit mit der Brauerei Friedrichshagen bieten wir Ihnen
                professionelle Gastronomie für Ihre Veranstaltung – von kleinen
                Snacks bis zu mehrgängigen Menüs.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-neutral-700">Buffets für jede Gruppengröße</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-neutral-700">Gesetzte Menüs (bis 20 Personen)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-neutral-700">Flying Buffet & Fingerfood</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-neutral-700">Regionale und saisonale Küche</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-neutral-700">Vegane & vegetarische Optionen</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-neutral-700">Getränkepauschalen oder à la carte</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/pdf/1-Büfett Brau- & Genusswerkstatt 2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button style={{ backgroundColor: 'var(--color-primary)', color: 'white' }} className="hover:opacity-90">
                    <Download className="mr-2 h-4 w-4" />
                    Buffet-Angebote (PDF)
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <FoodBeverageSlideshow />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Pauschalen & Preise
            </h2>
            <p className="text-lg text-neutral-600">
              Unsere Pauschalen basieren auf erprobten Buffet- und Getränkekonzepten und können individuell an Ihre Veranstaltung angepasst werden.
            </p>
          </div>

          <div className="relative mb-8 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Pauschalen im Überblick</h3>
                <div className="relative overflow-hidden" suppressHydrationWarning>
                  <div className="transition-all duration-500 ease-in-out">
                    <div className="border border-neutral-200 rounded-lg p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-neutral-900">{packageHighlights[currentPackage].title}</h4>
                        <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>{packageHighlights[currentPackage].price}</span>
                      </div>
                      <ul className="space-y-2">
                        {packageHighlights[currentPackage].features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-neutral-700">
                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4" suppressHydrationWarning>
                    <button
                      onClick={prevPackage}
                      className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-50 transition-colors"
                      aria-label="Vorherige Pauschale"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                      {packageHighlights.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentPackage(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentPackage ? 'w-6' : ''
                          }`}
                          style={{
                            backgroundColor: idx === currentPackage ? 'var(--color-primary)' : 'var(--color-sand)'
                          }}
                          aria-label={`Pauschale ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextPackage}
                      className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-50 transition-colors"
                      aria-label="Nächste Pauschale"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setPackageModalOpen(true)}
                className="flex-shrink-0 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Alle Pauschalen anzeigen"
              >
                <Info className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Komplette Pauschalen-Übersicht
              </h3>
              <p className="text-neutral-700 mb-4">
                Laden Sie unsere detaillierten Pauschalen als PDF herunter. Darin finden Sie alle Leistungen, Preise und Optionen.
              </p>
              <a
                href="/pdf/0-Angebote-Bankett-Brau-und-Genusswerkstatt_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button style={{ backgroundColor: 'var(--color-primary)', color: 'white' }} className="hover:opacity-90">
                  <Download className="mr-2 h-4 w-4" />
                  Pauschalen-Übersicht (PDF)
                </Button>
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Individuelles Angebot
              </h3>
              <p className="text-neutral-700 mb-4">
                Kein passendes Paket dabei? Wir erstellen Ihnen gern ein maßgeschneidertes Angebot für Ihre Veranstaltung.
              </p>
              <Link href="/kontakt">
                <Button style={{ backgroundColor: 'var(--color-primary)', color: 'white' }} className="hover:opacity-90">
                  <Mail className="mr-2 h-4 w-4" />
                  Jetzt Angebot anfragen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Lage & Anfahrt
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Das Rathaus Friedrichshagen liegt an der Bölschestr. 87/88 im
                Berliner Südosten, in einem lebendigen Stadtteil mit viel
                Geschichte, Gastronomie und Nähe zum Müggelsee. Ihre Gäste
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
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full aspect-square">
                  <SmartImage
                    src="/images/map/makrolage.webp"
                    alt="Makrolage Berlin Friedrichshagen"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain rounded"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full aspect-square">
                  <SmartImage
                    src="/images/map/mikrolage.webp"
                    alt="Mikrolage Rathaus Friedrichshagen"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Lassen Sie uns über Ihre Veranstaltung sprechen
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Wir freuen uns darauf, Ihre Ideen kennenzulernen und gemeinsam das perfekte Event zu planen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt">
              <Button size="lg" className="bg-white text-black hover:opacity-90" style={{ color: 'var(--color-primary)' }}>
                Kontaktformular
              </Button>
            </Link>
            <a href="tel:01624533204">
              <Button size="lg" className="bg-white text-black hover:opacity-90" style={{ color: 'var(--color-primary)' }}>
                <Phone className="mr-2 h-5 w-5" />
                Anrufen
              </Button>
            </a>
            <a href="mailto:convention@brauerei-friedrichshagen.de">
              <Button size="lg" className="bg-white text-black hover:opacity-90" style={{ color: 'var(--color-primary)' }}>
                <Mail className="mr-2 h-5 w-5" />
                E-Mail schreiben
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
