module.exports = {
  mode: "jit",
  content: ["./components/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
