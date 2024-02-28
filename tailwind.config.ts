/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary-rgb) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground-rgb) / <alpha-value>)",
        },
        secondary: "rgb(var(--secondary-rgb) / <alpha-value>)",
        tertiary: "rgb(var(--tertiary-rgb) / <alpha-value>)",
        quaternary: "rgb(var(--quaternary-rgb) / <alpha-value>)",
      },
      fontFamily: {
        primary: ["var(--primary-font)", ...fontFamily.sans],
        heading: ["var(--heading-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
