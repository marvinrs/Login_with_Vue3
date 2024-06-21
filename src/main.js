    import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Importação do roteador

createApp(App)
.use(router) // Uso do roteador
.mount('#app')
