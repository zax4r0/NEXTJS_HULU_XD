module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "header-img": "url('/static/images/logo/header.jpg')",
        "cover1-img": "url('/static/images/cover/cover-1.jpg')",
        "cover2-img": "url('/static/images/cover/cover-2.jpg')",
        "cover3-img": "url('/static/images/cover/cover-3.jpg')",
        "cover4-img": "url('/static/images/cover/cover-4.jpg')",
        "livesport-img": "url('/static/images/logo/live-sports.jpg')",
        "livesport-small": "url('/static/images/logo/live-sports-small.jpg')",
        "network-logo": "url('/static/images/logo/network-logo-bg.jpg')",
      }),
      colors: {
        "hulu-green": "#00ed82",
        "live-section": "#151516",
      },
      width: {
        300: "300px",
        250: "250px",
        270: "270px",
        200: "200px",
      },
      height: {
        180: "180px",
        500: "500px",
        530: "530px",
        800: "800px",
      },
      inset: {
        160: "160px",
        100: "100px",
      },
      maxWidth: {
        550: "550px",
        1100: "1100px",
      },
      screens: {
        "3xl": "2000px",
        "2xl": "1000px",
      },
    },
    dracula: {
      bg: "#282A36",
      currentline: "#44475a",
      red: "#ff5555",
      green: "#50fa7b",
      orange: "#ffb86c",
      pink: "#ff79c6",
      purple: "#bd93f9",
      cyan: "#8be9fd",
      yellow: "	#f1fa8c",
      comment: "#6272a4",
      fg: "#f8f8f2",
      selection: "#44475a",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),

    // ...
  ],
}
