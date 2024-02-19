import './assets/css/theme.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from "@/i18n";

const app = createApp(App)

// Dependencies
app.use(createPinia())
app.use(i18n)
app.use(router)

// Global function to ensure dynamic images are taken into account during build process
const useImage = ((url: string) => {
    return new URL(`/src/${url}`, import.meta.url).href;
});
app.config.globalProperties.$image = useImage;

// Mount the App
app.mount('#app')
