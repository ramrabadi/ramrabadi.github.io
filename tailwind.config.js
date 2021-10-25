module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  daisyui: {
    styled: true, // set false if you only need the skeleton of components
    themes: true, // set false if you dont need DaisyUI themes
    rtl: false, // set true if your <body> has dir="rtl"
  },
  plugins: [require("daisyui")],
};
