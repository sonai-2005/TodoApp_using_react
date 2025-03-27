import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    
  plugins: [react(),
  tailwindcss(),
  ],
  base :"https://sonai-2005.github.io/TodoApp_using_react/",

})
