import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import idTranslations from './locales/id/translation.json';

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('pandawa_language') || 'id' : 'id';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      id: {
        translation: idTranslations,
      },
    },
    lng: savedLang,
    fallbackLng: 'id',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
