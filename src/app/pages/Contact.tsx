import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import contactHeroImg from '../assets/contact-hero.jpeg';
import {
  SplitText,
  ShinyText,
  SpotlightCard,
  Magnet,
  StarBorder,
  Particles,
} from '../components/reactbits';

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-[100px] md:pt-[112px]">
      {/* Hero Section */}
      <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full" 
          style={{ backgroundImage: `url(${contactHeroImg})` }}
        />
        <div className="absolute inset-0 bg-brand-dark-earth/50 mix-blend-multiply"></div>
        
        {/* Ambient Particles */}
        <Particles
          className="z-15"
          quantity={35}
          color="#ffdcc7"
          size={2}
          staticity={35}
        />

        <div className="relative z-20 text-center px-grid-margin max-w-4xl mx-auto">
          <h1 className="font-display-lg text-display-lg text-white mb-6 drop-shadow-md leading-tight">
            <SplitText text={t('contact.hero.title')} delay={40} duration={0.6} className="justify-center" />
          </h1>
          <p className="font-body-lg text-body-lg text-brand-cream max-w-2xl mx-auto drop-shadow leading-relaxed">
            {t('contact.hero.desc')}
          </p>
        </div>
      </section>

      {/* Primary Contact Methods with SpotlightCard */}
      <section className="max-w-7xl mx-auto px-grid-margin py-section-gap-desktop relative z-20 -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
          {/* WhatsApp Card */}
          <SpotlightCard
            spotlightColor="rgba(37, 211, 102, 0.2)"
            borderColor="rgba(37, 211, 102, 0.4)"
            className="p-10 shadow-level2 flex flex-col items-start bg-white hover:-translate-y-1 transition-all duration-300 border border-brand-cocoa-brown/10"
          >
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-[32px] text-[#25D366]" style={{fontVariationSettings: "'wght' 300"}}>chat</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-brand-dark-earth mb-4 font-semibold">{t('contact.methods.wa.title')}</h2>
            <p className="font-body-md text-body-md text-brand-dark-earth/75 mb-10 flex-grow leading-relaxed">
              {t('contact.methods.wa.desc')}
            </p>
            <Magnet magnetStrength={0.3}>
              <StarBorder color="#25D366" speed="3s">
                <a 
                  href="https://wa.me/6285168628421" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-[#25D366] text-white font-label-md text-label-md h-14 px-10 rounded-full hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/30 transition-all duration-300 w-full sm:w-auto font-semibold gap-2"
                >
                  <span className="material-symbols-outlined text-xl">send</span>
                  {t('contact.methods.wa.button')}
                </a>
              </StarBorder>
            </Magnet>
          </SpotlightCard>

          {/* Email Card */}
          <SpotlightCard
            spotlightColor="rgba(80, 100, 67, 0.25)"
            borderColor="rgba(80, 100, 67, 0.4)"
            className="p-10 shadow-level2 flex flex-col items-start bg-white hover:-translate-y-1 transition-all duration-300 border border-brand-cocoa-brown/10"
          >
            <div className="w-16 h-16 rounded-full bg-brand-deep-olive/10 flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-[32px] text-brand-deep-olive" style={{fontVariationSettings: "'wght' 300"}}>mail</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-brand-dark-earth mb-4 font-semibold">{t('contact.methods.email.title')}</h2>
            <p className="font-body-md text-body-md text-brand-dark-earth/75 mb-10 flex-grow leading-relaxed">
              {t('contact.methods.email.desc')}
            </p>
            <Magnet magnetStrength={0.3}>
              <StarBorder color="#4A5E3D" speed="3.5s">
                <a 
                  href="mailto:alexpandawa@gmail.com" 
                  className="inline-flex items-center justify-center bg-brand-deep-olive text-white font-label-md text-label-md h-14 px-10 rounded-full hover:bg-opacity-90 shadow-lg shadow-brand-deep-olive/30 transition-all duration-300 w-full sm:w-auto font-semibold gap-2"
                >
                  <span className="material-symbols-outlined text-xl">drafts</span>
                  {t('contact.methods.email.button')}
                </a>
              </StarBorder>
            </Magnet>
          </SpotlightCard>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-brand-cream/30 py-section-gap-desktop border-t border-brand-dark-earth/10">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter text-center max-w-4xl mx-auto">
            {/* Location */}
            <div className="flex flex-col items-center group p-6 rounded-2xl bg-white shadow-level1 border border-brand-dark-earth/5 hover:shadow-level2 transition-all">
              <div className="w-20 h-20 rounded-full bg-brand-cream shadow-sm flex items-center justify-center mb-6 text-brand-terracotta group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[36px]" style={{fontVariationSettings: "'wght' 300"}}>location_on</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-2 font-semibold">{t('contact.info.location')}</h3>
              <p className="font-body-md text-body-md text-brand-dark-earth/75 leading-relaxed">
                Jln. Lingkar Selatan Kudus-Jepara km 3,<br />
                Desa Pasuruhan kidul, Kota Kudus
              </p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center group p-6 rounded-2xl bg-white shadow-level1 border border-brand-dark-earth/5 hover:shadow-level2 transition-all">
              <div className="w-20 h-20 rounded-full bg-brand-cream shadow-sm flex items-center justify-center mb-6 text-brand-terracotta group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[36px]" style={{fontVariationSettings: "'wght' 300"}}>alternate_email</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-brand-dark-earth mb-2 font-semibold">{t('contact.info.email')}</h3>
              <p className="font-body-md text-body-md text-brand-dark-earth/75 font-mono text-sm mt-1">alexpandawa@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Olive Banner with Particles & Magnet */}
      <section className="bg-brand-deep-olive py-24 px-grid-margin text-center relative overflow-hidden">
        <Particles
          className="z-5"
          quantity={25}
          color="#d2eabf"
          size={1.6}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display-lg text-[42px] md:text-[48px] text-brand-cream mb-6 leading-tight">Ready to craft your legacy?</h2>
          <p className="font-body-lg text-body-lg text-brand-cream/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every piece tells a story. Let us help you tell yours with sustainable, handcrafted precision.
          </p>
          <Magnet magnetStrength={0.3}>
            <StarBorder color="#ffffff" speed="3s">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center bg-brand-terracotta text-white font-label-md text-label-md px-10 h-14 rounded-full hover:bg-[#d6854b] shadow-2xl shadow-brand-terracotta/40 transition-all duration-300 font-semibold"
              >
                <ShinyText text="Start a Project" color="#ffffff" shineColor="#ffdcc7" speed={2.5} />
              </Link>
            </StarBorder>
          </Magnet>
        </div>
      </section>
    </div>
  );
}
