import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ssm: "414px",
      },
      fontSize: {
        ssm: "12px",
      },
      colors: {
        white: "#FFFFFF",
        gray: "#777777",
        black: "#303841",
        yellow: "#F6C90E",
      },
      borderRadius: {
        "4xl": "1.75rem",
      },
      rotate: {
        30: "30deg",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          ssm: "414px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s forwards",
      fadeOut: "fadeOut 0.5s ease-in-out",
      appearFromRight: "appearFromRight 1s forwards",
      zoomIn: "zoomIn 1.5s ease-in-out",
      zoomOut: "zoomOut 0.75s forwards",
      upDown: "upDown 30s infinite",
    },
    keyframes: {
      fadeIn: {
        "0%": { visibility: "hidden", opacity: 0 },
        "100%": { visibility: "visible", opacity: 1 },
      },
      fadeOut: {
        "100%": { opacity: 1, visibility: "visible" },
        "0%": { opacity: 0, visibility: "hidden" },
      },
      appearFromRight: {
        "0%": { transform: "translateX(24px)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      zoomIn: {
        "0%": { transform: "scale(0)", visibility: "hidden" },
        "100%": { transform: "scale(1)", visibility: "visible" },
      },
      zoomOut: {
        "0%": { transform: "scale(1)", visibility: "visible" },
        "100%": { transform: "scale(0)", visibility: "hidden" },
      },
      upDown: {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(30px)" },
        "100%": { transform: "translateY(0)" },
        "75%": { transform: "translateY(5px)" },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-ease": (value) => ({
            animationTimingFunction: value,
          }),
        },
        { values: theme("transitionTimingFunction") }
      );
    }),
    typography,
    // ...
  ],
};
