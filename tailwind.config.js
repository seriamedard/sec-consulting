/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2811D',
        secondary: '#F2C849',
        'soft-bg-1': '#F2D4C2',
        'soft-bg-2': '#F2D888',
        'text-dark': '#592512',
        'gray-50': '#FAFAFA',
        'gray-100': '#F5F5F5',
        'gray-200': '#EEEEEE',
        'gray-500': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['34px', { lineHeight: '1.05', fontWeight: '700' }],
        'h1': ['52px', { lineHeight: '1.05', fontWeight: '700' }],
        'h2-mobile': ['24px', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['34px', { lineHeight: '1.15', fontWeight: '700' }],
        'h3-mobile': ['18px', { lineHeight: '1.2', fontWeight: '650' }],
        'h3': ['22px', { lineHeight: '1.2', fontWeight: '650' }],
        'body-mobile': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '1.6', fontWeight: '400' }],
        'small-mobile': ['13px', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        'sm': '10px',
        'md': '16px',
        'lg': '24px',
        'pill': '999px',
      },
      boxShadow: {
        'sm': '0 6px 16px rgba(0,0,0,0.08)',
        'md': '0 10px 26px rgba(0,0,0,0.10)',
      },
      spacing: {
        'section-y-mobile': '56px',
        'section-y': '96px',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
      },
      maxWidth: {
        'container': '1200px',
      },
      screens: {
        'xs': '0px',
        'sm': '640px',
        'md': '1024px',
        'lg': '1280px',
      },
    },
  },
  plugins: [],
}
