'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Startseite' },
    { href: '/galerie', label: 'Galerie' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://xoscsdexeklgnxvlwdvh.supabase.co/storage/v1/object/public/logo/Rathaus%20Events%20Logo.svg"
              alt="Rathaus Events Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-semibold text-lg text-neutral-900">
              Rathaus Events
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-amber-700'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-amber-700 hover:bg-amber-800">
              <Link href="/kontakt">Event anfragen</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-neutral-900" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-900" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium ${
                  pathname === link.href
                    ? 'text-amber-700'
                    : 'text-neutral-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-amber-700 hover:bg-amber-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/kontakt">Event anfragen</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
