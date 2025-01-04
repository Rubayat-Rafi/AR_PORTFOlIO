/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#0ef',
        textColor: '#1f242d',
      },
      backgroundColor: {
        bgColor: '#1f242d',
        secondbBgColor: '#323946',
        bgMainColor: '#0ef',
      },
      boxShadow: {
        'custom-glow': '0 0 10px #0ef', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

