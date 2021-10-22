import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arabic from './locales/ar/translations.json';
import english from './locales/en/translations.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    ar: {
      translations: arabic
    },
    en: {
      translations: english
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'ar'];
export const languages = ['en', 'ar'];
export default i18n;
