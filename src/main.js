import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);

app.use(store); // This line adds Vuex as a plugin

app.mount('#app');
