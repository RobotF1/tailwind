/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 50s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{transform: "translatex(0)"},
          to:{transform: "translatex(-100%)"},
        },
      },
      spacing:{
        '42':'170',
        '60':'600px',
      },
    },
  },
  plugins: [],
};

