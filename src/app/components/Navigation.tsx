import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Magnet } from './reactbits/Magnet';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/production', label: t('nav.production') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FAF7F2]/92 backdrop-blur-md border-b border-[#2D241B]/8 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        
        {/* Warm Artisanal Brand Logo */}
        <Link to="/" className="group flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#2D241B] flex items-center justify-center text-[#F5EBE1] shadow-sm group-hover:bg-brand-terracotta transition-colors duration-300 relative overflow-hidden">
            {/* Subtle wood grain organic highlight */}
            <span className="font-serif text-2xl font-normal tracking-wide">P</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-brand-dark-earth group-hover:text-brand-terracotta transition-colors">
                PANDAWA
              </span>
              <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-brand-terracotta">
                FURNITURE
              </span>
            </div>
            <span className="text-[11px] text-brand-dark-earth/60 font-sans tracking-wide">
              Kriya Kayu Jati Jepara · Est. 1994
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links: Clean, Warm, Editorial */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-brand-dark-earth font-semibold bg-[#2D241B]/8 shadow-inner'
                    : 'text-brand-dark-earth/75 hover:text-brand-dark-earth hover:bg-[#2D241B]/5'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-brand-terracotta" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Refined Language Switcher & Elegant CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* High-end Minimalist Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-dark-earth/15 bg-white/70 hover:bg-white hover:border-brand-dark-earth/30 text-xs font-medium text-brand-dark-earth transition-all shadow-sm"
            title="Ganti Bahasa / Switch Language"
          >
            <span className="material-symbols-outlined text-[16px] text-brand-terracotta">
              translate
            </span>
            <span className={`transition-colors ${i18n.language === 'id' ? 'font-bold text-brand-terracotta' : 'text-brand-dark-earth/60'}`}>
              ID
            </span>
            <span className="text-brand-dark-earth/30">|</span>
            <span className={`transition-colors ${i18n.language === 'en' ? 'font-bold text-brand-terracotta' : 'text-brand-dark-earth/60'}`}>
              EN
            </span>
          </button>

          {/* Warm Luxury CTA Button */}
          <Magnet magnetStrength={0.2}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-terracotta text-white text-xs md:text-sm font-medium tracking-wide hover:bg-[#a55825] shadow-md shadow-brand-terracotta/20 hover:shadow-lg hover:shadow-brand-terracotta/30 transition-all duration-300"
            >
              <span>{i18n.language === 'id' ? 'Konsultasi Desain' : 'Design Consultation'}</span>
              <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </Magnet>
        </div>

        {/* Mobile Hamburger & Language Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-brand-dark-earth/15 bg-white/80 text-xs font-semibold text-brand-dark-earth shadow-sm"
          >
            <span>{i18n.language.toUpperCase()}</span>
          </button>

          <button
            className="w-10 h-10 rounded-xl bg-white border border-brand-dark-earth/15 flex items-center justify-center text-brand-dark-earth shadow-sm hover:bg-brand-cream transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown: Warm Organic Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-t border-[#2D241B]/10 shadow-2xl absolute w-full left-0 py-6 px-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="pb-3 mb-4 border-b border-brand-dark-earth/10 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-widest text-brand-dark-earth/60">
              Navigasi Pandawa
            </span>
            <span className="text-xs text-brand-terracotta font-serif italic">
              Kriya Jepara
            </span>
          </div>

          <ul className="flex flex-col gap-1.5">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-brand-dark-earth text-white shadow-sm'
                        : 'text-brand-dark-earth hover:bg-brand-dark-earth/5'
                    }`}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs opacity-60">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-4 border-t border-brand-dark-earth/10">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-brand-terracotta text-white text-sm font-medium tracking-wide text-center block shadow-md hover:bg-[#a55825] transition-colors"
            >
              {i18n.language === 'id' ? 'Konsultasi Desain & Pemesanan' : 'Design & Bespoke Order'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
