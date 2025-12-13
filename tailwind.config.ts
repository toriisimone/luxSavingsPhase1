import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './app/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d3557',
        accent: '#f4a261'
      }
    }
  },
  plugins: []
};

export default config;
