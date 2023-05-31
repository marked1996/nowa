/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      heading: "clamp(26px, 3vw, 32px)",
      title: "clamp(52px, 6vw, 76px)",
    },

    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        light: "#F7F7F7",
        gray: "#666666",
        dark: "#111111",
        border: "#CFCFCF",
      },
    },
  },
  plugins: [],
};
