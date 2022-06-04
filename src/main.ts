import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import firebase from "firebase/app";
import "firebase/auth";

firebase.auth().onAuthStateChanged(() => {
    const app = createApp(App);
    app.use(router);
    app.use(createPinia());
    app.mount('#app');
})

