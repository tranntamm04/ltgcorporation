'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-cream border-b border-border-light shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-sm bg-forest-green flex items-center justify-center text-text-light font-serif text-xl font-bold group-hover:opacity-90 transition-all">
            G
          </div>
          <span className="hidden sm:inline font-serif text-2xl font-bold text-forest-green">Gallery</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-text-dark hover:text-forest-green transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-text-dark hover:text-forest-green transition-colors font-medium"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('collections')}
            className="text-text-dark hover:text-forest-green transition-colors font-medium"
          >
            Collections
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-text-dark hover:text-forest-green transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-forest-green text-text-light rounded-sm font-medium hover:opacity-90 transition-all"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-forest-green hover:bg-warm-beige rounded-sm transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border-light bg-cream animate-slideUp">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3 flex flex-col">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left px-4 py-2 text-text-dark hover:text-forest-green hover:bg-warm-beige rounded-sm transition-all"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left px-4 py-2 text-text-dark hover:text-forest-green hover:bg-warm-beige rounded-sm transition-all"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('collections')}
              className="text-left px-4 py-2 text-text-dark hover:text-forest-green hover:bg-warm-beige rounded-sm transition-all"
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-4 py-2 text-text-dark hover:text-forest-green hover:bg-warm-beige rounded-sm transition-all"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-4 py-2 bg-forest-green text-text-light rounded-sm font-medium hover:opacity-90 transition-all w-full"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
