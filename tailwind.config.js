/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vr: {
          primary: '#02d72f',
          darker: '#034d2e',
          light: '#d2fecd',
          dark: '#1b2126',
          green: '#00b11d',
        },
        axion: {
          bg: '#09090b',
          surface1: '#121217',
          surface2: '#18181f',
          accent: '#02d72f',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
};
