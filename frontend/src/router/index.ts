import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from '@/views/Main.vue'
import QueuePage from '@/views/QueuePage.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/queue/:id",
    name: "Queue",
    component:QueuePage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
