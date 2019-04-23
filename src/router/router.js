import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About";
import Login from "../components/Login";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  },
  {
    path: "/home",
    name: 'home',
    component: Home
  },
  {
    path: "/about",
    name: 'about',
    component: About
  }
]

var router = new VueRouter({
  routes
})


export default router;