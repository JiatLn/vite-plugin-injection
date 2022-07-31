import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Injection from 'vite-plugin-injection'

export default defineConfig({
  plugins: [
    vue(),
    Injection(),
  ],
})
