/** @type {import('tailwindcss').Config} */
import defaultTheme from "./src/app/styles/theme";

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultTheme,
  },
  plugins: [],
};
