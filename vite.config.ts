import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
