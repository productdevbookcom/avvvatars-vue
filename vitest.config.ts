import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'c8', // or 'c8',
      reporter: ['text', 'json-summary', 'json', 'html'],
    },
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
    ],
    include: ['**/test/*.{js,tsx,ts}'],
    alias: {
      '@root': './src',
    },
  },
})
