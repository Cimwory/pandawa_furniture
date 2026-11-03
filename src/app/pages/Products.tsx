import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';

const PRODUCTS_PER_PAGE = 12;
type SortOption = 'newest' | 'name-az';

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(categoryParam);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Sync state with URL search param
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  // Determine active category label
  const activeTitle = useMemo(() => {
    if (activeCategory === 'all') return 'All Products';
    const found = CATEGORIES.find((c) => c.id === activeCategory);
    return found ? found.label : 'All Products';
  }, [activeCategory]);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return PRODUCTS;
    }
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'name-az') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [filteredProducts, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );
  const showingStart = sortedProducts.length === 0 ? 0 : (currentPage - 1) * PRODUCTS_PER_PAGE + 1;
  const showingEnd = Math.min(currentPage * PRODUCTS_PER_PAGE, sortedProducts.length);

  // Category selection handler
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
    setMobileDrawerOpen(false);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  // Plain text Category List
  const CategoryNavList = () => (
    <ul className="space-y-1">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;

        return (
          <li key={cat.id} className="py-0.5">
            <button
              type="button"
              onClick={() => handleSelectCategory(cat.id)}
              className={`text-left py-1 text-[15px] font-sans transition-colors duration-150 w-full ${
                isActive
                  ? 'text-brand-dark-earth font-semibold'
                  : 'text-neutral-500 hover:text-brand-dark-earth'
              }`}
            >
              {cat.label}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="pt-[68px] md:pt-[76px] min-h-screen bg-brand-cream">
      {/* ─── 1. Simple breadcrumb on a light grey strip, centered ─ */}
      <div className="w-full bg-[#f4f4f4] border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-2 text-[13px] font-sans text-neutral-500">
          <Link to="/" className="hover:text-brand-dark-earth transition-colors">
            Home
          </Link>
          <span>/</span>
          <button
            type="button"
            onClick={() => handleSelectCategory('all')}
            className="hover:text-brand-dark-earth transition-colors"
          >
            Products
          </button>
          {activeCategory !== 'all' && (
            <>
              <span>/</span>
              <span className="text-brand-dark-earth font-medium">{activeTitle}</span>
            </>
          )}
        </div>
      </div>

      {/* ─── Main Content Container ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
        
        {/* MOBILE: "Categories" dropdown drawer above grid */}
        <div className="lg:hidden mb-8">
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="w-full flex items-center justify-between py-3 px-4 bg-white/90 border border-neutral-200 rounded-md text-sm font-sans text-brand-dark-earth shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                Categories:
              </span>
              <span className="font-medium text-brand-dark-earth">{activeTitle}</span>
            </div>
            <ChevronDown
              size={16}
              className={`text-neutral-500 transition-transform duration-200 ${
                mobileDrawerOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {mobileDrawerOpen && (
            <div className="mt-2 p-4 bg-white border border-neutral-200 rounded-md shadow-xs">
              <CategoryNavList />
            </div>
          )}
        </div>

        {/* Desktop Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-0">
          
          {/* ─── LEFT SIDEBAR (~25% width) ───────────────────────── */}
          <aside className="hidden lg:block w-[25%] flex-shrink-0 pr-10 border-r border-neutral-200/80">
            <div className="sticky top-28">
              <h3 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-neutral-400 font-sans mb-6">
                CATEGORIES
              </h3>
              <CategoryNavList />
            </div>
          </aside>

          {/* ─── RIGHT CONTENT (~75% width) ──────────────────────── */}
          <main className="flex-1 lg:pl-12">
            {/* a. Large page title = active category name (thin, elegant serif font) */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-brand-dark-earth tracking-tight mb-8">
              {activeTitle}
            </h1>

            {/* b. One row: "Showing 1–[X] of [Total] products" on left, sort dropdown on right */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-200/60">
              <p className="text-[13px] md:text-sm font-sans text-neutral-500">
                Showing {showingStart}–{showingEnd} of {sortedProducts.length} products
              </p>

              <div className="flex items-center gap-2">
                <label htmlFor="product-sort" className="sr-only">
                  Sort products
                </label>
                <select
                  id="product-sort"
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as SortOption);
                    setCurrentPage(1);
                  }}
                  className="text-[13px] font-sans text-neutral-600 bg-transparent border border-neutral-300 rounded px-3 py-1.5 focus:outline-none focus:border-brand-dark-earth cursor-pointer"
                >
                  <option value="newest">Sort by newest</option>
                  <option value="name-az">Name A–Z</option>
                </select>
              </div>
            </div>

            {/* c. Product grid: 3 columns (2 on mobile), generous spacing, NO card borders */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
                {paginatedProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="group block"
                  >
                    {/* Square Image container with white/transparent background */}
                    <div className="relative aspect-square w-full bg-white overflow-hidden mb-3.5 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      {/* Optional small round badge on the top-right in teak brown */}
                      {product.badge && (
                        <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand-terracotta text-white text-[11px] font-sans font-medium flex items-center justify-center shadow-xs">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Product name below image (one line, medium weight, turns teak brown on hover) */}
                    <h2 className="text-[14px] md:text-[15px] font-sans font-medium text-brand-dark-earth truncate transition-colors duration-200 group-hover:text-brand-terracotta">
                      {product.name}
                    </h2>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <p className="text-neutral-400 font-sans text-sm">
                  No products found in this category.
                </p>
              </div>
            )}

            {/* d. Pagination at the bottom (12 products per page) */}
            {totalPages > 1 && (
              <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-16 pt-8 border-t border-neutral-200/60">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 text-xs font-sans text-neutral-500 hover:text-brand-dark-earth disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-full text-xs font-sans transition-all duration-150 ${
                      currentPage === page
                        ? 'bg-brand-dark-earth text-white font-medium'
                        : 'text-neutral-600 hover:bg-neutral-200/60'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 text-xs font-sans text-neutral-500 hover:text-brand-dark-earth disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
              </nav>
            )}
          </main>
        </div>
      </div>

      {/* ─── 3. Floating WhatsApp button at the bottom-right corner ─ */}
      <a
        href="https://wa.me/6281291566470"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        aria-label="Chat with Pandawa Furniture on WhatsApp"
      >
        <MessageCircle size={26} strokeWidth={2} />
      </a>
    </div>
  );
}
