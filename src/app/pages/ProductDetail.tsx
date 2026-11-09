import { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { MessageCircle, ArrowLeft } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
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
        <h1 className="font-serif text-3xl text-brand-dark-earth mb-4">Product Not Found</h1>
        <p className="text-neutral-500 font-sans mb-8">The requested furniture piece could not be located.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-terracotta text-white font-sans text-sm hover:bg-[#a55825] transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Return to Catalog</span>
        </Link>
      </div>
    );
  }

  const categoryObj = CATEGORIES.find((c) => c.id === product.category);
  const categoryLabel = categoryObj?.label || 'Products';

  const waMessage = encodeURIComponent(
    `Halo Pandawa Furniture, saya tertarik dengan produk ${product.name} (ID: ${product.id}). Bisakah minta informasi detail, ketersediaan, dan harganya?`
  );
  const whatsappUrl = `https://wa.me/6281291566470?text=${waMessage}`;

  return (
    <div className="pt-[68px] md:pt-[76px] min-h-screen bg-brand-cream">
      {/* ─── Breadcrumb Strip ──────────────────────────────────── */}
      <div className="w-full bg-[#f5f3ef] border-b border-brand-dark-earth/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-center gap-2 text-[13px] font-sans text-brand-dark-earth/50">
          <Link to="/" className="hover:text-brand-dark-earth transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-brand-dark-earth transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-brand-dark-earth transition-colors">
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
          <span>Back to Catalog</span>
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

            {product.material && (
              <p className="text-sm font-sans text-neutral-500 mb-6">
                <span className="font-medium text-brand-dark-earth">Material:</span> {product.material}
              </p>
            )}

            <div className="border-t border-b border-brand-dark-earth/10 py-6 mb-8">
              <p className="font-sans text-brand-dark-earth/75 text-sm md:text-base leading-relaxed">
                {product.description || 'Solid teak woodcraft hand-carved in Kudus, Central Java with zero-nail traditional joinery and natural eco-friendly finish.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-sans text-sm font-medium hover:bg-[#20ba59] transition-all shadow-sm"
              >
                <MessageCircle size={18} />
                <span>Inquire on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-dark-earth text-white font-sans text-sm font-medium hover:bg-[#3f3326] transition-all shadow-sm"
              >
                Custom Order Inquiries
              </Link>
            </div>

            <div className="mt-10 pt-6 border-t border-brand-dark-earth/8 space-y-2 text-xs text-neutral-500 font-sans">
              <p>✓ 100% Solid Heartwood Teak from Kudus</p>
              <p>✓ Custom sizes & bespoke dimensions available upon request</p>
              <p>✓ Safe nationwide packaging & worldwide shipping</p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Floating WhatsApp Button ──────────────────────────── */}
      <a
        href="https://wa.me/6281291566470"
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
