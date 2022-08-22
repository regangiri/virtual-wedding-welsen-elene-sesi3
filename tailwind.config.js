const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C2B59B",
        secondary: "#A97F2D",
        accent: "#C49A6C",
        palewhite: "#fff7E8",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        typography: ["Dancing Script"],
        satisfy: ["Satisfy, cursive"],
        vibes: ["'Great Vibes', cursive"],
        baskerville: [" 'Libre Baskerville', serif"],
      },
    },
    screens: {
      xxs: "281px", // min-width
      sm: "640px",
      md: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
