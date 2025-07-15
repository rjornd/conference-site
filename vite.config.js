import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/conference-site/', // например: /conference-site/
  plugins: [react()],
  assetsInclude: ['**/*.docx']
})
