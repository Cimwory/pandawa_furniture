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
    const newLang = i18n.language.startsWith('id') ? 'en' : 'id';
    i18n.changeLanguage(newLang);
    try {
      localStorage.setItem('pandawa_language', newLang);
    } catch {}
  };

  const whatsappUrl =
    'https://wa.me/6281234567890?text=Halo%20Pandawa%20Furniture%2C%20saya%20tertarik%20konsultasi%20pesanan%20kriya%20kayu%20jati';

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 shadow-sm">
      {/* 1. TOP UTILITY / ANNOUNCEMENT UPBAR */}
      <div className="w-full bg-[#231A13] text-[#F3ECE4] text-[11px] font-sans tracking-wide border-b border-[#3D3228]/60 transition-colors">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-8 md:h-9">
          
          {/* Left: Workshop & Hours */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[#E4D7CC]">
              <span className="material-symbols-outlined text-[15px] text-brand-terracotta">
                pin_drop
              </span>
              <span className="truncate max-w-[220px] sm:max-w-none font-medium">
                {t('upbar.location')}
              </span>
            </div>

            <span className="hidden lg:inline text-white/20">|</span>

            <div className="hidden lg:flex items-center gap-1.5 text-[#C5B7A9]">
              <span className="material-symbols-outlined text-[14px] text-[#C5B7A9]">
                schedule
              </span>
              <span>{t('upbar.hours')}</span>
            </div>
          </div>

          {/* Center: Timber Quality Badge */}
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-[#F0E6DD] bg-[#33261C] px-3 py-0.5 rounded-full border border-white/10">
            <span className="text-[12px]">🪵</span>
            <span className="font-medium tracking-wide">
              {t('upbar.badge')}
            </span>
          </div>

          {/* Right: Direct Artisan WhatsApp with Live Status */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-brand-terracotta transition-colors group"
              title="Konsultasi Cepat via WhatsApp"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="flex items-center gap-1 font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                <span className="material-symbols-outlined text-[15px]">chat</span>
                <span className="hidden sm:inline">{t('upbar.chat')}</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-[9px] bg-emerald-950/80 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold uppercase tracking-wider">
                {t('upbar.status')}
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN ARTISANAL NAVIGATION BAR */}
      <div className="w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#2D241B]/10 transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-[68px] md:h-[76px]">
          
          {/* Warm Artisanal Brand Logo */}
          <Link to="/" className="group flex items-center gap-3.5">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-[#2D241B] flex items-center justify-center text-[#F5EBE1] shadow-sm group-hover:bg-brand-terracotta transition-colors duration-300 relative overflow-hidden flex-shrink-0">
              <span className="font-serif text-xl md:text-2xl font-normal tracking-wide">P</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-brand-dark-earth group-hover:text-brand-terracotta transition-colors">
                  PANDAWA
                </span>
                <span className="text-[10px] md:text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-brand-terracotta">
                  FURNITURE
                </span>
              </div>
              <span className="text-[10px] md:text-[11px] text-brand-dark-earth/60 font-sans tracking-wide truncate max-w-[200px] sm:max-w-none">
                {t('nav.tagline')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Right Section: Language Switcher & Consultation CTA */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4">
            {/* Minimalist Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-dark-earth/15 bg-white/80 hover:bg-white hover:border-brand-dark-earth/30 text-xs font-medium text-brand-dark-earth transition-all shadow-sm"
              title={t('upbar.chatTitle')}
            >
              <span className="material-symbols-outlined text-[16px] text-brand-terracotta">
                translate
              </span>
              <span
                className={`transition-colors ${
                  i18n.language === 'id'
                    ? 'font-bold text-brand-terracotta'
                    : 'text-brand-dark-earth/60'
                }`}
              >
                ID
              </span>
              <span className="text-brand-dark-earth/30">|</span>
              <span
                className={`transition-colors ${
                  i18n.language === 'en'
                    ? 'font-bold text-brand-terracotta'
                    : 'text-brand-dark-earth/60'
                }`}
              >
                EN
              </span>
            </button>

            {/* Warm Luxury CTA Button */}
            <Magnet magnetStrength={0.2}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2 md:py-2.5 rounded-full bg-brand-terracotta text-white text-xs md:text-sm font-medium tracking-wide hover:bg-[#a55825] shadow-md shadow-brand-terracotta/20 hover:shadow-lg hover:shadow-brand-terracotta/30 transition-all duration-300"
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
          <div className="lg:hidden flex items-center gap-2.5">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-brand-dark-earth/15 bg-white/80 text-xs font-semibold text-brand-dark-earth shadow-sm"
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
      </div>

      {/* 3. MOBILE MENU DROPDOWN SHEET */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-t border-[#2D241B]/10 shadow-2xl absolute w-full left-0 py-6 px-6 animate-in fade-in slide-in-from-top-2 duration-300 max-h-[calc(100vh-120px)] overflow-y-auto">
          {/* Quick info banner on mobile drawer */}
          <div className="p-3.5 rounded-2xl bg-[#231A13] text-[#F3ECE4] text-xs mb-5 flex flex-col gap-2 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-brand-terracotta font-serif font-bold text-sm">
                Pandawa Jepara
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[9px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            <p className="text-[#C5B7A9] text-[11px] leading-relaxed">
              {t('upbar.badge')}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors mt-1"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>{t('upbar.chatWaBtn')}</span>
            </a>
          </div>

          <div className="pb-3 mb-4 border-b border-brand-dark-earth/10 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-widest text-brand-dark-earth/60">
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
              {t('nav.mobileConsultation')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
