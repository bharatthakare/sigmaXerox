/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sigma: {
          dark: '#070a12',
          navy: '#0f172a',
          slate: '#1e293b',
          blue: '#2563eb',
          royal: '#3b82f6',
          purple: '#8b5cf6',
          violet: '#a855f7',
          cyan: '#06b6d4',
          accent: '#38bdf8',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.8))' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-md': '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.5), inset 0 1px 2px 0 rgba(255, 255, 255, 0.2)',
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.5)',
      },
    },
  },
  plugins: [],
};
