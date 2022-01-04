/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  },
  test: {
    // test configurations here --> https://vitest.dev/config/
    global: true,
    environment: 'jsdom',
  }
})
