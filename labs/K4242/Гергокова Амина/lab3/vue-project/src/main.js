import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import App from './views/App.vue';
import Register from './components/Register.vue'
import BookGal from './components/BookGal.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import router from './router'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/main',
        name: 'Main',
        component: BookGal,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/registration',
        name: 'Registration',
        component: Register,
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
      }
    ],
  });
  

app.use(createPinia())
app.use(router)

app.mount('#app')
