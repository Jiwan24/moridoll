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
      boxShadow: {
        // Design tokens from design-system/moridoll/MASTER.md (ui-ux-pro-max)
        "clay-sm": "0 1px 2px rgba(0,0,0,0.05)",
        "clay-md": "0 4px 6px rgba(0,0,0,0.1)",
        "clay-lg": "0 10px 15px rgba(0,0,0,0.1)",
        "clay-xl": "0 20px 25px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
