import React from 'react';
import { useTranslation } from 'react-i18next';

export interface CategoryItem {
  id: string;
  name: string;
  count?: number;
  isNew?: boolean;
  subItems?: {
    id: string;
    name: string;
  }[];
}

interface DocsNavSidebarProps {
  categories: CategoryItem[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  activeSubFilter?: string;
  onSelectSubFilter?: (id: string) => void;
  className?: string;
}

export const DocsNavSidebar: React.FC<DocsNavSidebarProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
  activeSubFilter,
  onSelectSubFilter,
  className = '',
}) => {
  const { t } = useTranslation();

  return (
    <aside className={`w-full lg:w-72 flex-shrink-0 font-sans text-xs ${className}`}>
      <div className="sticky top-28 p-5 rounded-2xl bg-white/90 border border-brand-dark-earth/10 shadow-sm hover:shadow-md transition-shadow backdrop-blur-md">
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-brand-dark-earth/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-terracotta animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-brand-dark-earth uppercase">
              {t('products.sidebar.catalogSpec')}
            </span>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-cream border border-brand-dark-earth/10 text-brand-dark-earth/70">
            v2.6
          </span>
        </div>

        {/* Section 1: Categories Tree */}
        <div className="space-y-4">
          {/* Main Category Header with terracotta cursor */}
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-brand-terracotta uppercase">
            <span>{t('products.sidebar.gettingCraft')}</span>
            <span className="inline-block w-1.5 h-3.5 bg-brand-terracotta animate-pulse ml-0.5 rounded-xs" />
          </div>

          <ul className="space-y-1 pl-2 border-l-2 border-brand-dark-earth/10">
            {categories.map((cat) => {
              const isActive = activeCategoryId === cat.id;

              return (
                <li key={cat.id}>
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className={`w-full text-left py-2 px-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? 'bg-brand-terracotta text-white font-semibold shadow-xs translate-x-1'
                        : 'text-brand-dark-earth/75 hover:text-brand-dark-earth hover:bg-brand-dark-earth/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`text-[10px] ${isActive ? 'text-white' : 'text-brand-dark-earth/30'}`}>
                        {isActive ? '▶' : '•'}
                      </span>
                      <span>{cat.name}</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                      {cat.isNew && (
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                          isActive
                            ? 'bg-white text-brand-terracotta'
                            : 'bg-brand-terracotta text-white'
                        }`}>
                          NEW
                        </span>
                      )}
                      {cat.count !== undefined && (
                        <span className={`text-[10px] ${isActive ? 'text-white/80' : 'text-brand-dark-earth/40'} font-medium`}>
                          {cat.count}
                        </span>
                      )}
                    </span>
                  </button>

                  {/* Sub-items if active */}
                  {isActive && cat.subItems && (
                    <ul className="pl-4 py-1.5 space-y-1 border-l-2 border-brand-terracotta/30 ml-3">
                      {cat.subItems.map((sub) => {
                        const isSubActive = activeSubFilter === sub.id;
                        return (
                          <li key={sub.id}>
                            <button
                              onClick={() => onSelectSubFilter && onSelectSubFilter(sub.id)}
                              className={`text-[11px] py-1.5 px-2.5 rounded-lg w-full text-left transition-colors flex items-center gap-2 ${
                                isSubActive
                                  ? 'text-brand-terracotta font-semibold bg-brand-terracotta/10'
                                  : 'text-brand-dark-earth/70 hover:text-brand-dark-earth hover:bg-brand-dark-earth/5'
                              }`}
                            >
                              <span className="text-brand-dark-earth/30">└</span>
                              <span>{sub.name}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Section 2: Craft Engine Specs Filter */}
          <div className="pt-4 border-t border-brand-dark-earth/10">
            <div className="text-[11px] font-bold tracking-wider text-brand-dark-earth/60 uppercase mb-2">
              {t('products.sidebar.timberStandards')}
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-brand-cream/80 border border-brand-dark-earth/8">
                <span className="text-brand-dark-earth/75 font-medium">{t('products.sidebar.teakGrade')}</span>
                <span className="font-bold text-amber-900 bg-amber-100/70 border border-amber-300/40 px-2 py-0.5 rounded text-[10px]">
                  {t('products.sidebar.heartwoodA')}
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-brand-cream/80 border border-brand-dark-earth/8">
                <span className="text-brand-dark-earth/75 font-medium">{t('products.sidebar.joineryMethod')}</span>
                <span className="font-bold text-emerald-900 bg-emerald-100/70 border border-emerald-300/40 px-2 py-0.5 rounded text-[10px]">
                  {t('products.sidebar.zeroNail')}
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-brand-cream/80 border border-brand-dark-earth/8">
                <span className="text-brand-dark-earth/75 font-medium">{t('products.sidebar.polishAgent')}</span>
                <span className="font-bold text-sky-900 bg-sky-100/70 border border-sky-300/40 px-2 py-0.5 rounded text-[10px]">
                  {t('products.sidebar.organicBeeswax')}
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Bespoke Inquiries */}
          <div className="pt-3 border-t border-brand-dark-earth/10">
            <a
              href="/contact"
              className="block w-full py-2.5 px-3 rounded-xl text-center font-bold text-xs bg-brand-terracotta hover:bg-[#A96231] text-white transition-all shadow-sm shadow-brand-terracotta/20 hover:shadow-md tracking-wider"
            >
              {t('products.sidebar.customOrderSpec')}
            </a>
          </div>

        </div>
      </div>
    </aside>
  );
};
