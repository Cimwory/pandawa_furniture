import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface-container-high dark:bg-surface-container-lowest w-full pt-section-gap-desktop pb-12 border-t border-brand-dark-earth/10">
      <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
        {/* Brand */}
        <div className="col-span-1 lg:col-span-1">
          <h3 className="font-serif text-2xl text-primary dark:text-primary-fixed-dim mb-1 tracking-wider font-normal">PANDAWA</h3>
          <h4 className="text-[11px] uppercase tracking-widest text-primary dark:text-primary-fixed-dim mb-4 opacity-70 font-sans font-semibold">Furniture</h4>
          <p className="font-sans text-sm text-on-surface-variant max-w-sm mb-6 leading-relaxed">
            {t('footer.desc')}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-xs text-primary dark:text-primary-fixed-dim font-bold mb-4 uppercase tracking-wider">{t('footer.quickLinks.title')}</h4>
          <ul className="space-y-3 font-sans text-sm">
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="/">{t('nav.home')}</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="/about">{t('nav.about')}</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="/products">{t('nav.products')}</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="/production">{t('nav.production')}</Link></li>
          </ul>
        </div>

        {/* Commitment */}
        <div>
          <h4 className="font-sans text-xs text-primary dark:text-primary-fixed-dim font-bold mb-4 uppercase tracking-wider">{t('footer.commitment.title')}</h4>
          <ul className="space-y-3 font-sans text-sm text-on-surface-variant">
            <li>{t('footer.commitment.item1')}</li>
            <li>{t('footer.commitment.item2')}</li>
            <li>{t('footer.commitment.item3')}</li>
            <li>{t('footer.commitment.item4')}</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-xs text-primary dark:text-primary-fixed-dim font-bold mb-4 uppercase tracking-wider">{t('footer.connect.title')}</h4>
          <div className="space-y-3 font-sans text-sm mb-6">
            <a href="https://wa.me/6285168628421" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out">
              <MessageCircle size={16} />
              <span>WhatsApp: +62 851-6862-8421</span>
            </a>
            <a href="mailto:Yusavitocompanies@gmail.com" className="flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out">
              <Mail size={16} />
              <span>Yusavitocompanies@gmail.com</span>
            </a>
            <div className="flex items-start space-x-2 text-on-surface-variant text-xs mt-3 leading-relaxed">
              <MapPin size={16} className="flex-shrink-0 mt-0.5 text-brand-terracotta" />
              <span>Jln. Lingkar Selatan Kudus–Jepara Km 3, Desa Pasuruhan Kidul, Kudus</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-grid-margin mt-12 pt-8 border-t border-brand-cocoa-brown/10 text-center text-xs text-on-surface-variant font-sans">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
