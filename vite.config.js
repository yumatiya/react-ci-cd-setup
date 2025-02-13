import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupfiles: './src/setuptests.js', // add this line if you have a setup file
    exclude: [ ...configDefaults.exclude, 'e2e/*'], // example of excluding certain files from test
  },
})
