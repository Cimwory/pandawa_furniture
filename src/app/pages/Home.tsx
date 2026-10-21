import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import heroBg from '../assets/2874e70677e9347f1c498bc483444526782683b2.png';
import floresTableImg from '../assets/flores_dining_table.jpg';
import teakVanityImg from '../assets/teak_stone_vanity.jpg';
import cabinetStorageImg from '../assets/cabinet_storage_new.jpg';
import baliCoffeeTableImg from '../assets/bali_coffee_table.jpg';
import dressoirSetImg from '../assets/dressoir_set_new.jpg';
import sumatraCredenzaImg from '../assets/sumatra_media_credenza.png';
import { VisualShowcase } from '../components/VisualShowcase';
import {
  SplitText,
  ShinyText,
  SpotlightCard,
  Magnet,
  StarBorder,
  Particles,
} from '../components/reactbits';
import { ExpressiveCard } from '../components/animejs/ExpressiveCard';

export function Home() {
  const { t, i18n } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(3);
  const isId = (i18n.resolvedLanguage || i18n.language)?.startsWith('id');

  const collections = [
    {
      id: 'flores',
      title: "Dining Set",
      subtitle: isId ? "Meja Makan Kayu Jati Solid Pilihan" : "Solid Reclaimed Teak Dining Table",
      image: floresTableImg,
      categoryName: isId ? 'Set Meja Makan' : 'Dining Set',
    },
    {
      id: 'mandeling',
      title: "Water Sink Stone",
      subtitle: "We also have many solid River Stone Craft to offer",
      image: teakVanityImg,
      categoryName: isId ? 'Wastafel Batu' : 'Water Sink Stone',
    },
    {
      id: 'kudus',
      title: "Cabinet & Storage",
      subtitle: isId ? "Lemari Rak & Penyimpanan Kayu Jati Solid" : "Solid Teak Bookshelf & Storage Cabinet",
      image: cabinetStorageImg,
      categoryName: isId ? 'Lemari & Penyimpanan' : 'Cabinet & Storage',
    },
    {
      id: 'bali',
      title: "Coffee Tables",
      subtitle: isId ? "Meja Kopi Kayu Jati dengan Laci Penyimpanan" : "Solid Teak Coffee Table with Storage Drawers",
      image: baliCoffeeTableImg,
      categoryName: isId ? 'Meja Kopi' : 'Coffee Tables',
    },
    {
      id: 'aceh',
      title: "Dressoir set",
      subtitle: isId ? "Bufet Bilah Kayu Jati dengan Laci Fungsional" : "Solid Teak Louvre Dressoir & Sideboard",
      image: dressoirSetImg,
      categoryName: isId ? 'Set Dressoir' : 'Dressoir Set',
    },
    {
      id: 'sumatra',
      title: "TV Room set",
      subtitle: isId ? "Kredensa TV Kayu Jati 4 Laci & Rak Terbuka" : "Solid Teak Media TV Console with 4 Drawers",
      image: sumatraCredenzaImg,
      categoryName: isId ? 'Set Ruang TV' : 'TV Room Set',
    },
  ];

  return (
    <div className="pt-[68px] md:pt-[76px]">
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${heroBg})` }}></div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-dark-earth/50 z-10"></div>
        
        {/* React Bits Ambient Floating Teak Dust Particles */}
        <Particles
          className="z-15"
          quantity={40}
          color="#ffdcc7"
          size={2}
          staticity={30}
          ease={40}
        />

        <div className="relative z-20 max-w-4xl mx-auto px-grid-margin text-center text-brand-cream py-12">
          {/* Refined Luxury Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl mb-6 leading-tight font-normal">
            <SplitText 
              text={t('home.hero.title')} 
              delay={35}
              duration={0.6}
              className="justify-center"
            />
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed font-sans font-light">
            {t('home.hero.desc')}
          </p>

          {/* Warm Luxury Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Magnet magnetStrength={0.25}>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center bg-brand-terracotta text-white text-sm md:text-base font-medium h-14 px-9 rounded-full hover:bg-[#a55825] shadow-xl shadow-brand-terracotta/30 hover:shadow-2xl transition-all duration-300"
              >
                {t('home.hero.explore')}
              </Link>
            </Magnet>

            <Magnet magnetStrength={0.2}>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white text-sm md:text-base font-medium h-14 px-9 rounded-full hover:bg-white hover:text-brand-dark-earth shadow-lg backdrop-blur-md transition-all duration-300"
              >
                {t('home.hero.chat')}
              </Link>
            </Magnet>
          </div>
        </div>
      </section>

      {/* 2. Visual Showcase (Drift Wall) */}
      <VisualShowcase />

      {/* 3. Brand Values Section */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop bg-brand-cream/50">
        <div className="max-w-7xl mx-auto px-grid-margin">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-dark-earth/15 bg-white/70 mb-3 text-xs uppercase tracking-wider text-brand-terracotta font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta"></span>
              {t('home.pillars.badge')}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark-earth font-bold">
              {t('home.pillars.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              borderColor="rgba(255, 255, 255, 0.5)"
              className="p-8 shadow-md shadow-brand-terracotta/20 flex flex-col justify-start transition-transform hover:-translate-y-1 duration-300 bg-brand-terracotta border border-white/20 rounded-2xl relative text-white"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-6 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white border border-white/30 font-medium">
                    {t('home.values.badge1')}
                  </span>
                  <span className="text-white/70">01</span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-6 text-white">
                  <span className="material-symbols-outlined text-3xl">nest_eco_leaf</span>
                </div>
                <h3 className="font-serif text-xl text-white mb-3 font-bold">{t('home.values.title1')}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{t('home.values.desc1')}</p>
              </div>
            </SpotlightCard>
            
            {/* Value 2 */}
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              borderColor="rgba(255, 255, 255, 0.5)"
              className="p-8 shadow-md shadow-brand-terracotta/20 flex flex-col justify-start transition-transform hover:-translate-y-1 duration-300 bg-brand-terracotta border border-white/20 rounded-2xl relative text-white"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-6 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white border border-white/30 font-medium">
                    {t('home.values.badge2')}
                  </span>
                  <span className="text-white/70">02</span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-6 text-white">
                  <span className="material-symbols-outlined text-3xl">group</span>
                </div>
                <h3 className="font-serif text-xl text-white mb-3 font-bold">{t('home.values.title2')}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{t('home.values.desc2')}</p>
              </div>
            </SpotlightCard>
            
            {/* Value 3 */}
            <SpotlightCard
              spotlightColor="rgba(255, 255, 255, 0.25)"
              borderColor="rgba(255, 255, 255, 0.5)"
              className="p-8 shadow-md shadow-brand-terracotta/20 flex flex-col justify-start transition-transform hover:-translate-y-1 duration-300 bg-brand-terracotta border border-white/20 rounded-2xl relative text-white"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-6 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white border border-white/30 font-medium">
                    {t('home.values.badge3')}
                  </span>
                  <span className="text-white/70">03</span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-6 text-white">
                  <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                </div>
                <h3 className="font-serif text-xl text-white mb-3 font-bold">{t('home.values.title3')}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{t('home.values.desc3')}</p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 4. All Collection Section with ExpressiveCard */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface">
        <div className="max-w-7xl mx-auto px-grid-margin">
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 pb-6 border-b border-brand-dark-earth/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs text-brand-terracotta uppercase font-medium tracking-wider mb-2">
                <span>{t('home.collection.badge')}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-dark-earth font-bold">
                {t('home.collection.title')}
              </h2>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-terracotta hover:text-brand-dark-earth transition-colors px-5 py-2.5 rounded-full border border-brand-terracotta/30 hover:border-brand-terracotta bg-brand-terracotta/5"
            >
              <span>{t('home.collection.viewAllBtn')}</span>
              <span>→</span>
            </Link>
          </div>
          
          {/* Collection Grid of ExpressiveCards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {collections.slice(0, visibleItems).map((item) => (
              <ExpressiveCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                categoryName={item.categoryName}
              />
            ))}
          </div>
          
          {/* Load More Button with Magnet */}
          {visibleItems < collections.length && (
            <div className="mt-16 text-center">
              <Magnet magnetStrength={0.2}>
                <button 
                  onClick={() => setVisibleItems(prev => prev + 3)}
                  className="inline-flex items-center justify-center border border-brand-dark-earth text-brand-dark-earth text-xs h-12 px-9 rounded-full hover:bg-brand-dark-earth hover:text-white transition-colors duration-300 tracking-wider font-semibold shadow-sm"
                >
                  {t('home.collection.loadMore', { count: collections.length - visibleItems })}
                </button>
              </Magnet>
            </div>
          )}
        </div>
      </section>

      {/* 5. CTA Banner Section with Particles & Magnet */}
      <section className="bg-brand-deep-olive py-24 relative overflow-hidden">
        {/* Decorative structural elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none"></div>
        
        {/* Ambient floating specks */}
        <Particles
          className="z-5"
          quantity={25}
          color="#d2eabf"
          size={1.5}
        />

        <div className="max-w-4xl mx-auto px-grid-margin text-center relative z-10 text-brand-cream">
          <h2 className="font-display-lg text-display-lg mb-6 leading-tight">
            {t('home.cta.title')}
          </h2>
          <p className="font-body-lg text-body-lg mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            {t('home.cta.desc')}
          </p>
          <Magnet magnetStrength={0.3}>
            <StarBorder color="#ffffff" speed="3s">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-brand-terracotta text-white font-label-md text-label-md h-14 px-10 rounded-full hover:bg-[#d6854b] shadow-2xl shadow-brand-terracotta/50 transition-all duration-300"
              >
                <ShinyText text={t('home.cta.button')} color="#ffffff" shineColor="#ffdcc7" speed={2.5} />
              </Link>
            </StarBorder>
          </Magnet>
        </div>
      </section>
    </div>
  );
}
