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
        primary: "#0096DB",
        greyskiy: "#CEDAE0",
        "less-white" : "#F7F7F7"
      },
    },
  },
  plugins: [],
};
export default config;
