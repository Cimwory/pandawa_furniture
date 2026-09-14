import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useTranslation } from 'react-i18next';
import productionHeroImg from '../assets/production-hero.jpeg';
import image_08deb210930238d0b61573463464031a301d6be3 from '../assets/08deb210930238d0b61573463464031a301d6be3.png';
import image_f5553a4a208f9b99979e04e8268a24f5a5feabcd from '../assets/f5553a4a208f9b99979e04e8268a24f5a5feabcd.png';
import image_ea4e0d3666996065ddeb190c4028a8c43ca1eab2 from '../assets/ea4e0d3666996065ddeb190c4028a8c43ca1eab2.png';
import image_1aad063b976faef1f4b68af17eca100c145ee9a7 from '../assets/1aad063b976faef1f4b68af17eca100c145ee9a7.png';
import image_e77818745e813bf5ce0d49cc96412216566da6c8 from '../assets/e77818745e813bf5ce0d49cc96412216566da6c8.png';
import image_810c3ec98355f08a9c766659a6ea0cd9314b15ac from '../assets/810c3ec98355f08a9c766659a6ea0cd9314b15ac.png';
import image_ba07c6ac9f6733b987465b474d9baa59a1afefd6 from '../assets/ba07c6ac9f6733b987465b474d9baa59a1afefd6.png';
import image_621d39621b0ef347797640e713ebeb2bd5c51081 from '../assets/621d39621b0ef347797640e713ebeb2bd5c51081.png';
import image_61f250a254b4a06e52d903637392bbace611f978 from '../assets/61f250a254b4a06e52d903637392bbace611f978.png';
import {
  BlurText,
  SpotlightCard,
  TiltedCard,
  Particles,
} from '../components/reactbits';

export function Production() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-dark-earth/65 z-10"></div>
          <ImageWithFallback src={productionHeroImg} alt="Production & Shipping Hero" className="w-full h-full object-cover" />
        </div>

        {/* Ambient Particles */}
        <Particles
          className="z-15"
          quantity={30}
          color="#ffdcc7"
          size={2}
          staticity={35}
        />

        <div className="relative z-20 text-center px-grid-margin max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-display-lg text-white mb-6 drop-shadow-md">
            <BlurText text={t('production.hero.title')} delay={70} duration={0.8} />
          </h1>
          <p className="font-body-lg text-xl md:text-2xl text-brand-cream/90 max-w-2xl text-center drop-shadow-md leading-relaxed">
            {t('production.hero.desc')}
          </p>
        </div>
      </section>

      {/* Timeline Section with SpotlightCards */}
      <section className="py-section-gap-desktop px-grid-margin max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-brand-dark-earth mb-4">{t('production.process.title')}</h2>
          <p className="font-body-md text-lg text-brand-dark-earth/70">
            {t('production.process.desc')}
          </p>
          <div className="w-16 h-1 bg-brand-terracotta mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Bento Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-grid-gutter relative">
          {/* Decorative Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-brand-cocoa-brown/20 z-0"></div>

          {/* Step 1 */}
          <SpotlightCard
            spotlightColor="rgba(80, 100, 67, 0.25)"
            borderColor="rgba(80, 100, 67, 0.4)"
            className="p-8 shadow-level1 relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white"
          >
            <div className="w-16 h-16 rounded-full bg-brand-deep-olive/10 text-brand-deep-olive flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}>energy_savings_leaf</span>
            </div>
            <span className="font-mono text-xs tracking-widest text-brand-cocoa-brown font-semibold mb-2">STEP 01</span>
            <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-3 font-semibold">{t('production.process.steps.s1.title')}</h3>
            <p className="font-body-md text-sm text-brand-dark-earth/75 leading-relaxed">{t('production.process.steps.s1.desc')}</p>
          </SpotlightCard>

          {/* Step 2 */}
          <SpotlightCard
            spotlightColor="rgba(190, 115, 61, 0.25)"
            borderColor="rgba(190, 115, 61, 0.4)"
            className="p-8 shadow-level1 relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white"
          >
            <div className="w-16 h-16 rounded-full bg-brand-terracotta/10 text-brand-terracotta flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}>handyman</span>
            </div>
            <span className="font-mono text-xs tracking-widest text-brand-cocoa-brown font-semibold mb-2">STEP 02</span>
            <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-3 font-semibold">{t('production.process.steps.s2.title')}</h3>
            <p className="font-body-md text-sm text-brand-dark-earth/75 leading-relaxed">{t('production.process.steps.s2.desc')}</p>
          </SpotlightCard>

          {/* Step 3 */}
          <SpotlightCard
            spotlightColor="rgba(72, 49, 36, 0.25)"
            borderColor="rgba(72, 49, 36, 0.4)"
            className="p-8 shadow-level1 relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white"
          >
            <div className="w-16 h-16 rounded-full bg-brand-cocoa-brown text-white flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}>shield</span>
            </div>
            <span className="font-mono text-xs tracking-widest text-brand-cocoa-brown font-semibold mb-2">STEP 03</span>
            <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-3 font-semibold">{t('production.process.steps.s3.title')}</h3>
            <p className="font-body-md text-sm text-brand-dark-earth/75 leading-relaxed">{t('production.process.steps.s3.desc')}</p>
          </SpotlightCard>

          {/* Step 4 */}
          <SpotlightCard
            spotlightColor="rgba(80, 100, 67, 0.25)"
            borderColor="rgba(80, 100, 67, 0.4)"
            className="p-8 shadow-level1 relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white"
          >
            <div className="w-16 h-16 rounded-full bg-brand-deep-olive/10 text-brand-deep-olive flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}>local_shipping</span>
            </div>
            <span className="font-mono text-xs tracking-widest text-brand-cocoa-brown font-semibold mb-2">STEP 04</span>
            <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-3 font-semibold">{t('production.process.steps.s4.title')}</h3>
            <p className="font-body-md text-sm text-brand-dark-earth/75 leading-relaxed">{t('production.process.steps.s4.desc')}</p>
          </SpotlightCard>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-section-gap-desktop bg-[#fff1e6] px-6 md:px-16 lg:px-24">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-6 order-2 md:order-1 flex flex-col justify-center pr-0 md:pr-8 lg:pr-12">
            <h2 className="font-headline-lg text-[40px] md:text-[48px] leading-tight text-brand-dark-earth mb-8">{t('production.craft.title')}</h2>
            <p className="font-body-md text-xl md:text-2xl text-brand-dark-earth/80 mb-10 leading-relaxed">
              {t('production.craft.desc1')}
            </p>
            <ul className="space-y-6">
              <li className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-brand-cocoa-brown/10 hover:border-brand-terracotta/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-deep-olive/10 flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="material-symbols-outlined text-brand-deep-olive text-[28px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}>check_circle</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-xl text-brand-dark-earth font-semibold">{t('production.craft.point1')}</h4>
                </div>
              </li>
              <li className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-brand-cocoa-brown/10 hover:border-brand-terracotta/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-deep-olive/10 flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="material-symbols-outlined text-brand-deep-olive text-[28px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}>check_circle</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-xl text-brand-dark-earth font-semibold">{t('production.craft.point2')}</h4>
                </div>
              </li>
              <li className="flex items-center bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-brand-cocoa-brown/10 hover:border-brand-terracotta/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-brand-deep-olive/10 flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="material-symbols-outlined text-brand-deep-olive text-[28px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}>check_circle</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-xl text-brand-dark-earth font-semibold">{t('production.craft.point3')}</h4>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 mb-10 md:mb-0">
            <TiltedCard maxTilt={8} scale={1.02}>
              <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[700px] rounded-2xl overflow-hidden shadow-level2 group border border-brand-dark-earth/10">
                <ImageWithFallback src={image_08deb210930238d0b61573463464031a301d6be3} alt="Artisan Craftsmanship Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </TiltedCard>
          </div>
        </div>
      </section>

      {/* Visual Gallery with TiltedCards */}
      <section className="py-section-gap-desktop px-grid-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[300px]">
          <div className="md:col-span-1 md:row-span-1">
            <TiltedCard maxTilt={8} className="h-full">
              <div className="h-full rounded-2xl overflow-hidden shadow-level1 group relative border border-brand-dark-earth/10">
                <div className="absolute inset-0 bg-brand-dark-earth/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <ImageWithFallback src={image_f5553a4a208f9b99979e04e8268a24f5a5feabcd} alt="Artisan Workshop" className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </TiltedCard>
          </div>

          <div className="md:col-span-2 md:row-span-2">
            <TiltedCard maxTilt={6} className="h-full">
              <div className="h-full rounded-2xl overflow-hidden shadow-level2 group relative border border-brand-dark-earth/10">
                <div className="absolute inset-0 bg-brand-dark-earth/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <ImageWithFallback src={image_ea4e0d3666996065ddeb190c4028a8c43ca1eab2} alt="Warehouse Facility" className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </TiltedCard>
          </div>

          <div className="md:col-span-1 md:row-span-1">
            <TiltedCard maxTilt={8} className="h-full">
              <div className="h-full rounded-2xl overflow-hidden shadow-level1 group relative border border-brand-dark-earth/10">
                <div className="absolute inset-0 bg-brand-dark-earth/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <ImageWithFallback src={image_1aad063b976faef1f4b68af17eca100c145ee9a7} alt="Furniture Delivery" className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </TiltedCard>
          </div>

          <div className="md:col-span-2 md:row-span-1">
            <TiltedCard maxTilt={8} className="h-full">
              <div className="h-full rounded-2xl overflow-hidden shadow-level1 group relative border border-brand-dark-earth/10">
                <div className="absolute inset-0 bg-brand-dark-earth/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <ImageWithFallback src={image_e77818745e813bf5ce0d49cc96412216566da6c8} alt="Happy Customer with Furniture" className="w-full h-[300px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </TiltedCard>
          </div>
        </div>
      </section>

      {/* Global Shipping & Logistics Section */}
      <section className="py-section-gap-desktop bg-[#fff8f4] px-grid-margin border-t border-brand-dark-earth/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-brand-dark-earth mb-4">{t('production.shipping.title')}</h2>
            <p className="font-body-md text-lg text-brand-dark-earth/70">
              {t('production.shipping.desc')}
            </p>
            <div className="w-16 h-1 bg-brand-terracotta mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-level2 border border-brand-dark-earth/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
              <TiltedCard maxTilt={10}>
                <div className="rounded-xl overflow-hidden aspect-square group">
                  <ImageWithFallback src={image_810c3ec98355f08a9c766659a6ea0cd9314b15ac} alt="Furniture Packaging Detail 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </TiltedCard>
              <TiltedCard maxTilt={10}>
                <div className="rounded-xl overflow-hidden aspect-square group">
                  <ImageWithFallback src={image_ba07c6ac9f6733b987465b474d9baa59a1afefd6} alt="Loading Shipping Truck" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </TiltedCard>
              <TiltedCard maxTilt={10}>
                <div className="rounded-xl overflow-hidden aspect-square group">
                  <ImageWithFallback src={image_621d39621b0ef347797640e713ebeb2bd5c51081} alt="Furniture Packaging Detail 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </TiltedCard>
              <TiltedCard maxTilt={10}>
                <div className="rounded-xl overflow-hidden aspect-square group">
                  <ImageWithFallback src={image_61f250a254b4a06e52d903637392bbace611f978} alt="Shipping Container" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </TiltedCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
