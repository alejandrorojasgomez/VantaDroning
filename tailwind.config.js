/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Almarai', 'system-ui', 'sans-serif'],
        body: ['Almarai', 'system-ui', 'sans-serif'],
        serif: ["'Instrument Serif'", 'serif'],
      },
      colors: {
        vanta: {
          accent: '#3b82f6',
          sky: '#60a5fa',
          glow: '#2563eb',
          deep: '#0a1730',
          ink: '#050a16',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(-14px) rotate(-1.5deg)' },
          '50%': { transform: 'translateY(26px) rotate(1.5deg)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        floaty: 'floaty 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
