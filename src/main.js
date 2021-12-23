import { createApp } from 'vue';

import router from './router/router.js';
import App from './App.vue';

import './assets/css/main.css';

const app = createApp(App);

app.use(router);

app.directive(
    'focus',
    (el, { value }) => {
        el.focus();
        el.value = value;
    }
);

app.mount('#app');


