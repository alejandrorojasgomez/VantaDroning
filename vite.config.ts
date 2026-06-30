import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three'
            if (id.includes('ogl')) return 'ogl'
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('react')) return 'react'
          }
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
