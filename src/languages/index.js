import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { viNamespace, enNamespace } from './config';

i18next.on('languageChanged', function (lng) {
    localStorage.setItem('lng', lng);
});

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: process.env.NODE_ENV === 'production' ? false : true,
        resources: {
            [enNamespace]: {
                translation: {
                    welcome: 'Grootbasket'
                }
            },
            [viNamespace]: {
                translation: {
                    welcome: 'جروتباسكت'
                }
            }
        },
        fallbackLng: 'en',
        whitelist: ['en', 'vi'], //Array of abbrevations of the languages
        interpolation: {
            escapeValue: false
        },
        ns: ['translation'], //Names of the translation files
        detection: {
            order: ['localStorage'],
            lookupLocalStorage: 'lng',
            checkWhitelist: true
        },
        saveMissing: true,
        saveMissingTo: 'all'
    });

export default i18next;
