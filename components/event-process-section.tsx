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
      title: 'Erste Kontaktaufnahme',
      description: 'Sie senden uns Anlass, Termin, Gästezahl und erste Vorstellungen über unser Kontaktformular oder per E-Mail.',
    },
    {
      icon: MessageSquare,
      number: 2,
      title: 'Persönliche Beratung',
      description:
        'Wir prüfen Verfügbarkeit und Möglichkeiten, stellen Rückfragen und entwickeln gemeinsam mit Ihnen ein erstes Konzept.',
    },
    {
      icon: Settings,
      number: 3,
      title: 'Detailplanung im Dialog',
      description:
        'In enger Abstimmung planen wir Raumkonfiguration, Catering, Technik und Ablauf. Sie haben jederzeit einen festen Ansprechpartner.',
    },
    {
      icon: PartyPopper,
      number: 4,
      title: 'Professionelle Durchführung',
      description:
        'Am Veranstaltungstag ist alles vorbereitet. Unser erfahrenes Team begleitet Ihr Event diskret und professionell.',
    },
  ];

  return (
    <div ref={sectionRef}>
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
              suppressHydrationWarning
            >
              <div className="flex flex-col items-center text-center relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10"
                  style={{ backgroundColor: 'var(--color-sand)' }}
                >
                  <Icon className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div
                  className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold mb-4"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {step.number}
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
              {!isLast && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-0.5 -translate-x-1/2 z-0"
                  style={{ backgroundColor: 'var(--color-sand)' }}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
