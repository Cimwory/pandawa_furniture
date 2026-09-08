import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

// Images
import productsHeroImg from '../assets/products-hero.jpeg';
import dressoirImg from '../assets/15f0a36d33a7c06acb99f1b5cf23860e31c9e229.png';
import coffeeTableImg from '../assets/ff89027649427a59d1b62a1e882d28aed26cc775.png';
import bedroomFurnitureImg from '../assets/f3c9df50243d7f9e3d03f042f3f6626ec85bbf74.png';
import proofCabinetImg from '../assets/fc5964b3113fde8a49149cd92f85ea4450691c43.png';
import proofTvStandImg from '../assets/bb679ca50af152a8f0faa607e561f4d8254d5707.png';
import proofWardrobeImg from '../assets/93fec46fe2c182559cb71aafc651703bd56b2630.png';

// New Cabinet Images
import cab1 from '../../assets/cabinet/1380088840-650x650.jpg';
import cab3 from '../../assets/cabinet/02702809-1-650x650.jpg';
import cab4 from '../../assets/cabinet/02702153-650x650.jpg';
import cab5 from '../../assets/cabinet/02702143-1.jpg';

// New Dressoir Images
import dres1 from '../../assets/dressoir/02703170-1-650x650.jpg';
import dres2 from '../../assets/dressoir/02732018-1.jpg';
import dres3 from '../../assets/dressoir/02732026-650x650.jpg';
import dres4 from '../../assets/dressoir/MA-A-003-650x650.jpg';
import dres5 from '../../assets/dressoir/TF-A-002-100-02732144-100x46x451-650x650.jpg';
import dres6 from '../../assets/dressoir/TFA002-800-600x600.jpg';

// Chair Images
import chairImg1 from '../../assets/chair/02702213-650x650.jpg';
import chairImg2 from '../../assets/chair/02702930-650x650.jpg';
import chairImg3 from '../../assets/chair/1380686619-650x650.jpg';
import chairImg4 from '../../assets/chair/1532591640-650x650.jpg';
import chairImg5 from '../../assets/chair/1565899437-650x650.jpg';
import chairImg6 from '../../assets/chair/KL-J-010-A1-650x650.jpg';
import chairImg7 from '../../assets/chair/x_0y_01458114406-650x650.jpg';

// Water Sink Images
import waterSinkImg1 from '../../assets/water sink/6a3d62e1-b9c4-496c-9132-a025c0627efb.jpg';
import waterSinkImg2 from '../../assets/water sink/8701061a-9a20-4757-a9df-0bb2bacd549d.jpg';
import waterSinkImg3 from '../../assets/water sink/8d9c2597-6d3d-472b-a82d-2cba04191bcf.jpg';
import waterSinkImg4 from '../../assets/water sink/a5d52f18-938e-4786-9764-f8f84bfb85bb.jpg';
import waterSinkImg5 from '../../assets/water sink/abbc1bbd-c466-4ce6-8d15-6de8fedae365.jpg';
import waterSinkImg6 from '../../assets/water sink/f074e6f2-a389-4b73-8f0e-dfe8252a78ae.jpg';

export function Products() {
  const { t } = useTranslation();
  const categories = [
    {
      name: 'Chair',
      images: [
        { image: chairImg1, alt: 'Lounge Teak Chair', title: 'Lounge Teak Chair' },
        { image: chairImg2, alt: 'Lounge Teak Chair Angle 2', title: 'Lounge Teak Chair' },
        { image: chairImg3, alt: 'Lounge Teak Chair Details', title: 'Lounge Teak Chair' },
        { image: chairImg4, alt: 'Chair Variant 4', title: 'Lounge Teak Chair' },
        { image: chairImg5, alt: 'Chair Variant 5', title: 'Lounge Teak Chair' },
        { image: chairImg6, alt: 'Chair Variant 6', title: 'Lounge Teak Chair' },
        { image: chairImg7, alt: 'Chair Variant 7', title: 'Lounge Teak Chair' },
      ].slice(0, 6)
    },
    {
      name: 'Dressoir',
      images: [
        { image: dres1, alt: 'Vintage Dressoir', title: 'Vintage Dressoir' },
        { image: dres2, alt: 'Vintage Dressoir', title: 'Vintage Dressoir' },
        { image: dres3, alt: 'Vintage Dressoir', title: 'Vintage Dressoir' },
        { image: dres4, alt: 'Vintage Dressoir', title: 'Vintage Dressoir' },
        { image: dres5, alt: 'Vintage Dressoir', title: 'Vintage Dressoir' },
        { image: dres6, alt: 'Vintage Dressoir', title: 'Vintage Dressoir' },
      ].slice(0, 6)
    },
    {
      name: 'Cabinet',
      images: [
        { image: cab1, alt: 'Teak Wood Cabinet', title: 'Teak Wood Cabinet' },
        { image: cab3, alt: 'Teak Wood Cabinet', title: 'Teak Wood Cabinet' },
        { image: cab4, alt: 'Teak Wood Cabinet', title: 'Teak Wood Cabinet' },
        { image: cab5, alt: 'Teak Wood Cabinet', title: 'Teak Wood Cabinet' },
        { image: proofCabinetImg, alt: 'Teak wood cabinet ready for shipment', title: 'Teak Wood Cabinet' },
        { image: proofWardrobeImg, alt: 'Teak wood wardrobe with storage drawers', title: 'Teak Wood Wardrobe' },
        { image: bedroomFurnitureImg, alt: 'Bedroom Wardrobe', title: 'Bedroom Wardrobe' },
      ].slice(0, 6)
    },
    {
      name: 'Water Sink Stone',
      images: [
        { image: waterSinkImg1, alt: 'Water Sink Stone', title: 'Water Sink Stone' },
        { image: waterSinkImg2, alt: 'Hand-carved stone sink basin', title: 'Hand-carved Stone Sink' },
        { image: waterSinkImg3, alt: 'Modern stone sink with teak vanity', title: 'Modern Stone Sink' },
        { image: waterSinkImg4, alt: 'Water Sink Variant 4', title: 'Water Sink Stone' },
        { image: waterSinkImg5, alt: 'Water Sink Variant 5', title: 'Water Sink Stone' },
        { image: waterSinkImg6, alt: 'Water Sink Variant 6', title: 'Water Sink Stone' },
      ].slice(0, 6)
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <ImageWithFallback src={productsHeroImg} alt="Our Collection" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-display-lg text-display-lg text-white mb-6">{t('products.hero.title')}</h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto">
            {t('products.hero.desc')}
          </p>
        </div>
      </section>

      {/* Bespoke Notice Section */}
      <section className="w-full bg-brand-cream py-section-gap-mobile md:py-24 border-y border-brand-cocoa-brown/10">
        <div className="max-w-4xl mx-auto px-grid-margin text-center">
          <span className="material-symbols-outlined text-4xl text-brand-terracotta mb-4">design_services</span>
          <h2 className="font-headline-md text-headline-md text-brand-dark-earth mb-4">{t('products.notice.title')}</h2>
          <p className="font-body-md text-brand-dark-earth/70 mb-8 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t('products.notice.desc1') }} />
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-terracotta text-white px-10 h-14 rounded-full font-label-md text-label-md hover:bg-[#d6854b] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg">
            {t('products.notice.button')}
          </Link>
        </div>
      </section>

      {/* Sample Collection Section */}
      <section className="w-full py-section-gap-desktop bg-surface">
        <div className="max-w-7xl mx-auto px-grid-margin">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-brand-dark-earth uppercase tracking-wider">{t('home.collection.title')}</h2>
          </div>
          
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="mb-24 last:mb-0">
              <div className="flex flex-col items-center mb-12">
                <h3 className="font-headline-md text-headline-md text-brand-dark-earth uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                {category.images.map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="w-full aspect-[4/5] overflow-hidden bg-brand-cream/30">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-brand-deep-olive py-32 text-center">
        <div className="max-w-3xl mx-auto px-grid-margin flex flex-col items-center">
          <h2 className="font-display-lg text-display-lg text-brand-cream mb-6">{t('products.cta.title')}</h2>
          <p className="font-body-lg text-brand-cream/80 mb-10 max-w-xl">
            {t('products.cta.desc')}
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-terracotta text-white px-10 h-14 rounded-full font-label-md text-label-md hover:bg-[#d6854b] hover:-translate-y-1 hover:shadow-xl active:scale-95 transition-all duration-300 shadow-lg gap-2">
            <span className="material-symbols-outlined">forum</span>
            {t('products.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
