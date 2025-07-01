/** @type {import('tailwindcss').Config} */
export default {
  "content": [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "primary": "#2C3E50",
        "secondary": "#3498DB",
        "accent": "#9B59B6",
        "background": "#F5F5F5",
        "text": "#2C3E50",
        "success": "#2ECC71",
        "warning": "#E74C3C"
      },
      "fontFamily": {
        "sans": [
          "Inter",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  "plugins": [
    "@tailwindcss/typography"
  ]
}