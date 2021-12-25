import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./en";
import { TRANSLATIONS_VN } from "./vn";
import moment from "moment";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vn: {
        translation: TRANSLATIONS_VN,
      },
      en: {
        translation: TRANSLATIONS_EN,
      },
    },
    interpolation: {
      format: function (value, format, lng) {
        if (value instanceof Date) return moment(value).format(format);
        if (typeof value === "number") return new Intl.NumberFormat().format(value);
        return value;
      }
    }
  });

i18n.changeLanguage("vn");
