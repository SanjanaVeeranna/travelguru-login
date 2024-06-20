import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
       },
  
       colors: {
        blue: "#e6ebfc",
        skin: "#fee2cc",
        red: "#ff5f52",
        blackish: "#1b1b1b",
       },
      
    },
  },
  plugins: [],
};
export default config;
