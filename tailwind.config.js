/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0B1E3D',   
          900: '#163863',
          800: '#163863',
          700: '#243a5a',
          600: '#2D6E4F', 
        },
        lime: {
          400: '#4CD3E8',
          500: '#22B8D6',
          600: '#1f9acb', 
        },
        cream: {
          50: '#F5F8FA',
          100: '#EAF0F4',
        },
        ink: {
          900: '#12181F',
          700: '#3A3A34',
          500: '#6B6B62',
        },
      },
      fontFamily: {
        display: ['"Anton"', '"Arial Narrow"', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(18, 58, 41, 0.25)',
        card: '0 4px 24px rgba(22, 22, 19, 0.06)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        growLine: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        growLine: 'growLine 1.2s ease-out both',
      },
    },
  },
  plugins: [],
}
