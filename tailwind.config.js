/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        't809': { 'max': '809px' },
        't1199': { 'max': '1199px' },
        'b81t1199': { 'min': '810px', 'max': '1199px' },
        "b12t14": { 'min': '1200px', 'max': '1439px' },
      },
      fontFamily: {
        mystenwalteraltebold: ['var(--font-mystenwalteraltebold)'],
        mystenWalteralteregular: ['var(--font-mystenwalteralteregular)'],
        fragmentmono: ['var(--font-fragmentmono)'],
      },
      animation: {
        banner: 'banner 120s ease-in-out infinite',
      },
      keyframes: {
        banner: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
      ,
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
