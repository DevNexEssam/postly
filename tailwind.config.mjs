// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#9C46EB",
        primary: "#111032",
        background: "#f9f9fd",
        text: "#111032",
        foreground: "#FFF",
      },
    },
  },
  plugins: [],
};