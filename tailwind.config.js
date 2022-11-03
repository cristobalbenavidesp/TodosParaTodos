/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        chile1:
          "url('https://images.unsplash.com/photo-1546800273-4d63ff843853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
        estallido:
          "url('https://www.ciperchile.cl/wp-content/uploads/100-fotos-de-la-marcha-mas-grande-de-chile_migrar-photo_20-e1616264841470.jpg')",
        democracia:
          "url('https://img.freepik.com/free-vector/youth-empowerment-abstract-concept-vector-illustration-children-young-people-take-charge-take-action-improve-life-quality-democracy-building-youth-activism-involvement-abstract-metaphor_335657-1925.jpg?w=826&t=st=1667220413~exp=1667221013~hmac=172f82d127879c3e80b129694baa29aa770cc2042af0af1acb84aae3a67d11f5')",
      },
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
  },

  variants: {
    aspectRatio: ["responsive", "hover"],
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
