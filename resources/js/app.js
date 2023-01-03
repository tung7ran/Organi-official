import './bootstrap';
import {createApp} from 'vue'

import App from './App.vue'
import router from './routes/router'
import axios from 'axios';

window.axios = axios;

const app = createApp(App)
app.use(router);
app.mount("#app");



