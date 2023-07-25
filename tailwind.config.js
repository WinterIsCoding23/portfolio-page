/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
      },
      burgerBar: {
        width: "4em",
        height: "0.5em",
        backgroundColor: "rgb(0, 183, 255)",
        borderRadius: "0.5em",
      },
      menu: {
        width: "50%",
        height: "100vh",
        backgroundColor: "rgb(154, 181,240)",
        position: "absolute",
        top: 0,
        zIndex: -1,
      },
    },
  },
  plugins: [],
};

