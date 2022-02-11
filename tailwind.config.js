module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-header": "url('/homeHeader.png')",
        logo: "url('/logoBG.png')",
        rLogo: "url('/rLogo2.png')",
        services: "url('/servicesBG.png')",
        swiper: "url('/swiperBG.png')",
        device: "url('/fullMachine.png')",
      },
      fontFamily: {
        // calibri: ["calibri"],
      },
      colors: {
        primary: {
          100: "#00B8D4",
          200: "#003D63",
          300: "#00253B",
        },
      },
    },
  },
  plugins: [],
};
