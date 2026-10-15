import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple:  "#7B4FBF",
        orange:  "#F2603A",
        yellow:  "#FFC933",
        teal:    "#1FB5A8",
        green:   "#5DB84A",
        cream:   "#FFF9F0",
        ink:     "#2B2340",
      },
      fontFamily: {
        heading: ["var(--font-baloo)", "ui-rounded", "system-ui", "sans-serif"],
        body:    ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
