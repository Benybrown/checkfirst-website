import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        secondary: '#3b82f6',
        accent: '#06b6d4',
        'neon-purple': '#a855f7',
        'neon-cyan': '#06b6d4',
      },
      animation: {
        blob: 'blob 7s infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
