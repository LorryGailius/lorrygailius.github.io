/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        darkslate: {
          50: "#3D3D3D",
          100: "#2C2C2C",
          200: "#262626",
          300: "#202020",
          400: "#1A1A1A",
          500: "#171717",
          600: "#141414",
          700: "#111111",
          800: "#0E0E0E",
          900: "#0B0B0B",
        },
        primary: {
          100: "#F9CDD3",
          200: "#F3A3AA",
          300: "#EC7981",
          400: "#E64F59",
          500: "#E63946",
          600: "#CF2F3D",
          700: "#B82534",
          800: "#A01B2B",
          900: "#891321",
        },
        vu: {
          main: "#78003F",
        },
        // Neobrutalism color palette
        neon: {
          yellow: "#FFFF00",
          pink: "#FF69B4",
          green: "#00FF00",
          blue: "#00BFFF",
          orange: "#FF4500",
          purple: "#8A2BE2",
        },
      },
      screens: {
        tall: { raw: "(min-height: 825px)" },
        xs: {raw: "(min-width: 480px)"}, // Extra small screens
        // => @media (min-height: 800px) { ... }
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000',
        'brutal-lg': '6px 6px 0px 0px #000',
        'brutal-xl': '8px 8px 0px 0px #000',
      },
    },
  },
  plugins: [],
};
