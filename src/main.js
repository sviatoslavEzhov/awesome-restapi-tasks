import { createApp } from 'vue'
import 'normalize.css'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
import constants from "@/plugins/constants.js";

createApp(App)
  .use(router)
  .use(store)
  .use(constants)
  .mount('#app')
