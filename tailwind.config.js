module.exports = {
  mode: "jit",
  content: ["./components/*.jsx"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
