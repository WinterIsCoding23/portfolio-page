/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: { mdlg: "838 px" },
      colors: {
        headline: "rgb(245, 245, 245)",
        paragraph: "rgb(148, 163, 184)",
      },
      custom: {
        burgerMenu: {
          height: "full",
          width: "4em",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          cursor: "pointer",
        },
        burgerBar: {
          width: "4em",
          height: "0.5em",
          backgroundColor: "rgb(0, 183, 255)",
          borderRadius: "0.5em",
          "&.clicked:nth-child(1)": {
            transform: "rotate(45deg) translate(0.75em, 1.25em)",
            transition: "ease-out 0.5s",
          },
          "&.clicked:nth-child(2)": {
            transform: "scale(0.1)",
            transition: "ease-out 0.5s",
          },
          "&.clicked:nth-child(3)": {
            transform: "rotate(135deg) translate(-0.5em, 1em)",
            transition: "ease-out 0.5s",
          },
          "&.unclicked": {
            transform: "rotate(0) translate(0)",
            transition: "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s",
          },
        },
        menu: {
          width: "50%",
          height: "100vh",
          backgroundColor: "rgb(154, 181, 240)",
          position: "absolute",
          top: 0,
          zIndex: -1,
        },
      },
    },
  },
  plugins: [],
};

