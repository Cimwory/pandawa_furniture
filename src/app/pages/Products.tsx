import { useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  BlurText,
  ShinyText,
  Magnet,
  StarBorder,
  Particles,
} from '../components/reactbits';
import { ExpressiveCard } from '../components/animejs/ExpressiveCard';
import { DocsNavSidebar, CategoryItem } from '../components/animejs/DocsNavSidebar';

// Images
import productsHeroImg from '../assets/products-hero.jpeg';

// Cabinet Images
import cab1 from '../../assets/cabinet/1380088840-650x650.jpg';
import cab3 from '../../assets/cabinet/02702809-1-650x650.jpg';
import cab4 from '../../assets/cabinet/02702153-650x650.jpg';
import cab5 from '../../assets/cabinet/02702143-1.jpg';
import proofCabinetImg from '../assets/fc5964b3113fde8a49149cd92f85ea4450691c43.png';
import proofWardrobeImg from '../assets/93fec46fe2c182559cb71aafc651703bd56b2630.png';

// Dressoir Images
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

// Water Sink Images
import waterSinkImg1 from '../../assets/water sink/6a3d62e1-b9c4-496c-9132-a025c0627efb.jpg';
import waterSinkImg2 from '../../assets/water sink/8701061a-9a20-4757-a9df-0bb2bacd549d.jpg';
import waterSinkImg3 from '../../assets/water sink/8d9c2597-6d3d-472b-a82d-2cba04191bcf.jpg';
import waterSinkImg4 from '../../assets/water sink/a5d52f18-938e-4786-9764-f8f84bfb85bb.jpg';
import waterSinkImg5 from '../../assets/water sink/abbc1bbd-c466-4ce6-8d15-6de8fedae365.jpg';
import waterSinkImg6 from '../../assets/water sink/f074e6f2-a389-4b73-8f0e-dfe8252a78ae.jpg';

export function Products() {
  const { t, i18n } = useTranslation();
  const isId = (i18n.resolvedLanguage || i18n.language)?.startsWith('id');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSubFilter, setActiveSubFilter] = useState<string>('all');

  const navCategories: CategoryItem[] = [
    {
      id: 'all',
      name: t('products.nav.all'),
      count: 24,
    },
    {
      id: 'chair',
      name: t('products.nav.chair'),
      count: 6,
      isNew: true,
      subItems: [
        { id: 'chair-lounge', name: t('products.nav.chairLounge') },
        { id: 'chair-dining', name: t('products.nav.chairDining') },
      ],
    },
    {
      id: 'dressoir',
      name: t('products.nav.dressoir'),
      count: 6,
      subItems: [
        { id: 'dres-sideboard', name: t('products.nav.dresSideboard') },
        { id: 'dres-slat', name: t('products.nav.dresSlat') },
      ],
    },
    {
      id: 'cabinet',
      name: t('products.nav.cabinet'),
      count: 6,
      subItems: [
        { id: 'cab-glass', name: t('products.nav.cabGlass') },
        { id: 'cab-wardrobe', name: t('products.nav.cabWardrobe') },
      ],
    },
    {
      id: 'stone',
      name: t('products.nav.stone'),
      count: 6,
      isNew: true,
      subItems: [
        { id: 'stone-river', name: t('products.nav.stoneRiver') },
        { id: 'stone-granite', name: t('products.nav.stoneGranite') },
      ],
    },
  ];

  const productData = [
    // Chairs
    {
      id: 'chr-01',
      category: 'chair',
      categoryName: 'Kursi Jati',
      categoryNameEn: 'Teak Chair',
      title: 'Ergonomic Teak Lounge Chair',
      titleId: 'Kursi Santai Jati Ergonomis',
      subtitle: 'Kursi Santai Lengkung Ergonomis Kayu Jati',
      subtitleEn: 'Ergonomic curved solid teak lounge chair',
      image: chairImg1,
    },
    {
      id: 'chr-02',
      category: 'chair',
      categoryName: 'Kursi Makan',
      categoryNameEn: 'Dining Chair',
      title: 'Minimalist Teak Dining Chair',
      titleId: 'Kursi Makan Jati Minimalis',
      subtitle: 'Kursi Makan Kayu Jati Minimalis',
      subtitleEn: 'Minimalist solid teak dining chair',
      image: chairImg2,
    },
    {
      id: 'chr-03',
      category: 'chair',
      categoryName: 'Kursi Ukir',
      categoryNameEn: 'Armchair',
      title: 'Heritage Jepara Armchair',
      titleId: 'Kursi Lengan Warisan Jepara',
      subtitle: 'Kursi Lengan Khas Pengrajin Jepara',
      subtitleEn: 'Traditional handcrafted Jepara armchair',
      image: chairImg3,
    },
    {
      id: 'chr-04',
      category: 'chair',
      categoryName: 'Bangku Jati',
      categoryNameEn: 'Teak Stool',
      title: 'Nordic Teak Stool & Ottoman',
      titleId: 'Bangku Jati Gaya Nordik',
      subtitle: 'Bangku Bulat Kayu Jati Solid',
      subtitleEn: 'Solid circular teak accent stool',
      image: chairImg4,
    },
    {
      id: 'chr-05',
      category: 'chair',
      categoryName: 'Kursi Santai',
      categoryNameEn: 'Lounge Chair',
      title: 'Classic Scandinavian Teak Chair',
      titleId: 'Kursi Jati Skandinavia Klasik',
      subtitle: 'Kursi Kayu Jati Desain Skandinavia Klasik',
      subtitleEn: 'Classic Scandinavian design teak chair',
      image: chairImg5,
    },
    {
      id: 'chr-06',
      category: 'chair',
      categoryName: 'Kursi Kerja',
      categoryNameEn: 'Studio Chair',
      title: 'Solid Teak Studio Desk Chair',
      titleId: 'Kursi Kerja Studio Jati Solid',
      subtitle: 'Kursi Kerja Jati Solid Finishing Alami',
      subtitleEn: 'Natural finish solid teak studio desk chair',
      image: chairImg6,
    },

    // Dressoir
    {
      id: 'drs-01',
      category: 'dressoir',
      categoryName: 'Bufet Jati',
      categoryNameEn: 'Teak Credenza',
      title: 'Solid Teak 4-Door Credenza',
      titleId: 'Bufet Kredensa 4 Pintu Jati Solid',
      subtitle: 'Bufet Pintu Geser 4 Pintu Kayu Jati',
      subtitleEn: 'Solid teak 4 sliding door credenza',
      image: dres1,
    },
    {
      id: 'drs-02',
      category: 'dressoir',
      categoryName: 'Meja Konsol',
      categoryNameEn: 'Console Table',
      title: 'Minimalist Sideboard Console',
      titleId: 'Meja Konsol Bufet Minimalis',
      subtitle: 'Konsol Minimalis dengan Laci Halus',
      subtitleEn: 'Minimalist console with smooth sliding drawers',
      image: dres2,
    },
    {
      id: 'drs-03',
      category: 'dressoir',
      categoryName: 'Bufet Bilah',
      categoryNameEn: 'Louvre Sideboard',
      title: 'Sliding Louvre Dressoir',
      titleId: 'Bufet Bilah Pintu Geser',
      subtitle: 'Bufet Bilah Kayu Jati Sirkulasi Udara',
      subtitleEn: 'Louvred teak sideboard with airflow ventilation',
      image: dres3,
    },
    {
      id: 'drs-04',
      category: 'dressoir',
      categoryName: 'Bufet Rendah',
      categoryNameEn: 'Lowline Credenza',
      title: 'Lowline Teak Media Credenza',
      titleId: 'Kredensa Media Jati Rendah',
      subtitle: 'Kredensa Rendah Jati untuk Ruang Keluarga',
      subtitleEn: 'Low profile teak media console for living room',
      image: dres4,
    },
    {
      id: 'drs-05',
      category: 'dressoir',
      categoryName: 'Bufet Laci',
      categoryNameEn: 'Drawer Dresser',
      title: 'Multi-Drawer Teak Dresser',
      titleId: 'Bufet Laci Bertingkat Jati',
      subtitle: 'Bufet Jati Laci Bertingkat Serbaguna',
      subtitleEn: 'Multi-tiered storage teak drawer dresser',
      image: dres5,
    },
    {
      id: 'drs-06',
      category: 'dressoir',
      categoryName: 'Lemari Bufet',
      categoryNameEn: 'Sideboard',
      title: 'Vintage Jepara Wide Sideboard',
      titleId: 'Bufet Lebar Vintage Jepara',
      subtitle: 'Bufet Panjang Khas Jepara Elegan',
      subtitleEn: 'Elegant wide-profile vintage Jepara credenza',
      image: dres6,
    },

    // Cabinet
    {
      id: 'cab-01',
      category: 'cabinet',
      categoryName: 'Lemari Hias',
      categoryNameEn: 'Display Cabinet',
      title: 'Glass Display Teak Cabinet',
      titleId: 'Lemari Pajang Kaca Rangka Jati',
      subtitle: 'Lemari Pajang Kaca Rangka Jati Solid',
      subtitleEn: 'Glass display showcase with solid teak frame',
      image: cab1,
    },
    {
      id: 'cab-02',
      category: 'cabinet',
      categoryName: 'Lemari Pakaian',
      categoryNameEn: 'Wardrobe',
      title: 'Double Door Tall Wardrobe',
      titleId: 'Lemari Pakaian Jati 2 Pintu',
      subtitle: 'Lemari Pakaian Jati 2 Pintu Kokoh',
      subtitleEn: 'Sturdy 2-door tall solid teak wardrobe',
      image: cab3,
    },
    {
      id: 'cab-03',
      category: 'cabinet',
      categoryName: 'Lemari Dapur',
      categoryNameEn: 'Pantry Cabinet',
      title: 'Custom Pantry & Linen Cabinet',
      titleId: 'Lemari Dapur & Linen Serbaguna',
      subtitle: 'Lemari Serbaguna Kriya Jepara',
      subtitleEn: 'Handcrafted Jepara pantry & storage cabinet',
      image: proofCabinetImg,
    },
    {
      id: 'cab-04',
      category: 'cabinet',
      categoryName: 'Lemari Kaca',
      categoryNameEn: 'Vitrine Cabinet',
      title: 'Modern Teak Vitrine Cabinet',
      titleId: 'Lemari Vitrin Kaca Modern Jati',
      subtitle: 'Lemari Pajang Kaca Minimalis Kayu Jati',
      subtitleEn: 'Minimalist modern glass vitrine display cabinet',
      image: cab4,
    },
    {
      id: 'cab-05',
      category: 'cabinet',
      categoryName: 'Lemari Buku',
      categoryNameEn: 'Bookshelf',
      title: 'Open Teak Bookshelf & Cabinet',
      titleId: 'Rak Buku & Lemari Simpan Jati',
      subtitle: 'Lemari Rak Buku & Simpan Kayu Jati',
      subtitleEn: 'Open teak bookshelf with lower storage cabinet',
      image: cab5,
    },
    {
      id: 'cab-06',
      category: 'cabinet',
      categoryName: 'Lemari Pakaian',
      categoryNameEn: 'Master Wardrobe',
      title: 'Three-Door Master Teak Wardrobe',
      titleId: 'Lemari Pakaian Jati Master 3 Pintu',
      subtitle: 'Lemari Pakaian Jati 3 Pintu dengan Laci',
      subtitleEn: '3-door master bedroom teak wardrobe with drawers',
      image: proofWardrobeImg,
    },

    // Water Sink
    {
      id: 'snk-01',
      category: 'stone',
      categoryName: 'Wastafel Batu',
      categoryNameEn: 'River Stone Sink',
      title: 'River Stone Vessel Basin',
      titleId: 'Wastafel Pahatan Batu Sungai Alami',
      subtitle: 'Wastafel Pahatan Batu Sungai Alami',
      subtitleEn: 'Organic natural river stone vessel washbasin',
      image: waterSinkImg1,
    },
    {
      id: 'snk-02',
      category: 'stone',
      categoryName: 'Wastafel Granit',
      categoryNameEn: 'Granite Sink',
      title: 'Chiseled Granite Natural Basin',
      titleId: 'Wastafel Granit Pahat Alami',
      subtitle: 'Wastafel Granit Alami Finishing Halus',
      subtitleEn: 'Hand-chiseled smooth natural granite sink',
      image: waterSinkImg2,
    },
    {
      id: 'snk-03',
      category: 'stone',
      categoryName: 'Vanity Wastafel',
      categoryNameEn: 'Teak Stone Vanity',
      title: 'Floating Teak Vanity & Stone Sink',
      titleId: 'Meja Wastafel Gantung Jati & Batu',
      subtitle: 'Meja Wastafel Gantung Jati & Wastafel Batu',
      subtitleEn: 'Floating solid teak vanity paired with stone sink',
      image: waterSinkImg3,
    },
    {
      id: 'snk-04',
      category: 'stone',
      categoryName: 'Wastafel Marmer',
      categoryNameEn: 'Marble Basin',
      title: 'Hand-Carved Marble Washbasin',
      titleId: 'Wastafel Marmer Ukir Tangan',
      subtitle: 'Wastafel Marmer Alami Ukiran Tangan',
      subtitleEn: 'Artisan hand-carved natural marble basin',
      image: waterSinkImg4,
    },
    {
      id: 'snk-05',
      category: 'stone',
      categoryName: 'Wastafel Batu Alam',
      categoryNameEn: 'River Rock Basin',
      title: 'Oval River Rock Vanity Basin',
      titleId: 'Wastafel Batu Kali Bentuk Oval',
      subtitle: 'Wastafel Batu Kali Bentuk Oval Alami',
      subtitleEn: 'Natural smooth oval river rock washbasin',
      image: waterSinkImg5,
    },
    {
      id: 'snk-06',
      category: 'stone',
      categoryName: 'Wastafel Monolith',
      categoryNameEn: 'Monolith Sink',
      title: 'Rustic Monolith Stone Basin',
      titleId: 'Wastafel Monolit Batu Kasar',
      subtitle: 'Wastafel Monolit Tekstur Kasar Alami',
      subtitleEn: 'Raw rustic textured monolithic stone sink',
      image: waterSinkImg6,
    },
  ];

  const filteredProducts = activeCategory === 'all'
    ? productData
    : productData.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-[68px] md:pt-[76px]">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/55 z-10"></div>
          <ImageWithFallback src={productsHeroImg} alt="Our Collection" className="w-full h-full object-cover" />
        </div>

        {/* Ambient Particles */}
        <Particles
          className="z-15"
          quantity={35}
          color="#ffdcc7"
          size={2}
          staticity={40}
        />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-xs mb-4 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            {t('products.hero.specBadge')}
          </div>

          <h1 className="font-display-lg text-display-lg text-white mb-6">
            <BlurText text={t('products.hero.title')} delay={80} duration={0.8} />
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t('products.hero.desc')}
          </p>
        </div>
      </section>

      {/* Bespoke Notice Section with Magnet CTA */}
      <section className="w-full bg-brand-cream py-16 border-y border-brand-cocoa-brown/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-grid-margin flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-terracotta uppercase font-bold tracking-wider mb-2">
              <span className="material-symbols-outlined text-lg">design_services</span>
              <span>{t('products.notice.engBadge')}</span>
            </div>
            <h2 className="font-headline-md text-2xl md:text-3xl text-brand-dark-earth font-bold mb-2">
              {t('products.notice.title')}
            </h2>
            <p className="font-body-md text-sm md:text-base text-brand-dark-earth/75 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('products.notice.desc1') }} />
          </div>

          <div className="flex-shrink-0">
            <Magnet magnetStrength={0.25}>
              <StarBorder color="#BE733D" speed="3s">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center bg-brand-terracotta text-white px-8 h-12 rounded-full font-mono text-xs font-bold hover:bg-[#d6854b] shadow-lg transition-all duration-300 tracking-wider"
                >
                  <ShinyText text={t('products.notice.button')} color="#ffffff" shineColor="#ffdcc7" speed={3} />
                </Link>
              </StarBorder>
            </Magnet>
          </div>
        </div>
      </section>

      {/* MODERN ANIME.JS DOCUMENTATION LAYOUT (SIDEBAR + EXPRESSIVE CARDS) */}
      <section className="w-full py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-grid-margin">
          
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* LEFT: Anime.js Tree Navigation Sidebar */}
            <DocsNavSidebar
              categories={navCategories}
              activeCategoryId={activeCategory}
              onSelectCategory={setActiveCategory}
              activeSubFilter={activeSubFilter}
              onSelectSubFilter={setActiveSubFilter}
            />

            {/* RIGHT: Main Expressive Cards Grid */}
            <div className="flex-1 w-full">
              
              {/* Category Header Bar (Anime.js Docs Style) */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-brand-dark-earth/10 shadow-sm mb-8 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-brand-terracotta font-bold">{t('products.nav.index')}</span>
                  <span className="text-brand-dark-earth font-bold uppercase tracking-wider">
                    {navCategories.find(c => c.id === activeCategory)?.name || t('products.nav.all')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-brand-cream text-brand-dark-earth/70 font-semibold">
                    {filteredProducts.length} {t('products.nav.items')}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-brand-dark-earth/50">
                  <span>{t('products.nav.sort')}</span>
                </div>
              </div>

              {/* Expressive Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                {filteredProducts.map((product) => (
                  <ExpressiveCard
                    key={product.id}
                    title={isId && (product as any).titleId ? (product as any).titleId : product.title}
                    subtitle={!isId && (product as any).subtitleEn ? (product as any).subtitleEn : product.subtitle}
                    image={product.image}
                    categoryName={!isId && (product as any).categoryNameEn ? (product as any).categoryNameEn : product.categoryName}
                  />
                ))}
              </div>

              {/* Bottom Bespoke Dimension Order Card */}
              <div className="mt-12 p-8 rounded-2xl bg-[#2D241B] text-white border border-[#2D241B]/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-brand-terracotta font-serif font-bold text-base mb-1.5 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">straighten</span>
                    <span>{t('products.customSize.title')}</span>
                  </div>
                  <p className="text-white/80 text-sm font-sans leading-relaxed max-w-2xl">
                    {t('products.customSize.desc')}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="flex-shrink-0 px-6 py-3 rounded-full bg-brand-terracotta text-white text-xs md:text-sm font-medium hover:bg-[#a55825] transition-colors shadow-md"
                >
                  {t('products.customSize.btn')}
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-brand-deep-olive py-28 text-center relative overflow-hidden">
        <Particles
          className="z-5"
          quantity={30}
          color="#d2eabf"
          size={1.6}
        />
        <div className="max-w-3xl mx-auto px-grid-margin flex flex-col items-center relative z-10">
          <h2 className="font-display-lg text-display-lg text-brand-cream mb-6">
            {t('products.cta.title')}
          </h2>
          <p className="font-body-lg text-brand-cream/85 mb-10 max-w-xl leading-relaxed">
            {t('products.cta.desc')}
          </p>
          <Magnet magnetStrength={0.3}>
            <StarBorder color="#ffffff" speed="3s">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-brand-terracotta text-white px-10 h-14 rounded-full font-label-md text-label-md hover:bg-[#d6854b] shadow-2xl shadow-brand-terracotta/50 transition-all duration-300 gap-2"
              >
                <span className="material-symbols-outlined text-xl">forum</span>
                <ShinyText text={t('products.cta.button')} color="#ffffff" shineColor="#ffdcc7" speed={2.5} />
              </Link>
            </StarBorder>
          </Magnet>
        </div>
      </section>
    </div>
  );
}
