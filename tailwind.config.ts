import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        taxiMeter: "url('/img/taxi_car.jpg')",
      },
      colors: {
        primary: "#D51B53",
        textDarkColor: "#353546",
        textLightColor: "#858597",
        backgroundColor: "#F7F8FC",
        borderColorLight: "#B8B8D2",
      },
    },
  },
  plugins: [],
};
export default config;
