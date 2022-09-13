import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./Store";
import firebase from './FireBase/config.js';
//import { firestorePlugin } from 'vuefire'



firebase.auth().onAuthStateChanged(user => {
    const app = createApp(App)

    app.use(router)
    app.use(store)
   // app.use(firestorePlugin)
    app.mount('#app')

    store.dispatch("fetchUser", user);

});