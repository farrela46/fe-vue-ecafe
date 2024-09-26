import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)


const vuetify = createVuetify({
    components,
    directives,
  })

app.use(router)
app.use(vuetify);
app.use(AOS);
app.mount('#app')
