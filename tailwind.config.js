/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        1440: "1440px",
      },
      colors: {
        "talk-500": "#00ffff",
        "talk-10": "#00ffff10",
        "portoHonra-500": "#72ef4a",
        "portoHonra-10": "#72ef4a10",
        "podcast-500": "#0071bc",
        "podcast-10": "#0071bc10",
        "porto-500": "#000F9F",
        "porto-10": "#000F9F10",
        "tera-500": "#9274b4",
        "tera-10": "#9274b410",
        "investPorto-500": "#20a5ef",
        "investPorto-10": "#20a5ef10",
        "leme-500": "#F6C446",
        "leme-10": "#F6C44610",
        "visit-500": "#00509d",
        "visit-10": "#00509d10",
        "scaleup-500": "#e21f26",
        "scaleup-10": "#e21f2610",
        
      },
      fontFamily: {
        custom: ["AtypDisplay", "sans-serif"],
        customBold: ["AtypDisplay-Bold", "sans-serif"],
        customItalic: ["AtypDisplay-BoldItalic", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
