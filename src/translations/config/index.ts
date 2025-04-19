import initI18n from 'sveltekit-i18n';
import config from '../config/config';

export const { t, locale, locales, loading, loadTranslations } = new initI18n(config);

export const i18n = {
    t,
    locale,
    locales,
    loading,
    loadTranslations
}