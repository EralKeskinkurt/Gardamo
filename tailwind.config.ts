import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E3A8C',       // Deep Blue
        secondary: '#F4A300',     // Warm Yellow
        accent: '#D1E8E2',        // Soft Aqua
        background: '#F5F5F5',    // Light Gray
        text: '#333333',          // Dark Charcoal
      },
    },
  },
  plugins: [],
} satisfies Config;
