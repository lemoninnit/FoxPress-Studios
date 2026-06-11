import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A227',
        'gold-light': '#E8B84B',
        'gold-dark': '#A67C1A',
        black: '#0A0A0A',
        surface: '#1A1A1A',
        surface2: '#111111',
        surface3: '#222222',
        cream: '#F5F5F0',
        muted: '#9A9A90',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-sm': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A227 0%, #E8B84B 50%, #A67C1A 100%)',
        'dark-gradient': 'linear-gradient(to right, #0A0A0A 40%, transparent 100%)',
        'hero-overlay': 'linear-gradient(to right, rgba(10,10,10,0.92) 35%, rgba(10,10,10,0.4) 70%, transparent 100%)',
      },
      boxShadow: {
        'gold': '0 0 24px rgba(201,162,39,0.35)',
        'gold-sm': '0 0 12px rgba(201,162,39,0.2)',
        'card': '0 4px 32px rgba(0,0,0,0.5)',
      },
      borderColor: {
        gold: '#C9A227',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'count-up': 'countUp 1.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
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
} satisfies Config