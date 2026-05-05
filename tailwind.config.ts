import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Electric Blue
          navy: '#1E293B',    // Deep Navy
        },
        accent: '#F59E0B',    // Soft Gold
        background: {
          light: '#F8FAFC',
          dark: '#0D1117',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#161B22',
        },
        textPrimary: {
          light: '#111827',
          dark: '#F0F6FC',
        },
        textSecondary: '#6B7280',
        borderC: {
          light: '#E5E7EB',
          dark: '#30363D',
        },
        success: '#16A34A',
        warning: '#D97706',
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
    },
  },
  plugins: [],
};
export default config;
