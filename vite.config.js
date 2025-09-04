import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // accessible via localhost and LAN
    port: 5173,      // change if needed
    strictPort: false
  }
})
