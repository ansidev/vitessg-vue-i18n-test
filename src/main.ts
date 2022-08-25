import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

const entries = Object.entries(import.meta.glob<{ default: any }>('./locales/*.json', {  eager: true }))
const messages = Object.fromEntries(entries.map(([key, func]) => [key.slice(10, -5), func.default]))

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes: [] },
  // function to have custom setups
  ({ app }) => {
    app.use(i18n)
  },
)
