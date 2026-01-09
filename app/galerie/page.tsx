'use client';

import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { id: 'alle', label: 'Alle' },
  { id: 'raeume', label: 'Räume' },
  { id: 'hochzeiten', label: 'Hochzeiten & private Feiern' },
  { id: 'firmenfeiern', label: 'Firmenfeiern & Tagungen' },
  { id: 'kultur', label: 'Kultur & Konzerte' },
  { id: 'ratskeller', label: 'Ratskeller & Hoftheke' },
];

const galleryItems = [
  {
    id: 1,
    category: 'raeume',
    title: 'Außenansicht Rathaus',
    description: 'Historisches Gebäude von außen',
    image: '/images/Außenansicht/Outside_rathaus_outside_view.webp',
  },
  {
    id: 2,
    category: 'raeume',
    title: 'Ratskeller Hauptraum',
    description: 'Rustikaler Kellerraum mit Gewölbe und gemütlicher Atmosphäre',
    image: '/images/Ratskeller/Ratskeller__55A1262.webp',
  },
  {
    id: 3,
    category: 'raeume',
    title: 'Ratskeller Gewölbe',
    description: 'Historische Kellerräume mit authentischem Charme',
    image: '/images/Ratskeller/Ratskeller__55A1776.webp',
  },
  {
    id: 4,
    category: 'raeume',
    title: 'Ratskeller Feier',
    description: 'Festlich gedeckte Tische im Ratskeller',
    image: '/images/Ratskeller/Ratskeller__55A1842.webp',
  },
  {
    id: 5,
    category: 'raeume',
    title: 'Ratskeller Bar',
    description: 'Bar und Tresen im Ratskeller',
    image: '/images/Ratskeller/Ratskeller__55A1859.webp',
  },
  {
    id: 6,
    category: 'ratskeller',
    title: 'Ratskeller Gäste',
    description: 'Gesellige Runde im rustikalen Gewölbe',
    image: '/images/Ratskeller/Ratskeller_gaeste.webp',
  },
  {
    id: 7,
    category: 'ratskeller',
    title: 'Ratskeller Event',
    description: 'Veranstaltung im Ratskeller',
    image: '/images/Ratskeller/Ratskeller_gaeste3.webp',
  },
  {
    id: 8,
    category: 'raeume',
    title: 'Hoftheke Panorama',
    description: 'Weiträumiger Blick auf die Hoftheke',
    image: '/images/Hoftheke/Hoftheke_555A7081.webp',
  },
  {
    id: 9,
    category: 'raeume',
    title: 'Hoftheke Innenraum',
    description: 'Erdgeschoss-Raum mit großem Innenhof',
    image: '/images/Hoftheke/Hoftheke_55A9612.webp',
  },
  {
    id: 10,
    category: 'ratskeller',
    title: 'Hoftheke Sommerfest',
    description: 'Offene Atmosphäre zwischen drinnen und draußen',
    image: '/images/Hoftheke/Hoftheke_55A9885.webp',
  },
  {
    id: 11,
    category: 'hochzeiten',
    title: 'Hochzeit im Ratssaal',
    description: 'Festlich gedeckte Tafel für eine unvergessliche Feier',
    image: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-13.webp',
  },
  {
    id: 12,
    category: 'hochzeiten',
    title: 'Trauung im historischen Ambiente',
    description: 'Der perfekte Rahmen für den schönsten Tag',
    image: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-22.webp',
  },
  {
    id: 13,
    category: 'hochzeiten',
    title: 'Hochzeitsfeier',
    description: 'Romantische Feier in besonderem Ambiente',
    image: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-27.webp',
  },
  {
    id: 14,
    category: 'firmenfeiern',
    title: 'Weihnachtsfeier',
    description: 'Jahresabschluss in historischem Rahmen',
    image: '/images/Weihnachtsfeier/Weihnachtsfeier_55A2083.webp',
  },
  {
    id: 15,
    category: 'firmenfeiern',
    title: 'Firmenfeier',
    description: 'Teambuilding und Feiern im besonderen Ambiente',
    image: '/images/Weihnachtsfeier/Weihnachtsfeierweihnachtsfeier.webp',
  },
  {
    id: 16,
    category: 'kultur',
    title: 'Party im Ratssaal',
    description: 'Bühne und Tanzfläche für Events',
    image: '/images/Party/Party_55A6675.webp',
  },
  {
    id: 17,
    category: 'kultur',
    title: 'Konzert und Veranstaltung',
    description: 'Kultur und Musik in historischer Atmosphäre',
    image: '/images/Party/Party_55A6677.webp',
  },
  {
    id: 18,
    category: 'kultur',
    title: 'Event im Saal',
    description: 'Von Tango bis Swing im historischen Ballsaal',
    image: '/images/Party/Party_55A7097.webp',
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-neutral-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Einblicke in das Rathaus Friedrichshagen
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Räume und Events auf einen Blick. Bilder sagen mehr als viele Worte.
            In der Galerie erhältst du einen Eindruck davon, wie vielfältig das
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
                    ? 'bg-amber-700 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
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
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-50 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-neutral-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
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
            Alle Fakten auf einen Blick und der direkte Weg zur Anfrage. Wenn du
            die wichtigsten Informationen gern gesammelt haben möchtest, kannst
            du dir eine Übersicht mit Räumen, Kapazitäten und Beispielpauschalen
            herunterladen. Oder du gehst direkt den nächsten Schritt und schickst
            uns deine Anfrage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-amber-700 text-amber-700 hover:bg-amber-50 transition-all duration-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Infos als PDF herunterladen
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 transition-all duration-200 hover:shadow-lg"
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
