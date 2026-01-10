import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import AboutView from "../views/About.vue";
import TestView from "../views/Test.vue";
import PanelsView from "../views/Panels.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/test",
    name: "Test",
    component: TestView,
  },
  {
    path: "/panels",
    name: "Panels",
    component: PanelsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
