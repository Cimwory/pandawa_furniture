import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from 'react-i18next';
import artisanImg from '../assets/d455cb17ae1190210b91ca432cd6a6d574f3963a.png';
import { VisualShowcase } from '../components/VisualShowcase';
import {
  Particles,
  Magnet,
  CountUp,
  SpotlightCard,
} from '../components/reactbits';

export function About() {
  const { t } = useTranslation();



  const scrollToFoundation = () => {
    const el = document.getElementById('foundation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-[68px] md:pt-[76px]">
      {/* REFINED HERO SECTION: Warm Artisanal Editorial & Master Craft Showcase */}
      <section className="relative w-full overflow-hidden bg-[#FAF7F2] border-b border-brand-dark-earth/10">

        {/* Warm Subtle Ambient Wood Glows */}
        <div className="absolute top-1/4 left-1/6 w-[450px] h-[450px] rounded-full bg-brand-terracotta/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/6 w-[400px] h-[400px] rounded-full bg-brand-deep-olive/8 blur-[120px] pointer-events-none" />

        {/* Ambient Floating Warm Teak Dust */}
        <Particles
          className="z-5"
          quantity={20}
          color="#BE733D"
          size={1.5}
          staticity={40}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

          {/* LEFT COLUMN: Narrative & Craftsmanship Essence */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">

            {/* Elegant Artisanal Heritage Badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-[#2D241B]/12 bg-white/80 backdrop-blur-sm shadow-sm mb-6 text-xs text-brand-dark-earth">
              <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
              <span className="font-medium tracking-wide uppercase text-[11px] text-brand-dark-earth/80">
                {t('about.hero.badge')}
              </span>
            </div>

            {/* High-Impact Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-brand-dark-earth tracking-tight leading-[1.15] mb-6">
              {t('about.hero.headlinePart1')}{' '}
              <span className="italic text-brand-terracotta font-serif">
                {t('about.hero.headlineHighlight')}
              </span>{' '}
              {t('about.hero.headlinePart2')}
            </h1>

            {/* Narrative Subtext */}
            <p className="text-base md:text-lg text-brand-dark-earth/80 leading-relaxed mb-8 max-w-xl font-sans">
              {t('about.hero.subtext')}
            </p>

            {/* Three Craft Pillars */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/90 border border-brand-dark-earth/10 shadow-sm backdrop-blur-sm mb-8">
              <div className="p-1 text-left">
                <span className="block text-[11px] font-medium tracking-wider text-brand-dark-earth/60 uppercase mb-1">
                  {t('about.hero.pillars.woodSource')}
                </span>
                <span className="font-serif font-bold text-brand-dark-earth text-sm block">
                  {t('about.hero.pillars.woodSourceVal')}
                </span>
                <span className="text-[11px] text-brand-deep-olive font-medium">
                  {t('about.hero.pillars.woodSourceSub')}
                </span>
              </div>
              <div className="p-1 text-left border-x border-brand-dark-earth/10 px-3">
                <span className="block text-[11px] font-medium tracking-wider text-brand-dark-earth/60 uppercase mb-1">
                  {t('about.hero.pillars.construction')}
                </span>
                <span className="font-serif font-bold text-brand-dark-earth text-sm block">
                  {t('about.hero.pillars.constructionVal')}
                </span>
                <span className="text-[11px] text-brand-terracotta font-medium">
                  {t('about.hero.pillars.constructionSub')}
                </span>
              </div>
              <div className="p-1 text-left pl-2">
                <span className="block text-[11px] font-medium tracking-wider text-brand-dark-earth/60 uppercase mb-1">
                  {t('about.hero.pillars.finishing')}
                </span>
                <span className="font-serif font-bold text-brand-dark-earth text-sm block">
                  {t('about.hero.pillars.finishingVal')}
                </span>
                <span className="text-[11px] text-brand-dark-earth/70 font-medium">
                  {t('about.hero.pillars.finishingSub')}
                </span>
              </div>
            </div>

            {/* Clean, Tactile Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Magnet magnetStrength={0.2}>
                <button
                  onClick={scrollToFoundation}
                  className="inline-flex items-center gap-2 bg-brand-terracotta text-white h-13 px-8 rounded-full text-sm font-medium hover:bg-[#a55825] shadow-lg shadow-brand-terracotta/25 hover:shadow-xl hover:shadow-brand-terracotta/35 transition-all duration-300"
                >
                  <span>{t('about.hero.btnPhilosophy')}</span>
                  <span className="text-xs">↓</span>
                </button>
              </Magnet>

              <Magnet magnetStrength={0.15}>
                <Link
                  to="/production"
                  className="inline-flex items-center gap-2 border border-brand-dark-earth/20 bg-white/80 hover:bg-white text-brand-dark-earth h-13 px-7 rounded-full text-sm font-medium hover:border-brand-dark-earth transition-all shadow-sm"
                >
                  <span>{t('about.hero.btnProcess')}</span>
                  <span className="text-xs">→</span>
                </Link>
              </Magnet>
            </div>

          </div>

          {/* RIGHT COLUMN: Master Artisan Showcase Portrait */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative rounded-3xl overflow-hidden bg-[#EAE2D8] border border-[#2D241B]/15 shadow-2xl transition-all duration-500 group"
            >

              {/* Subtle Natural Header Tag */}
              <div className="px-6 py-3.5 bg-white/95 backdrop-blur-md text-brand-dark-earth flex items-center justify-between border-b border-brand-dark-earth/10 z-20 relative">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-deep-olive" />
                  <span className="font-serif font-bold tracking-wide text-sm">
                    {t('about.hero.artisanName')}
                  </span>
                </div>
                <span className="text-xs text-brand-dark-earth/60 font-medium">
                  {t('about.hero.artisanExp')}
                </span>
              </div>

              {/* Main Image Container with Soft Natural Lighting */}
              <div className="relative h-[460px] sm:h-[520px] w-full overflow-hidden bg-[#2D241B]/5">
                <ImageWithFallback
                  src={artisanImg}
                  alt="Pak Alex / Mr. Alex - Owner of Pandawa Furniture Workshop"
                  className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-104"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Stats Section with React Bits CountUp */}
      <section className="bg-brand-cream/60 border-y border-brand-dark-earth/10 py-16">
        <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="font-serif text-4xl md:text-5xl font-bold text-brand-terracotta mb-2">
              <CountUp to={32} suffix="+" duration={2.2} />
            </div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-brand-dark-earth/70">
              {t('about.stats.experience')}
            </p>
          </div>
          <div className="p-4">
            <div className="font-serif text-4xl md:text-5xl font-bold text-brand-deep-olive mb-2">
              <CountUp to={100} suffix="%" duration={2.5} />
            </div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-brand-dark-earth/70">
              {t('about.stats.wood')}
            </p>
          </div>
          <div className="p-4">
            <div className="font-serif text-4xl md:text-5xl font-bold text-brand-cocoa-brown mb-2">
              <CountUp to={1000} suffix="+" duration={2.0} separator="," />
            </div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-brand-dark-earth/70">
              {t('about.stats.shipped')}
            </p>
          </div>
          <div className="p-4">
            <div className="font-serif text-4xl md:text-5xl font-bold text-brand-terracotta mb-2">
              <CountUp to={1200} prefix="" suffix="+" duration={2.5} separator="," />
            </div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-brand-dark-earth/70">
              {t('about.stats.furniture')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Foundation with SpotlightCard */}
      <section id="foundation-section" className="max-w-7xl mx-auto px-grid-margin py-section-gap-desktop scroll-mt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-dark-earth/15 bg-white/70 text-xs font-medium text-brand-terracotta uppercase tracking-wider mb-3">
            <span>{t('about.foundation.badge')}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark-earth mb-4 font-bold">{t('about.foundation.title')}</h2>
          <div className="w-16 h-1 bg-brand-terracotta mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
          <SpotlightCard 
            spotlightColor="rgba(190, 115, 61, 0.15)"
            borderColor="rgba(190, 115, 61, 0.3)"
            className="p-10 text-center shadow-level1 bg-white hover:-translate-y-1 transition-transform duration-300 rounded-2xl"
          >
            <span className="material-symbols-outlined text-4xl text-brand-terracotta mb-6 block" style={{ fontVariationSettings: "'wght' 300" }}>family_history</span>
            <h3 className="font-serif text-xl text-brand-dark-earth mb-4 font-bold">{t('about.pillar1.title')}</h3>
            <p className="text-sm text-brand-dark-earth/75 leading-relaxed">{t('about.pillar1.desc')}</p>
          </SpotlightCard>

          <SpotlightCard 
            spotlightColor="rgba(80, 100, 67, 0.15)"
            borderColor="rgba(80, 100, 67, 0.3)"
            className="p-10 text-center shadow-level1 bg-white hover:-translate-y-1 transition-transform duration-300 rounded-2xl"
          >
            <span className="material-symbols-outlined text-4xl text-brand-deep-olive mb-6 block" style={{ fontVariationSettings: "'wght' 300" }}>forest</span>
            <h3 className="font-serif text-xl text-brand-dark-earth mb-4 font-bold">{t('about.pillar2.title')}</h3>
            <p className="text-sm text-brand-dark-earth/75 leading-relaxed">{t('about.pillar2.desc')}</p>
          </SpotlightCard>

          <SpotlightCard 
            spotlightColor="rgba(72, 49, 36, 0.15)"
            borderColor="rgba(72, 49, 36, 0.3)"
            className="p-10 text-center shadow-level1 bg-white hover:-translate-y-1 transition-transform duration-300 rounded-2xl"
          >
            <span className="material-symbols-outlined text-4xl text-brand-cocoa-brown mb-6 block" style={{ fontVariationSettings: "'wght' 300" }}>architecture</span>
            <h3 className="font-serif text-xl text-brand-dark-earth mb-4 font-bold">{t('about.pillar3.title')}</h3>
            <p className="text-sm text-brand-dark-earth/75 leading-relaxed">{t('about.pillar3.desc')}</p>
          </SpotlightCard>
        </div>
      </section>

      {/* Visual Showcase (Drift Wall) */}
      <VisualShowcase />

      {/* Mission Statement with Particles */}
      <section className="bg-brand-deep-olive py-section-gap-desktop px-grid-margin relative overflow-hidden">
        <Particles
          className="z-5"
          quantity={25}
          color="#d2eabf"
          size={1.5}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="material-symbols-outlined text-4xl text-brand-cream mb-8 opacity-50 block" style={{ fontVariationSettings: "'wght' 300" }}>format_quote</span>
          <p 
            className="font-headline-lg text-headline-lg font-bold text-brand-cream mb-8 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('about.mission.quote') }}
          />
        </div>
      </section>
    </div>
  );
}
