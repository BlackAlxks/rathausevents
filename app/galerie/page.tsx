'use client';

import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import { SmartImage } from '@/components/smart-image';
import { useState } from 'react';

const categories = [
  { id: 'alle', label: 'Alle' },
  { id: 'raeume', label: 'Räume & Location' },
  { id: 'hochzeiten', label: 'Hochzeiten & Feiern' },
  { id: 'firmenfeiern', label: 'Firmenevents' },
  { id: 'kultur', label: 'Partys & Konzerte' },
  { id: 'produktionen', label: 'Produktionen & Shootings' },
  { id: 'essen-trinken', label: 'Essen & Trinken' },
];

const galleryItems = [
  {
    id: 1,
    category: 'raeume',
    title: 'Außenansicht Rathaus Friedrichshagen',
    description: 'Historisches Gebäude von außen',
    image: '/images/Außenansicht/Outside_rathaus_outside_view.webp',
  },
  {
    id: 2,
    category: 'raeume',
    title: 'Alter Ratssaal "Elegant"',
    description: 'Repräsentativer Saal mit Stuck und hohen Decken',
    image: '/images/Ratssaal/IMG_9209.webp',
  },
  {
    id: 3,
    category: 'raeume',
    title: 'Alter Ratssaal "Rustikal"',
    description: 'Platz für 10 bis 150 Personen',
    image: '/images/Ratssaal/IMG_9402.webp',
  },
  {
    id: 4,
    category: 'raeume',
    title: 'Frisch gezapftes Bier im Ratskeller',
    description: 'Die Dolle Molle',
    image: '/images/Ratskeller/Ratskeller__55A1262.webp',
  },
  {
    id: 5,
    category: 'raeume',
    title: 'Ratskeller mit Live Musik',
    description: 'Historische Kellerräume mit authentischem Charme',
    image: '/images/Ratskeller/Ratskeller__55A1776.webp',
  },
  {
    id: 6,
    category: 'raeume',
    title: 'Ratskeller Terrasse',
    description: 'Die gemütliche Außenterrasse im Grünen',
    image: '/images/Ratskeller/Ratskeller__55A1842.webp',
  },
  {
    id: 7,
    category: 'raeume',
    title: 'Ratskeller Terrasse',
    description: 'Für die warmen Tage im Jahr',
    image: '/images/Ratskeller/Ratskeller__55A1859.webp',
  },
  {
    id: 8,
    category: 'raeume',
    title: 'Ratskeller Atmosphäre',
    description: 'Gemütliches Kellergewölbe für Veranstaltungen',
    image: '/images/Ratskeller/Ratskeller__55A9957.webp',
  },
  {
    id: 9,
    category: 'raeume',
    title: 'Live Musik',
    description: 'Musikalische Abende im historischen Rathaus',
    image: '/images/Ratskeller/Ratskeller_BGW_DollerAbend130622_FH-7251.webp',
  },
  {
    id: 10,
    category: 'raeume',
    title: 'Menüabend im Ratskeller',
    description: 'Leckeres Essen in gemütlichem Ambiente',
    image: '/images/Ratskeller/Ratskeller_Keller.webp',
  },
  {
    id: 11,
    category: 'raeume',
    title: 'Der historische Ratskeller',
    description: 'Lange Tafeln und einzigartige Kelleratmosphäre',
    image: '/images/Ratskeller/Ratskeller_unnamed-3.webp',
  },
  {
    id: 12,
    category: 'raeume',
    title: 'BBQ auf unserer Terrasse',
    description: 'Perfekt für die warmen Tage im Jahr',
    image: '/images/Ratskeller/Ratskeller_x_55A1860.webp',
  },
  {
    id: 13,
    category: 'essen-trinken',
    title: 'Der Ratskeller',
    description: 'Gesellige Runde im rustikalen Gewölbe',
    image: '/images/Ratskeller/Ratskeller_gaeste.webp',
  },
  {
    id: 14,
    category: 'firmenfeiern',
    title: 'Drinks und Gespräche',
    description: 'Veranstaltung im Ratskeller',
    image: '/images/Ratskeller/Ratskeller_gaeste3.webp',
  },
  {
    id: 15,
    category: 'raeume',
    title: 'Hoftheke bei Nacht',
    description: 'Weiträumiger Blick auf unseren Innenhof',
    image: '/images/Hoftheke/Hoftheke_555A7081.webp',
  },
  {
    id: 16,
    category: 'raeume',
    title: 'Hoftheke Innenhof',
    description: 'Unser großer Innenhof lädt ein',
    image: '/images/Hoftheke/Hoftheke_55A9612.webp',
  },
  {
    id: 17,
    category: 'raeume',
    title: 'Hoftheke Public Viewing',
    description: 'Offene Atmosphäre zwischen drinnen und draußen',
    image: '/images/Hoftheke/Hoftheke_55A9885.webp',
  },
  {
    id: 18,
    category: 'raeume',
    title: 'Hoftheke Rustikal',
    description: 'Gemütliche Hoftheke mit rustikalem Charakter',
    image: '/images/Hoftheke/Hoftheke_Hoftheke Rustikal.webp',
  },
  {
    id: 19,
    category: 'raeume',
    title: 'Hoftheke Ambiente',
    description: 'Vielseitiger Raum für Events aller Art',
    image: '/images/Hoftheke/Hoftheke_Hoftheke3.webp',
  },
  {
    id: 20,
    category: 'raeume',
    title: 'Hoftheke Panoramaansicht',
    description: 'Großzügiger Raum mit Hofzugang',
    image: '/images/Hoftheke/Hoftheke_55A8738-Pano.webp',
  },
  {
    id: 21,
    category: 'raeume',
    title: 'Hoftheke Weitwinkel',
    description: 'Flexible Raumgestaltung für Ihre Veranstaltung',
    image: '/images/Hoftheke/Hoftheke_55A8821-Pano.webp',
  },
  {
    id: 22,
    category: 'raeume',
    title: 'Hoftheke 360°',
    description: 'Vielseitige Location mit besonderem Flair',
    image: '/images/Hoftheke/Hoftheke_XX!_55A9788-Panorama.webp',
  },
  {
    id: 23,
    category: 'raeume',
    title: 'Hoftheke aus anderer Perspektive',
    description: 'Moderne Ausstattung trifft historisches Ambiente',
    image: '/images/Hoftheke/Hoftheke_03.webp',
  },
  {
    id: 25,
    category: 'hochzeiten',
    title: 'Hochzeit im Ratssaal',
    description: 'Festlich gedeckte Tafel für eine unvergessliche Feier',
    image: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-13.webp',
  },
  {
    id: 26,
    category: 'hochzeiten',
    title: 'Trauung im historischen Ambiente',
    description: 'Der perfekte Rahmen für den schönsten Tag',
    image: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-22.webp',
  },
  {
    id: 27,
    category: 'hochzeiten',
    title: 'Hochzeitsfeier',
    description: 'Romantische Feier in besonderem Ambiente',
    image: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-27.webp',
  },
  {
    id: 28,
    category: 'firmenfeiern',
    title: 'Weihnachtsfeier',
    description: 'Jahresabschluss in historischem Rahmen',
    image: '/images/Weihnachtsfeier/Weihnachtsfeier_55A2083.webp',
  },
  {
    id: 29,
    category: 'firmenfeiern',
    title: 'Firmenfeier',
    description: 'Teambuilding und Feiern im besonderen Ambiente',
    image: '/images/Weihnachtsfeier/Weihnachtsfeierweihnachtsfeier.webp',
  },
  {
    id: 30,
    category: 'firmenfeiern',
    title: 'Weihnachten im Rathaus',
    description: 'Festliche Weihnachtsatmosphäre für Ihr Team',
    image: '/images/Weihnachtsfeier/Weihnachtsfeier2022.12.16. - Weihnachten_Rathaus FH©pctrbrln.com-14.webp',
  },
  {
    id: 31,
    category: 'firmenfeiern',
    title: 'Festliche Firmenveranstaltung',
    description: 'Besondere Events für besondere Teams',
    image: '/images/Weihnachtsfeier/Weihnachtsfeier2022.12.16. - Weihnachten_Rathaus FH©pctrbrln.com-3.webp',
  },
  {
    id: 32,
    category: 'kultur',
    title: 'Party im Ratssaal',
    description: 'Bühne und Tanzfläche für Events',
    image: '/images/Party/Party_55A6675.webp',
  },
  {
    id: 33,
    category: 'kultur',
    title: 'Konzert und Veranstaltung',
    description: 'Kultur und Musik in historischer Atmosphäre',
    image: '/images/Party/Party_55A6677.webp',
  },
  {
    id: 34,
    category: 'kultur',
    title: 'Tanzveranstaltungen im Ratssaal',
    description: 'Von Tango bis Swing im historischen Ballsaal',
    image: '/images/Party/Party_55A7097.webp',
  },
  {
    id: 35,
    category: 'essen-trinken',
    title: 'Buffet',
    description: 'Vielfältiges Buffet für Ihre Veranstaltung',
    image: '/images/F&B/F&B_buffet.webp',
  },
  {
    id: 36,
    category: 'essen-trinken',
    title: 'Getränke und Speisen',
    description: 'Kulinarische Highlights',
    image: '/images/F&B/F&B_20160615-IMG_0154.webp',
  },
  {
    id: 37,
    category: 'essen-trinken',
    title: 'Catering',
    description: 'Professionelles Catering für Ihr Event',
    image: '/images/F&B/F&B_20160615-IMG_0170.webp',
  },
  {
    id: 38,
    category: 'raeume',
    title: 'Rathaus Impression',
    description: 'Historisches Ambiente und eingedeckte Tische',
    image: '/images/Allgemein/General_20160615-IMG_0117.webp',
  },
  {
    id: 39,
    category: 'raeume',
    title: 'Rathaus Natürliches Licht',
    description: 'Angenehme Atmosphäre für Ihre Veranstaltung',
    image: '/images/Allgemein/General_20160615-IMG_0127.webp',
  },
  {
    id: 40,
    category: 'produktionen',
    title: 'Fotoshooting im Rathaus Friedrichshagen',
    description: 'Professionelle Fotoproduktionen im historischen Ambiente',
    image: '/images/Shootings/Shooting1.webp',
  },
  {
    id: 41,
    category: 'produktionen',
    title: 'Musikvideo Produktion im Rathaus Friedrichshagen',
    description: 'Kreative Videoproduktionen in einzigartiger Kulisse',
    image: '/images/Shootings/Shooting2.webp',
    videoUrl: 'https://youtu.be/0AXeDwItkyM?si=R7EU5cLkUSgsOpv7',
  },
  {
    id: 42,
    category: 'essen-trinken',
    title: 'Ratskeller Kerzenleuchter',
    description: 'Stimmungsvolle Beleuchtung im Ratskeller',
    image: '/images/Ratskeller/Gastrofotos Sammy/Ratskeller__55A7288.webp',
  },
  {
    id: 43,
    category: 'essen-trinken',
    title: 'Ratskeller Gastraum',
    description: 'Eingedeckter Gastraum im historischen Ratskeller',
    image: '/images/Ratskeller/Gastrofotos Sammy/Ratskeller__55A7301.webp',
  },
  {
    id: 44,
    category: 'essen-trinken',
    title: 'Speisen und Dolle Molle',
    description: 'Regionale Spezialitäten und frisch Gezapftes',
    image: '/images/Ratskeller/Gastrofotos Sammy/Ratskeller__55A7320.webp',
  },
  {
    id: 45,
    category: 'essen-trinken',
    title: 'Buffet im Ratskeller',
    description: 'Vielfältiges Buffet im Gewölbekeller',
    image: '/images/Ratskeller/Gastrofotos Sammy/Ratskeller__55A7351.webp',
  },
  {
    id: 46,
    category: 'essen-trinken',
    title: 'Detailaufnahme Dolle Molle',
    description: 'Frisch gezapft aus der Brauerei Friedrichshagen',
    image: '/images/Ratskeller/Gastrofotos Sammy/Ratskeller__55A7361.webp',
  },
  {
    id: 47,
    category: 'essen-trinken',
    title: 'Regionale Küche im Ratskeller',
    description: 'Saisonale Gerichte aus der Region',
    image: '/images/Ratskeller/Gastrofotos Sammy/Ratskeller__55A7388.webp',
  },
];

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState('alle');

  const filteredItems =
    activeCategory === 'alle'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main>
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Einblicke in das Rathaus Friedrichshagen
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Räume und Events auf einen Blick. Bilder sagen mehr als viele Worte.
            In der Galerie erhalten Sie einen Eindruck davon, wie vielfältig das
            Rathaus Friedrichshagen genutzt werden kann, von festlich gedeckten
            Tafeln über Tagungssetups bis hin zu Konzert- und Kulturabenden.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-neutral-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                style={activeCategory === category.id ? { backgroundColor: 'var(--color-primary)' } : {}}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-neutral-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-neutral-200">
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    fill
                    loading={index < 9 ? 'eager' : 'lazy'}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                  {'videoUrl' in item && item.videoUrl && (
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-md"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Play className="h-4 w-4" />
                      Video ansehen
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Infos mitnehmen und Event planen
          </h2>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            Alle Fakten auf einen Blick und der direkte Weg zur Anfrage. Wenn Sie
            die wichtigsten Informationen gern gesammelt haben möchten, können
            Sie sich eine Übersicht mit Räumen, Kapazitäten und Beispielpauschalen
            herunterladen. Oder Sie gehen direkt den nächsten Schritt und schicken
            uns Ihre Anfrage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 hover:opacity-80 transition-all duration-200"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              <Download className="mr-2 h-4 w-4" />
              Infos als PDF herunterladen
            </Button>
            <Button
              asChild
              size="lg"
              className="hover:opacity-90 transition-all duration-200 hover:shadow-lg"
              style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
            >
              <Link href="/kontakt">
                Event unverbindlich anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
