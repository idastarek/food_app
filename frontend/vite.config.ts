import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// /// <reference types="vitest" />
// /// <reference types="vite/client" />


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
     //@ts-ignore
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})
