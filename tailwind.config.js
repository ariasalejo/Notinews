/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',  // Azul fuerte
        secondary: '#3b82f6',  // Azul claro
        accent: '#f97316',  // Naranja
        background: '#f9fafb',  // Fondo claro
        dark: '#1f2937',  // Gris oscuro
        light: '#ffffff',  // Blanco
        gray: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Roboto', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.2)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      zIndex: {
        '1': 1,
        '10': 10,
        '100': 100,
        'auto': 'auto',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Para formularios más bonitos
    require('@tailwindcss/typography'), // Para mejorar el estilo de los textos
    require('@tailwindcss/aspect-ratio'), // Proporciones de imágenes
    require('@tailwindcss/container-queries'), // Queries de contenedor para diseños más flexibles
  ],
}
