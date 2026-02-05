import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Clash Display', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'scan-vertical': {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse-slow': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'tunnel-flow': {
          '0%': { transform: 'translate(0, 0) scale(0.1)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(var(--tx), var(--ty)) scale(2.5)', opacity: '0' },
        },
        'cursor-click-btn': {
          '0%': { transform: 'translate(40px, 40px)' },
          '35%': { transform: 'translate(0px, 0px)' },
          '45%': { transform: 'translate(0px, 0px) scale(0.9)' },
          '55%': { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(40px, 40px)' },
        },
        'btn-press-effect': {
          '0%, 40%, 60%, 100%': { transform: 'scale(1)', backgroundColor: 'white' },
          '50%': { transform: 'scale(0.95)', backgroundColor: '#f3f4f6', borderColor: '#2dd4bf' },
        },
        'burst-coin': {
          '0%, 45%': { transform: 'translate(0, 0) scale(0)', opacity: '0' },
          '50%': { opacity: '1', transform: 'translate(var(--bx), var(--by)) scale(1) rotate(var(--br))' },
          '100%': { opacity: '0', transform: 'translate(var(--ex), var(--ey)) scale(0.8) rotate(var(--er))' },
        },
        'slide-up-letter': {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0%)' },
        },
        'marquee-slow': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'vault-logo-1': {
          '0%': { transform: 'rotate(0deg)' },
          '12.5%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'vault-logo-2': {
          '0%, 12.5%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'vault-logo-3': {
          '0%, 25%': { transform: 'rotate(0deg)' },
          '37.5%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scanner': 'scan-vertical 2.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse-slow 25s linear infinite',
        'tunnel': 'tunnel-flow 4s linear infinite',
        'cursor-btn': 'cursor-click-btn 3s ease-in-out infinite',
        'btn-press-visual': 'btn-press-effect 3s ease-in-out infinite',
        'coin-burst': 'burst-coin 3s ease-out infinite',
        'slide-up-letter': 'slide-up-letter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'marquee-slow': 'marquee-slow 15s linear infinite',
        'vault-logo-spin-1': 'vault-logo-1 8s ease-in-out infinite',
        'vault-logo-spin-2': 'vault-logo-2 8s ease-in-out infinite',
        'vault-logo-spin-3': 'vault-logo-3 8s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
