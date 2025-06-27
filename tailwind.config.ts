import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B2B2B',
        secondary: '#666666',
        accent: '#8B7B8B',
        'neutral-dark': '#2B2B2B',
        'neutral-light': '#F8F9FA',
        'text-primary': '#2B2B2B',
        'text-secondary': '#666666',
        background: '#634a60',
        'background-alt': '#DDB5C7',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          'to': {
            opacity: '1',
          },
        },
        slideUp: {
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config 