import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface-container-high dark:bg-surface-container-lowest w-full pt-section-gap-desktop pb-12">
      <div className="max-w-7xl mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-grid-gutter">
        {/* Brand */}
        <div className="col-span-1 lg:col-span-1">
          <h3 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim mb-2 tracking-wider">PANDAWA</h3>
          <h4 className="text-xs uppercase tracking-widest text-primary dark:text-primary-fixed-dim mb-4 opacity-70">Furniture</h4>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">
            {t('footer.desc')}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim font-bold mb-4 uppercase tracking-wider">{t('footer.quickLinks.title')}</h4>
          <ul className="space-y-3 font-body-md text-body-md">
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="/">{t('nav.home')}</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="/about">{t('nav.about')}</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="/products">{t('nav.products')}</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out" to="/production">{t('nav.production')}</Link></li>
          </ul>
        </div>

        {/* Sustainability */}
        <div>
          <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim font-bold mb-4 uppercase tracking-wider">{t('footer.commitment.title')}</h4>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
            <li>{t('footer.commitment.item1')}</li>
            <li>{t('footer.commitment.item2')}</li>
            <li>{t('footer.commitment.item3')}</li>
            <li>{t('footer.commitment.item4')}</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim font-bold mb-4 uppercase tracking-wider">{t('footer.connect.title')}</h4>
          <div className="space-y-3 font-body-md text-body-md mb-6">
            <a href="https://wa.me/6285168628421" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out">
              <MessageCircle size={18} />
              <span>{t('footer.connect.whatsapp')}</span>
            </a>
            <a href="mailto:alexpandawa@gmail.com" className="flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out">
              <Mail size={18} />
              <span>{t('footer.connect.email')}</span>
            </a>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-in-out">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-grid-margin mt-12 pt-8 border-t border-brand-cocoa-brown/10 text-center text-sm text-on-surface-variant">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
