import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 8070,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8070",
  },
  server: {
    port: 8070,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8070",
  },
});
