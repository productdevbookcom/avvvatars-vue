import type { Plugin } from 'vue'
import { Avvvatars } from './components'

export function plugin(): Plugin {
  return {
    install: (app) => {
      app.component('Avvvatars', Avvvatars)
    },
  }
}

export { Avvvatars }
