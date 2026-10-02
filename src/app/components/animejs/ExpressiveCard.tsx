import React, { useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export interface ExpressiveCardProps {
  id?: string;
  title: string;
  subtitle?: string;
  image: string;
  categoryName?: string;
  inquireHref?: string;
  className?: string;
}

export const ExpressiveCard: React.FC<ExpressiveCardProps> = ({
  title,
  subtitle,
  image,
  categoryName,
  inquireHref = '/contact',
  className = '',
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const cardSubtitle = subtitle || t('products.card.origin', 'Kayu Jati Asli Kudus');
  const cardCategory = categoryName || t('products.card.badge', 'Kriya Jati');

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl bg-white border border-[#2D241B]/10 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-brand-terracotta/40 flex flex-col justify-between ${className}`}
      style={{
        boxShadow: isHovered
          ? '0 16px 36px -8px rgba(190, 115, 61, 0.16)'
          : '0 4px 16px -2px rgba(45, 36, 27, 0.04)',
      }}
    >
      {/* Top Header: Simple Organic Tag */}
      <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-[#2D241B]/6 bg-[#FAF7F2]/60 backdrop-blur-sm z-10 text-xs">
        <span className="text-[11px] font-medium tracking-wide text-brand-dark-earth/70 uppercase">
          {cardCategory}
        </span>
        <span className="text-[11px] tracking-wide text-brand-terracotta font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta" />
          {t('products.card.badge')}
        </span>
      </div>

      {/* Main Furniture Photo Viewport */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#2D241B]/5">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-106"
          style={{ backgroundImage: `url('${image}')` }}
        />

        {/* Soft Vignette on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
        <div className="mb-4">
          <h3 className="font-serif text-lg md:text-xl font-bold text-brand-dark-earth mb-1.5 leading-snug group-hover:text-brand-terracotta transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-brand-dark-earth/70 font-sans leading-relaxed">
            {cardSubtitle}
          </p>
        </div>

        {/* Bottom Action Button */}
        <div className="pt-3 border-t border-[#2D241B]/6 flex items-center justify-between">
          <span className="text-[11px] text-brand-dark-earth/60 font-medium">
            {t('products.card.origin')}
          </span>
          <Link
            to={inquireHref}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-terracotta hover:text-[#a55825] transition-colors group-hover:translate-x-1 duration-300"
          >
            <span>{t('products.card.inquire')}</span>
            <span className="text-sm">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
