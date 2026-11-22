import { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { MessageCircle, ArrowLeft } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();
  const isId = (i18n.resolvedLanguage || i18n.language)?.startsWith('id');
  const product = PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Pandawa Furniture`;
    } else {
      document.title = 'Product Not Found | Pandawa Furniture';
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-[100px] pb-24 min-h-[60vh] flex flex-col items-center justify-center bg-brand-cream text-center px-4">
        <h1 className="font-serif text-3xl text-brand-dark-earth mb-4">
          {isId ? 'Produk Tidak Ditemukan' : 'Product Not Found'}
        </h1>
        <p className="text-neutral-500 font-sans mb-8">
          {isId ? 'Karya mebel yang Anda cari tidak tersedia.' : 'The requested furniture piece could not be located.'}
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-terracotta text-white font-sans text-sm hover:bg-[#a55825] transition-colors"
        >
          <ArrowLeft size={16} />
          <span>{isId ? 'Kembali ke Katalog' : 'Return to Catalog'}</span>
        </Link>
      </div>
    );
  }

  const categoryObj = CATEGORIES.find(
    (c) => c.id === product.category || (product.category === 'dressoir' && c.id === 'sideboard')
  );
  const categoryLabel = categoryObj
    ? isId
      ? categoryObj.labelId
      : categoryObj.labelEn
    : isId
    ? 'Produk'
    : 'Products';

  const isSink = product.category === 'sink-stone';

  const waMessage = encodeURIComponent(
    `Halo Pandawa Furniture, saya tertarik dengan produk ${product.name} (ID: ${product.id}). Bisakah minta informasi detail, ketersediaan, dan harganya?`
  );
  const whatsappUrl = `https://wa.me/6285168628421?text=${waMessage}`;

  return (
    <div className="pt-[68px] md:pt-[76px] min-h-screen bg-brand-cream">
      {/* ─── Breadcrumb Strip ──────────────────────────────────── */}
      <div className="w-full bg-[#f5f3ef] border-b border-brand-dark-earth/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-center gap-2 text-[13px] font-sans text-brand-dark-earth/50">
          <Link to="/" className="hover:text-brand-dark-earth transition-colors">
            {isId ? 'Beranda' : 'Home'}
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-brand-dark-earth transition-colors">
            {isId ? 'Produk' : 'Products'}
          </Link>
          <span>/</span>
          <Link
            to={`/products?category=${product.category}`}
            className="hover:text-brand-dark-earth transition-colors"
          >
            {categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-brand-dark-earth/80 font-medium truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </div>
      </div>

      {/* ─── Detail Content ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-neutral-500 hover:text-brand-dark-earth transition-colors mb-8 font-sans"
        >
          <ArrowLeft size={14} />
          <span>{isId ? 'Kembali ke Katalog' : 'Back to Catalog'}</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image Container */}
          <div className="relative aspect-square bg-white rounded-sm overflow-hidden flex items-center justify-center p-6 border border-brand-dark-earth/5 shadow-xs">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
            {product.badge && (
              <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-terracotta text-white text-[11px] font-sans font-semibold flex items-center justify-center shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-brand-terracotta mb-2 font-sans">
              {categoryLabel}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-dark-earth font-normal tracking-tight mb-4">
              {product.name}
            </h1>

            {/* Material & Spec Fields */}
            <div className="space-y-2 mb-6 text-sm font-sans border-b border-brand-dark-earth/10 pb-6">
              <p className="text-neutral-600">
                <span className="font-medium text-brand-dark-earth">
                  {isId ? 'Bahan:' : 'Material:'}
                </span>{' '}
                {isSink
                  ? isId
                    ? 'Batu sungai alami, dipahat dengan tangan'
                    : 'Natural river stone, hand-carved'
                  : product.material ||
                    (isId
                      ? 'Kayu jati reklamasi atau pilihan premium'
                      : 'Reclaimed or premium selected teak')}
              </p>
              <p className="text-neutral-600">
                <span className="font-medium text-brand-dark-earth">
                  {isId ? 'Dimensi (P×L×T):' : 'Dimensions (W×D×H):'}
                </span>{' '}
                {product.dimensions || (isId ? 'Sesuai permintaan' : 'On request')}
              </p>
              <p className="text-neutral-600">
                <span className="font-medium text-brand-dark-earth">
                  {isId ? 'Finishing:' : 'Finish:'}
                </span>{' '}
                {product.finish || (isId ? 'Sesuai permintaan' : 'On request')}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="font-sans text-brand-dark-earth/75 text-sm md:text-base leading-relaxed">
                {product.description ||
                  (isSink
                    ? isId
                      ? 'Wastafel batu sungai alami dipahat dengan tangan dari batuan utuh.'
                      : 'Natural river stone vessel basin hand-carved from solid boulder.'
                    : isId
                    ? 'Kriya kayu jati solid dibuat di Kudus, Jawa Tengah dengan sambungan purus & pasak tradisional serta finishing ramah lingkungan.'
                    : 'Solid teak woodcraft handcrafted in Kudus, Central Java with traditional mortise and tenon joinery and botanical oil finish.')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-sans text-sm font-medium hover:bg-[#20ba59] transition-all shadow-sm"
              >
                <MessageCircle size={18} />
                <span>{isId ? 'Konsultasi via WhatsApp' : 'Inquire on WhatsApp'}</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-dark-earth text-white font-sans text-sm font-medium hover:bg-[#3f3326] transition-all shadow-sm"
              >
                {isId ? 'Pemesanan Khusus' : 'Custom Order Inquiries'}
              </Link>
            </div>

            {/* Category-Specific Bullets */}
            <div className="mt-8 pt-6 border-t border-brand-dark-earth/10 space-y-2.5 text-xs md:text-[13px] text-neutral-600 font-sans">
              {isSink ? (
                <>
                  <p className="flex items-center gap-2">
                    <span className="text-brand-terracotta font-serif font-bold">✓</span>
                    <span>
                      {isId
                        ? 'Batu sungai alami asli, dipahat langsung dengan tangan'
                        : 'Natural river stone, hand-carved from solid boulder'}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-brand-terracotta font-serif font-bold">✓</span>
                    <span>
                      {isId
                        ? 'Tekstur organik alami yang unik di setiap karya'
                        : 'Unique organic texture and natural stone variation'}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-brand-terracotta font-serif font-bold">✓</span>
                    <span>
                      {isId
                        ? 'Dimensi kustom dan pesanan khusus tersedia sesuai permintaan'
                        : 'Custom sizes & bespoke dimensions available upon request'}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-brand-terracotta font-serif font-bold">✓</span>
                    <span>
                      {isId
                        ? 'Pengemasan peti kayu standar ekspor & pengiriman internasional'
                        : 'Safe export-grade crating & international shipping'}
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p className="flex items-center gap-2">
                    <span className="text-brand-terracotta font-serif font-bold">✓</span>
                    <span>
                      {isId
                        ? 'Kayu jati reklamasi atau pilihan premium dari Kudus'
                        : 'Reclaimed or premium selected teak from Kudus'}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-brand-terracotta font-serif font-bold">✓</span>
                    <span>
                      {isId
                        ? 'Dirakit dengan sambungan purus & pasak tradisional'
                        : 'Handcrafted with traditional mortise & tenon joinery'}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-brand-terracotta font-serif font-bold">✓</span>
                    <span>
                      {isId
                        ? 'Dimensi kustom dan pesanan khusus tersedia sesuai permintaan'
                        : 'Custom sizes & bespoke dimensions available upon request'}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-brand-terracotta font-serif font-bold">✓</span>
                    <span>
                      {isId
                        ? 'Pengemasan standar ekspor aman & pengiriman ke seluruh dunia'
                        : 'Safe export-grade packaging & worldwide shipping'}
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Floating WhatsApp Button ──────────────────────────── */}
      <a
        href="https://wa.me/6285168628421"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} strokeWidth={2} />
      </a>
    </div>
  );
}
