/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/ArticlesBlock/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: { max: '639px' },
      sm: { min: '640px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
      '2xl': { min: '1536px' },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#5C62F9',
        primaryBlue: '#2563eb',
        mainGreen: '#35C89F',
        mainYellow: '#FFCC00',
        mainRed: '#F97F88',
        red: '#FF0000',
        white: '#FFFFFF',
        black: '#01082D',
        gray80: '#343957',
        gray60: '#676B81',
        gray40: '#999CAB',
        gray20: '#CCCED5',
        gray10: '#E6E6EA',
        gray5: '#F2F3F5',
        cream: '#F9F6F3',
        tertiaryYellow: '#FFEDA6',
        disabled: '#E0E2EC',
        disabledDark: '#A0A3AF',
        yellow: '#FFD940',
        lightPurple: '#F7F7FF',
      },
    },
  },
  plugins: [],
};
