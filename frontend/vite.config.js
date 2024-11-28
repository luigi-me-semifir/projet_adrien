import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Autorise les connexions externes
    port: 3000, // Change le port utilisé par Vite
  },
  plugins: [react()],
})
