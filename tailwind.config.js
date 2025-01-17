/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Albert Sans', 'sans-serif'],
      },
      fontSize: {
        // Headings
        'h1': ['3.875rem', { lineHeight: '120%', fontWeight: '700' }], // 62px
        'h2': ['3rem', { lineHeight: '100%', fontWeight: '700' }],     // 48px
        'h3': ['2.5rem', { lineHeight: '100%', fontWeight: '700' }],   // 40px
        'h4': ['2rem', { lineHeight: '100%', fontWeight: '700' }],     // 32px
        'h5': ['1.5rem', { lineHeight: '100%', fontWeight: '700' }],   // 24px
        'h6': ['1.125rem', { lineHeight: '100%', fontWeight: '700' }], // 18px
        
        // Body text
        'xl': ['1.375rem', { lineHeight: '150%' }],   // 22px
        'lg': ['1.25rem', { lineHeight: '150%' }],    // 20px
        'base': ['1.125rem', { lineHeight: '150%' }], // 18px
        'regular': ['1rem', { lineHeight: '150%' }],  // 16px
        'sm': ['0.875rem', { lineHeight: '150%' }],   // 14px
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: '#151545', // Primary Blue
          hover: '#151545e6', // 90% opacity
          active: '#151545cc', // 80% opacity
          disabled: '#15154580', // 50% opacity
        },
        secondary: {
          DEFAULT: '#E0AD4F', // Gold
          hover: '#E0AD4Fe6',
          active: '#E0AD4Fcc',
          disabled: '#E0AD4F80',
        },
        // Neutral Colors
        neutral: {
          white: '#FFFFFF',
          stroke: '#E7E9EB', // Grey/Stroke
          background: '#F4F4F5', // Grey Background
        },
        // Text Colors
        text: {
          primary: '#151545', // Primary Text
          secondary: '#221F20', // Secondary Text
          alt: '#FFFFFF', // Alt Button Text
        },
        // System Colors
        system: {
          success: {
            DEFAULT: '#008FFF',
            light: '#008FFF1f', // 12% opacity
          },
          error: {
            DEFAULT: '#db2828',
            light: '#db28281f',
          },
          warning: {
            DEFAULT: '#FFC107',
            light: '#FFC1071f',
          },
        },
      },
    },
  },
  plugins: [],
};