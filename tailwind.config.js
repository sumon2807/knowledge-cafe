/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#2bef66",
                
        "secondary": "#319ca5",
                
        "accent": "#eae42e",
                
        "neutral": "#222D3F",
                
        "base-100": "#F4F7FA",
                
        "info": "#22A2E2",
                
        "success": "#22914C",
                
        "warning": "#F4CF62",
                
        "error": "#F2432C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

