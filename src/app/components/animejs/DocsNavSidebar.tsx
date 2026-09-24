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
    <aside className={`w-full lg:w-72 flex-shrink-0 font-mono text-xs ${className}`}>
      <div className="sticky top-28 p-5 rounded-2xl bg-[#1E1E1E] text-[#D3CEC8] border border-white/10 shadow-2xl backdrop-blur-md">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-white uppercase">
              {t('products.sidebar.catalogSpec')}
            </span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">
            v2.6
          </span>
        </div>

        {/* Section 1: Categories Tree */}
        <div className="space-y-4">
          {/* Main Category Header with Anime.js style red highlighted cursor */}
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#FF4444] uppercase">
            <span>{t('products.sidebar.gettingCraft')}</span>
            {/* Anime.js blinking block cursor */}
            <span className="inline-block w-2 h-3.5 bg-white/80 animate-pulse ml-0.5" />
          </div>

          <ul className="space-y-1 pl-2 border-l border-white/15">
            {categories.map((cat) => {
              const isActive = activeCategoryId === cat.id;

              return (
                <li key={cat.id}>
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className={`w-full text-left py-1.5 px-2.5 rounded transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? 'bg-white/15 text-white font-bold translate-x-1'
                        : 'text-[#D3CEC8]/75 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`text-[10px] ${isActive ? 'text-[#FF4444]' : 'text-white/30'}`}>
                        {isActive ? '▶' : '•'}
                      </span>
                      <span>{cat.name}</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                      {cat.isNew && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#FF4444] text-white">
                          NEW
                        </span>
                      )}
                      {cat.count !== undefined && (
                        <span className="text-[10px] text-white/40">
                          {cat.count}
                        </span>
                      )}
                    </span>
                  </button>

                  {/* Sub-items if active */}
                  {isActive && cat.subItems && (
                    <ul className="pl-5 py-1 space-y-1 border-l border-white/10 ml-2">
                      {cat.subItems.map((sub) => {
                        const isSubActive = activeSubFilter === sub.id;
                        return (
                          <li key={sub.id}>
                            <button
                              onClick={() => onSelectSubFilter && onSelectSubFilter(sub.id)}
                              className={`text-[11px] py-1 px-2 rounded w-full text-left transition-colors flex items-center gap-2 ${
                                isSubActive
                                  ? 'text-brand-terracotta font-semibold'
                                  : 'text-white/60 hover:text-white'
                              }`}
                            >
                              <span className="text-white/30">└</span>
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
          <div className="pt-4 border-t border-white/10">
            <div className="text-[11px] font-bold tracking-wider text-white/60 uppercase mb-2">
              {t('products.sidebar.timberStandards')}
            </div>
            <div className="space-y-1.5 text-[11px] text-white/70">
              <div className="flex items-center justify-between py-1 px-2 rounded bg-white/5">
                <span>{t('products.sidebar.teakGrade')}</span>
                <span className="font-bold text-amber-400">{t('products.sidebar.heartwoodA')}</span>
              </div>
              <div className="flex items-center justify-between py-1 px-2 rounded bg-white/5">
                <span>{t('products.sidebar.joineryMethod')}</span>
                <span className="font-bold text-emerald-400">{t('products.sidebar.zeroNail')}</span>
              </div>
              <div className="flex items-center justify-between py-1 px-2 rounded bg-white/5">
                <span>{t('products.sidebar.polishAgent')}</span>
                <span className="font-bold text-blue-400">{t('products.sidebar.organicBeeswax')}</span>
              </div>
            </div>
          </div>

          {/* Section 3: Bespoke Inquiries */}
          <div className="pt-3 border-t border-white/10">
            <a
              href="/contact"
              className="block w-full py-2.5 px-3 rounded-lg text-center font-bold bg-[#FF4444] hover:bg-[#ff2b2b] text-white transition-colors shadow-lg tracking-wider"
            >
              {t('products.sidebar.customOrderSpec')}
            </a>
          </div>

        </div>
      </div>
    </aside>
  );
};
