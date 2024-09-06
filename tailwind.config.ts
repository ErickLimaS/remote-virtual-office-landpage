import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        font_black: "var(--font-black)",
        yellow_brand: "var(--yellow-brand)",
      },
      container: {
        padding: "1rem",
        center: true,
        screens: {
          sm: '680px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1172px',
          '3xl': '1372px',
        }
      },
      gridTemplateColumns: {
        'footer': '200px minmax(320px, 65%)',
      }
    },
  },
  plugins: [],
};
export default config;
