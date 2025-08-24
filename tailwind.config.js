/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    'node_modules/daisyui/dist/*.js'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      
    },
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: ["light", "dark", "corporate",
    {
      synthwave: {
        ...require("daisyui/src/theming/themes")["synthwave"],
        "ul": {
          "border-radius": "0.2rem"
        },        
      },
    },
  
  ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

