import type { Config } from 'sveltekit-i18n';

const config: Config = {
  fallbackLocale: 'en',
  initLocale: 'en',
  loaders: [
    {
      locale: 'en', 
      key: '',
      loader: async () => (await import('../languages/en.json')).default
    },
    {
      locale: 'cs', 
      key: '',
      loader: async () => (await import('../languages/cs.json')).default
    }
  ]
};

export default config;
