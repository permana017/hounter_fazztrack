/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-house': "url('../public/banner-home.webp')",
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
      
        "primary": "#10B981",
                
        "secondary": "#F000B8",
                
        "accent": "#37CDBE",
                
        "neutral": "#3D4451",
                
        "base-100": "#FFFFFF",
                
        "info": "#3ABFF8",
                
        "success": "#36D399",
                
        "warning": "#FBBD23",
                
        "error": "#F87272",
        },
      },
    ],
  },
}

