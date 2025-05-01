/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Mono', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        
        'accent-primary': 'var(--color-accent-primary)',
        'accent-primary-hover': 'var(--color-accent-primary-hover)',
        'accent-secondary': 'var(--color-accent-secondary)',
        'accent-secondary-hover': 'var(--color-accent-secondary-hover)',
        
        'component-primary': 'var(--color-component-primary)',
        'component-primary-hover': 'var(--color-component-primary-hover)',
        'component-secondary': 'var(--color-component-secondary)',
        
        'border': 'var(--color-border)',
        'border-hover': 'var(--color-border-hover)',
      },
    },
  },
  plugins: [],
} 