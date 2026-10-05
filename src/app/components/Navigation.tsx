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

  const isId = (i18n.resolvedLanguage || i18n.language)?.startsWith('id');

  const setLanguage = (lang: 'id' | 'en') => {
    i18n.changeLanguage(lang);
    try {
      localStorage.setItem('pandawa_language', lang);
    } catch {}
  };

  const whatsappUrl =
    'https://wa.me/6281234567890?text=Halo%20Pandawa%20Furniture%2C%20saya%20tertarik%20konsultasi%20pesanan%20kriya%20kayu%20jati';

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 shadow-xs">
      {/* MAIN ARTISANAL NAVIGATION BAR */}
      <div className="w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-dark-earth/10 transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[68px] md:h-[76px]">
          
          {/* Warm Artisanal Brand Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-brand-dark-earth flex items-center justify-center text-brand-cream shadow-sm group-hover:bg-brand-terracotta transition-colors duration-300 relative overflow-hidden flex-shrink-0">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">P</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/15 to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-brand-dark-earth group-hover:text-brand-terracotta transition-colors duration-200">
                  PANDAWA
                </span>
                <span className="text-[10px] md:text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-brand-terracotta">
                  FURNITURE
                </span>
              </div>
              <span className="text-[11px] text-brand-dark-earth/60 font-sans tracking-normal truncate max-w-[200px] sm:max-w-none">
                {t('nav.tagline')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-full text-sm font-sans font-medium tracking-normal transition-all duration-200 ${
                    isActive
                      ? 'text-brand-dark-earth font-semibold bg-brand-dark-earth/8 shadow-xs'
                      : 'text-brand-dark-earth/70 hover:text-brand-dark-earth hover:bg-brand-dark-earth/5'
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

          {/* Right Section: Language Switcher & Consultation CTA */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            {/* Minimalist Language Switcher */}
            <div className="inline-flex items-center p-0.5 rounded-full border border-brand-dark-earth/15 bg-white/90 shadow-xs text-xs font-sans">
              <span className="material-symbols-outlined text-[15px] text-brand-terracotta pl-1.5 pr-0.5 select-none">
                translate
              </span>
              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isId
                    ? 'bg-brand-terracotta text-white shadow-xs'
                    : 'text-brand-dark-earth/65 hover:text-brand-dark-earth'
                }`}
                aria-label="Pilih Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  !isId
                    ? 'bg-brand-terracotta text-white shadow-xs'
                    : 'text-brand-dark-earth/65 hover:text-brand-dark-earth'
                }`}
                aria-label="Select English Language"
              >
                EN
              </button>
            </div>

            {/* Warm Luxury CTA Button */}
            <Magnet magnetStrength={0.15}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2 md:py-2.5 rounded-full bg-brand-terracotta text-white text-xs md:text-sm font-sans font-medium tracking-wide hover:bg-[#A96231] shadow-sm shadow-brand-terracotta/20 hover:shadow-md hover:shadow-brand-terracotta/30 transition-all duration-200"
              >
                <span>
                  {t('nav.consultation')}
                </span>
                <span className="text-xs transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </Magnet>
          </div>

          {/* Mobile Hamburger & Language Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="inline-flex items-center p-0.5 rounded-full border border-brand-dark-earth/15 bg-white/90 shadow-xs text-xs font-sans">
              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`px-2 py-0.5 rounded-full font-semibold transition-all ${
                  isId ? 'bg-brand-terracotta text-white shadow-xs' : 'text-brand-dark-earth/65'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full font-semibold transition-all ${
                  !isId ? 'bg-brand-terracotta text-white shadow-xs' : 'text-brand-dark-earth/65'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className="w-10 h-10 rounded-xl bg-white/90 border border-brand-dark-earth/15 flex items-center justify-center text-brand-dark-earth shadow-xs hover:bg-brand-cream transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBILE MENU DROPDOWN SHEET */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-cream border-t border-brand-dark-earth/10 shadow-xl absolute w-full left-0 py-5 px-5 sm:px-6 animate-in fade-in slide-in-from-top-2 duration-300 max-h-[calc(100vh-100px)] overflow-y-auto">
          {/* Quick info banner on mobile drawer */}
          <div className="p-4 rounded-2xl bg-brand-cocoa-brown text-brand-cream mb-4 flex flex-col gap-2.5 shadow-sm border border-brand-dark-earth/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-sm text-brand-cream tracking-wide">
                  Pandawa Kudus
                </span>
                <span className="text-[10px] font-sans font-medium uppercase tracking-wider text-brand-cream/60">
                  Workshop
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-sans text-[10px] font-semibold tracking-wider bg-emerald-500/15 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            <p className="text-brand-cream/80 text-xs font-sans leading-relaxed">
              {t('upbar.badge')}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3.5 rounded-xl bg-brand-deep-olive hover:bg-[#3D4F31] text-brand-cream font-sans font-medium text-xs flex items-center justify-center gap-2 transition-colors mt-0.5 shadow-xs"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>{t('upbar.chatWaBtn')}</span>
            </a>
          </div>

          <div className="pb-2.5 mb-3 border-b border-brand-dark-earth/10 flex items-center justify-between">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-brand-dark-earth/50">
              {t('nav.mobileTitle')}
            </span>
            <span className="text-xs text-brand-terracotta font-serif italic">
              {t('nav.mobileSubtitle')}
            </span>
          </div>

          <ul className="flex flex-col gap-1.5">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-sans font-medium transition-all ${
                      isActive
                        ? 'bg-brand-dark-earth text-brand-cream shadow-xs font-semibold'
                        : 'text-brand-dark-earth/80 hover:text-brand-dark-earth hover:bg-brand-dark-earth/5'
                    }`}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className={`text-xs transition-transform ${isActive ? 'text-brand-terracotta font-bold' : 'text-brand-dark-earth/40'}`}>
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 pt-3.5 border-t border-brand-dark-earth/10">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-brand-terracotta hover:bg-[#A96231] text-white text-sm font-sans font-medium tracking-wide text-center block shadow-sm shadow-brand-terracotta/20 hover:shadow-md transition-all duration-200"
            >
              {t('nav.mobileConsultation')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
