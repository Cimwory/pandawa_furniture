import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import heroBg from '../assets/2874e70677e9347f1c498bc483444526782683b2.png';
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
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(3);

  const collections = [
    {
      id: 'flores',
      title: "Flores Teak Dining Table",
      subtitle: "Meja Makan Kayu Jati Solid",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtN1RhIbtMCdwlejV1YrJA7ufvcR0haAxAo1v4Mca6lsIcLGHZAE5LC-SZSKjwSQZ-2KO2tKxQ0DzNv7hKi-o_ul-QZIlquzFwxZoH1_pHNVOSYlgrvt9Pswm8ro6-_uVl2NMW9p4Tz0EEhWymihO27J7g5CGDngeQ2HnpwT_R-WhXe6R08SMrdeRK6ChRm7rnQk4_rhtjsOHvOT6cBwQXA8N0zEjVwzfNWL_YZdTsNLVXkt_jtXb-Mg",
      categoryName: 'Meja Makan',
    },
    {
      id: 'mandeling',
      title: "Mandeling Sculptural Lounge Chair",
      subtitle: "Kursi Santai Lengkung Ergonomis",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHl52K8OgYNtkt439xcTQGjymV5DNOxA_4cPNLOjM4N-TTZ5oMStVdEYttKgucYnE6d1xK35fn2IftA9csLnqjPRVcztxmTOyN9wXmtmfrcOxEtSs9DunTeK5U4oyyOR7eL_TpkBFwaq9b38x_GBxkTl2CsG-R_PcwwMQaA5DohdRtR-v29rcS8mm3hAe-qJgWO3xWbmt46A8YIUusyjDFKbBsbkXfs4VJalMuWJQbwCFX5HXPybbJCw",
      categoryName: 'Kursi Santai',
    },
    {
      id: 'aceh',
      title: "Aceh Minimalist Indoor Credenza",
      subtitle: "Bufet Minimalis Kayu Jati",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdYUfhQA_B14kFpNWW0-eT7xIFFssAUZtGACQrjIaKcilCUei5OYRFS6yX97iM4djnncwa9uNMv-UL7OCrkAUESwzKaD6Kd3gaJvBYal5vRGR05u2Tv8Q8XK8jMb9kId8uAnOeKl4_vzIzuOLFHExCzfmo_3E075DccXBO_5Zus8wkUjpylMEluOQSnaXKc40oHIntW66LzLY0OPrIpSttPYd06b_i22tIpPsHKZCczfWF9ZkZKMzR6w",
      categoryName: 'Bufet & Credenza',
    },
    {
      id: 'bali',
      title: "Bali Weather-Resistant Sun Table",
      subtitle: "Meja Teras Jati Tahan Cuaca",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKxRORyTe_o3kx0H7z8Q_Xe1gAfZ97mhvusyBcDgJM7ucVQNyJgHtaSaflUxtfKXRluKbRFlXCBazSY5kksiaDyggVXxGphXDTt7GMco1xLRBEgi7_Iz0qieg3eTBoixoVHBbyGGomnX5gSrS7K33-tnzGBi02gWtA0xcDMoXx7zTkC_JkNGEKBQHBYmMTHSXf-qdNtIWUvB9D3MHKu-Lti0PcNA-z6LFQvrgVsHd5voahelO2h0VqTg",
      categoryName: 'Meja Luar Ruang',
    },
    {
      id: 'jepara',
      title: "Jepara Classic Heritage Cabinet",
      subtitle: "Lemari Pajang Ukir Tradisional",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtN1RhIbtMCdwlejV1YrJA7ufvcR0haAxAo1v4Mca6lsIcLGHZAE5LC-SZSKjwSQZ-2KO2tKxQ0DzNv7hKi-o_ul-QZIlquzFwxZoH1_pHNVOSYlgrvt9Pswm8ro6-_uVl2NMW9p4Tz0EEhWymihO27J7g5CGDngeQ2HnpwT_R-WhXe6R08SMrdeRK6ChRm7rnQk4_rhtjsOHvOT6cBwQXA8N0zEjVwzfNWL_YZdTsNLVXkt_jtXb-Mg",
      categoryName: 'Lemari Hias',
    },
    {
      id: 'sumatra',
      title: "Sumatra Modern Low Daybed",
      subtitle: "Bale Santai Desain Skandinavia",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHl52K8OgYNtkt439xcTQGjymV5DNOxA_4cPNLOjM4N-TTZ5oMStVdEYttKgucYnE6d1xK35fn2IftA9csLnqjPRVcztxmTOyN9wXmtmfrcOxEtSs9DunTeK5U4oyyOR7eL_TpkBFwaq9b38x_GBxkTl2CsG-R_PcwwMQaA5DohdRtR-v29rcS8mm3hAe-qJgWO3xWbmt46A8YIUusyjDFKbBsbkXfs4VJalMuWJQbwCFX5HXPybbJCw",
      categoryName: 'Bale Santai',
    },
  ];

  return (
    <div className="pt-[100px] md:pt-[112px]">
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
              spotlightColor="rgba(80, 100, 67, 0.15)"
              borderColor="rgba(80, 100, 67, 0.3)"
              className="p-8 shadow-level1 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300 bg-white rounded-2xl relative"
            >
              <div>
                <div className="flex items-center justify-between border-b border-brand-dark-earth/10 pb-3 mb-6 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                    {t('home.values.badge1')}
                  </span>
                  <span className="text-brand-dark-earth/50">01</span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-brand-deep-olive/10 flex items-center justify-center mb-6 text-brand-deep-olive">
                  <span className="material-symbols-outlined text-3xl">nest_eco_leaf</span>
                </div>
                <h3 className="font-serif text-xl text-brand-dark-earth mb-3 font-bold">{t('home.values.title1')}</h3>
                <p className="text-sm text-brand-dark-earth/75 leading-relaxed mb-6">{t('home.values.desc1')}</p>
              </div>

              <div className="pt-3 border-t border-brand-dark-earth/10 flex items-center justify-between text-xs text-brand-dark-earth/70">
                <span>{t('home.values.sourceLabel')}</span>
                <span className="font-bold text-brand-deep-olive">{t('home.values.sourceVal')}</span>
              </div>
            </SpotlightCard>
            
            {/* Value 2 */}
            <SpotlightCard
              spotlightColor="rgba(72, 49, 36, 0.15)"
              borderColor="rgba(72, 49, 36, 0.3)"
              className="p-8 shadow-level1 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300 bg-white rounded-2xl relative"
            >
              <div>
                <div className="flex items-center justify-between border-b border-brand-dark-earth/10 pb-3 mb-6 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-medium">
                    {t('home.values.badge2')}
                  </span>
                  <span className="text-brand-dark-earth/50">02</span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-brand-cocoa-brown/10 flex items-center justify-center mb-6 text-brand-cocoa-brown">
                  <span className="material-symbols-outlined text-3xl">group</span>
                </div>
                <h3 className="font-serif text-xl text-brand-dark-earth mb-3 font-bold">{t('home.values.title2')}</h3>
                <p className="text-sm text-brand-dark-earth/75 leading-relaxed mb-6">{t('home.values.desc2')}</p>
              </div>

              <div className="pt-3 border-t border-brand-dark-earth/10 flex items-center justify-between text-xs text-brand-dark-earth/70">
                <span>{t('home.values.traditionLabel')}</span>
                <span className="font-bold text-brand-cocoa-brown">{t('home.values.traditionVal')}</span>
              </div>
            </SpotlightCard>
            
            {/* Value 3 */}
            <SpotlightCard
              spotlightColor="rgba(190, 115, 61, 0.15)"
              borderColor="rgba(190, 115, 61, 0.3)"
              className="p-8 shadow-level1 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300 bg-white rounded-2xl relative"
            >
              <div>
                <div className="flex items-center justify-between border-b border-brand-dark-earth/10 pb-3 mb-6 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-800 border border-red-200 font-medium">
                    {t('home.values.badge3')}
                  </span>
                  <span className="text-brand-dark-earth/50">03</span>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-brand-terracotta/10 flex items-center justify-center mb-6 text-brand-terracotta">
                  <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                </div>
                <h3 className="font-serif text-xl text-brand-dark-earth mb-3 font-bold">{t('home.values.title3')}</h3>
                <p className="text-sm text-brand-dark-earth/75 leading-relaxed mb-6">{t('home.values.desc3')}</p>
              </div>

              <div className="pt-3 border-t border-brand-dark-earth/10 flex items-center justify-between text-xs text-brand-dark-earth/70">
                <span>{t('home.values.constructionLabel')}</span>
                <span className="font-bold text-brand-terracotta">{t('home.values.constructionVal')}</span>
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
