/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#F8F7F4',
        'brand-text': '#2D3748',
        'brand-primary': '#4FD1C5',
        'brand-secondary': '#63B3ED',
        'brand-accent': '#F6AD55',
      },
      borderRadius: {
        'button': '0.5rem',
      },
    },
  },
  plugins: [],
}

