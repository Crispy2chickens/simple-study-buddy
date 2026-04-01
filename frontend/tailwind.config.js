/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F9F9F9',
        foreground: '#222222',
        muted: '#555555',
        teal: '#06D6A0',
        yellow: '#FFD166',
        correct: '#28A745',
        incorrect: '#DC3545',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-6px)' },
          '40%': { transform: 'translateX(6px)' },
          '60%': { transform: 'translateX(-4px)' },
          '80%': { transform: 'translateX(4px)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.96)', opacity: '0' },
          '60%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        shake: 'shake 0.4s ease-in-out',
        'bounce-in': 'bounceIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        blink: 'blink 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

