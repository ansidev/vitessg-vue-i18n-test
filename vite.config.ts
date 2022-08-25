import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import Vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    })
  ]
})
