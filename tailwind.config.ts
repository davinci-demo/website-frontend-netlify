import type { Config } from 'tailwindcss';



const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        '3xl':'1800px'
      },
      colors: {
        primary: {
          '1/2': 'var(--primaryColor50)', 
          '1': 'var(--primaryColor)'
        },
        primaryMid: 'var(--primaryMid)',
        primaryDark: 'var(--primaryDark)',
        primaryNeutral: 'var(--primaryNuetral)'
      },
      fontFamily: {
        cabin: ['var(--font-cabin)'],
        julius: ['var(--font-julius)'],
        vietnam: ['var(--font-vietnam)'],
      },
      animation: {
        chromaSpotPulse: "chromaSpotPulse 14s linear infinite",
      },
      keyframes: {
        chromaSpotPulse: {
          "0%": {
            transform: "scale(1.9, 0.9)",
            backgroundColor: "hsl(0, 70%, 50%)"
          },
          "50%": {
            transform: "scale(2.1, 1)",
            backgroundColor: "hsl(240, 70%, 50%)"
          },
          "100%": {
            transform: "scale(1.9, 0.9)",
            backgroundColor: "hsl(0, 70%, 50%)"
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
