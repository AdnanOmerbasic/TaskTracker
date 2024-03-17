/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        customForms: "465px",
        customFormsButton: "100px",
        customDisplayList: "400px",
      },
      height: {
        customForms: "40px",
        customFormsButton: "40px",
      },
      minHeight: {
        custom: "250px",
        customDisplayList: "40px",
      },
      minWidth: {
        custom: "700px",
      },
      colors: {
        "gradiant-1": "#FFECD2",
        "gradiant-2": "#FCB69F",
        "custom-border": "#BEFF6A",
      },
      boxShadow: {
        "custom-shadow": "4px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        "custom-blur": "blur(10px)",
      },
    },
  },
  plugins: [],
};
