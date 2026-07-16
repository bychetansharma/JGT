/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f8',
          100: '#dce3ef',
          200: '#b9c7df',
          300: '#8ba3c9',
          400: '#5d7aaf',
          500: '#3d5d91',
          600: '#2c4674',
          700: '#1f3359',
          800: '#152544',
          900: '#0d1a33',
          950: '#070f1f',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f5edd8',
          200: '#ebd9b1',
          300: '#dfbf83',
          400: '#d4a856',
          500: '#c89338',
          600: '#b07c2e',
          700: '#8f6028',
          800: '#744d27',
          900: '#614024',
        },
        grey: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9dd',
          300: '#b8b8bf',
          400: '#90909a',
          500: '#6e6e7a',
          600: '#54545f',
          700: '#3f3f48',
          800: '#2a2a31',
          900: '#1a1a1f',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
