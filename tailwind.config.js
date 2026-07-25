/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgBase: 'var(--bg-base)',
        bgPanel: 'var(--bg-panel)',
        accentMagenta: 'var(--accent-magenta)',
        accentCyan: 'var(--accent-cyan)',
        accentViolet: 'var(--accent-violet)',
        accentGreen: 'var(--accent-green)',
        textPrimary: 'var(--text-primary)',
        textHeading: 'var(--text-heading)',
        textMuted: 'var(--text-muted)',
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-multiverse': 'linear-gradient(135deg, #FF2E88 0%, #7B2FFF 50%, #00E5FF 100%)',
        'gradient-cyan-magenta': 'linear-gradient(135deg, #00E5FF 0%, #FF2E88 100%)',
        'halftone-dots': 'radial-gradient(rgba(123, 47, 255, 0.15) 1px, transparent 1px)',
      },
      backgroundSize: {
        'halftone': '16px 16px',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s infinite ease-in-out',
        'gradient-sweep': 'gradientSweep 6s infinite linear',
        'scanline': 'scanlineFlicker 0.25s ease-in-out',
        'float': 'floatAnim 4s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 46, 136, 0.3), 0 0 30px rgba(0, 229, 255, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(255, 46, 136, 0.6), 0 0 50px rgba(0, 229, 255, 0.4)' },
        },
        gradientSweep: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scanlineFlicker: {
          '0%': { opacity: 0.2, transform: 'translateY(-100%)' },
          '50%': { opacity: 0.9, transform: 'translateY(0%)' },
          '100%': { opacity: 0, transform: 'translateY(100%)' },
        },
        floatAnim: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
    },
  },
  plugins: [],
};
