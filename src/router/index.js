import { createRouter, createWebHistory } from "vue-router";
import userSign from "../views/UserSign.vue";

const routes = [
  {
    path: "/",
    name: "home",
    children: [
      {
        path: "/userSign",
        name: "userSign",
        component: userSign,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
