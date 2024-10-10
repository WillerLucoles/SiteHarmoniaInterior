import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      padding:{
        DEFOULT: '15px',
      }
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px',
    },
    backgroundImage:{
      hero: 'url(/hero/Background.png)',   
    },
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkgray: '#383f41',
        mediumgray: '#50595c',
        lightgray: '#e6e6e6',
      },
    },
  },
  plugins: [],
};
export default config;
