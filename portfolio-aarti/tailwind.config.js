/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
    marquee: "marquee 15s linear infinite",
  },
  keyframes: {
    marquee: {
      "0%": { transform: "translateX(100%)" },
      "100%": { transform: "translateX(-100%)" },
    },
  },
    },
  },
  plugins: [],

  safelist: [
    'backdrop-blur',
    'backdrop-blur-sm',
    'backdrop-blur-md',
    'backdrop-blur-xl',
    'backdrop-blur-2xl',
    {
      pattern: /bg-(white|black)\/(10|20|30|40|50)/,
    },
    {
      pattern: /border-(white|black)\/(10|20|30|40|50)/,
    },
    {
      pattern: /shadow-(white|black)/,
    },
    {
      pattern: /blur-(sm|md|lg|xl|2xl|3xl)/,
    },
    {
      pattern: /opacity-(0|5|10|20|25|30|40|50|60|70|80|90|95|100)/,
    },
    'rounded-3xl',
  ],
}
