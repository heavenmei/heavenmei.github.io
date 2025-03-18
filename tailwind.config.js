const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // "!./src/components/mdx/**/*.{js,ts,jsx,tsx,mdx}", // 排除markdown文件
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        default: {
          foreground: "var(--foreground-color);",
        },
        primary: "var(--theme-color)",
        secondary: "var(--secondary)",
        green: "var(--theme-green)",
        red: "var(--theme-red)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
