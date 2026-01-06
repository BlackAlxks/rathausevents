'use client';

import { useEffect, useRef, useState } from 'react';
import { Send, MessageSquare, Settings, PartyPopper } from 'lucide-react';

export function EventProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const progress = Math.min(
          Math.max((windowHeight - sectionTop) / (windowHeight + sectionHeight / 2), 0),
          1
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: Send,
      number: 1,
      title: 'Anfrage senden',
      description: 'Du teilst uns Anlass, Datum, Gästezahl und erste Ideen über das Formular mit.',
    },
    {
      icon: MessageSquare,
      number: 2,
      title: 'Rückmeldung und Vorschlag',
      description:
        'Wir prüfen Verfügbarkeit, Räume und Pauschalen und melden uns mit Rückfragen oder einem ersten Vorschlag.',
    },
    {
      icon: Settings,
      number: 3,
      title: 'Feinplanung im Austausch',
      description:
        'Gemeinsam passen wir Raumsetup, Gastronomie, Technik und Zeitplan an dein Event an.',
    },
    {
      icon: PartyPopper,
      number: 4,
      title: 'Event im Rathaus Friedrichshagen',
      description:
        'Am Veranstaltungstag steht alles bereit und unser Team begleitet dich im Hintergrund durch den Abend.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            So wird aus deiner Anfrage ein Event im Rathaus Friedrichshagen
          </h2>
          <p className="text-lg text-neutral-600">
            Klarer Ablauf von der ersten Nachricht bis zur Feier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const delay = index * 0.1;
            const itemProgress = Math.max(0, Math.min((scrollProgress - delay) * 2, 1));
            const isLast = index === steps.length - 1;

            return (
              <div
                key={index}
                className="relative"
                style={{
                  opacity: itemProgress,
                  transform: `translateY(${(1 - itemProgress) * 30}px)`,
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4 relative z-10">
                    <Icon className="h-8 w-8 text-amber-700" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
                {!isLast && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-amber-200 -translate-x-1/2 z-0"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
