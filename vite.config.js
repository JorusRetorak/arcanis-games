import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import babel from '@rolldown/plugin-babel'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 65 },
      jpeg: { quality: 65 },
      jpg: { quality: 65 },
    }),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
