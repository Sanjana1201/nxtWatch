import i18next from "i18next";
import {initReactI18next} from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import translations from './locales/translations.json'

i18next
.use(initReactI18next)
.use(languageDetector)
.init({
    debug: true,
    fallbackLng: 'en',
    resources: {
        ...translations
    }
})