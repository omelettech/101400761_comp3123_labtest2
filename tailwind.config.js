import daisyui from "daisyui"


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Add DaisyUI or other plugins here if needed
  daisyui: {
    themes: [
      "cyberpunk", // Optional dark theme
        "halloween"
    ],
  },
};