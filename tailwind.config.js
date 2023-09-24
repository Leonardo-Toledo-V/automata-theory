/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)', ...fontFamily.sans],
        interBold: ['var(--font-interBold)', ...fontFamily.sans],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
