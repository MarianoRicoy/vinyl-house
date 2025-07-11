/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["media"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
    extend: {
    colors: {
      primary: {
      '50':  '#f9fafb',
      '100': '#f3f4f6',
      '200': '#e5e7eb',
      '300': '#d1d5db',
      '400': '#9ca3af',
      '500': '#6b7280',
      '600': '#4b5563',
      '700': '#374151',
      '800': '#1f2937',
      '900': '#111827',
      '950': '#0b0f19',
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
    },
      secondary: {
      '50':  '#f5f8fa',
      '100': '#e0e7f1',
      '200': '#c7d4e6',
      '300': '#9db4d3',
      '400': '#6d91bb',
      '500': '#4a6fa6',
      '600': '#39588c',
      '700': '#2f4873',
      '800': '#26375a',
      '900': '#1c2a46',
      '950': '#131c2f',
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
    },
    tertiary: {
          50: '#fdf8f7',
          100: '#fbe8e5',
          200: '#f7d6d1',
          300: '#f2bdb7',
          400: '#e89f9a', 
          500: '#85706b',
          600: '#6d5955',
          700: '#564442',
        },
        DEFAULT: 'hsl(var(--tertiary))',
        foreground: 'hsl(var(--tertiary-foreground))',


      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
      DEFAULT: 'hsl(var(--card))',
      foreground: 'hsl(var(--card-foreground))'
    },
      popover: {
      DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))'
    },
      primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))'
    },
      secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))'
    },
      muted: {
      DEFAULT: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))'
    },
      accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))'
    },
      destructive: {
      DEFAULT: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))'
    },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
      '1': 'hsl(var(--chart-1))',
      '2': 'hsl(var(--chart-2))',
      '3': 'hsl(var(--chart-3))',
      '4': 'hsl(var(--chart-4))',
      '5': 'hsl(var(--chart-5))'
    }
  }
 }
},
  plugins: [require("tailwindcss-animate")],
}

