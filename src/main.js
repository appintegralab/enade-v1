import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Notify } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import { plugin, defaultConfig } from '@formkit/vue'
import router from "./routers"

// Import Tailwind css
import './index.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import FONTS css
import './fonts.css'
import '@formkit/themes/genesis'

const pinia = createPinia()

const App = defineAsyncComponent(() => import("@/App.vue"))
const app = createApp(App)

app
    .use(pinia)
    .use(router)
    .use(Quasar, {
        plugins: { Notify }, 
        lang: quasarLang,
    })
    .use(plugin, defaultConfig)

app.mount('#app')
