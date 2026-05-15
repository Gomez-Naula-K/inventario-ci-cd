import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // Configuración de Vitest
  test: {
    environment: "jsdom", // Para simular un navegador
    setupFiles: "./src/setupTests.js", // Donde ponemos los mocks globales
    globals: true, // Permite usar describe/test/expect sin importar
    css: false, // Evita errores al cargar CSS
    mockReset: true, // Limpia mocks entre pruebas
    restoreMocks: true, // Restaura funciones mockeadas
    clearMocks: true, // Limpia el estado entre test
  }
})
