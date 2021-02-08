import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:  "/planet/:id",
    name: "Planet",
    component: () => import(/* webpackChunkName: "About" */ '../views/Planet.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "link--active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes,
});

export default router;