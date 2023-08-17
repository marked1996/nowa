/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      ultraxs: "12px",
      xs: "14px",
      base: "16px",
      lg: "clamp(16px, 2.5vw, 18px)",
      xl: "clamp(18px, 2.75vw ,20px)",
      heading: "clamp(26px, 3vw, 32px)",
      title: "clamp(52px, 6vw, 76px)",
    },

    extend: {
      //add to every section !! not to the page because of marquee
      spacing: {
        section: "16px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        light: "#F7F7F7",
        gray: "#666666",
        hover: "#B1B1B1",
        dark: "#111111",
        border: "#CFCFCF",
        border_hero: "#E6E6E6",
        // orange: "#FF6900",
        metalic_orange: "#FF6900",
      },
    },
  },
  plugins: [],
};
