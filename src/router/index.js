import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import UMKMDashboard from "../views/UmkmDashboard.vue";
import PokdarwisDashboard from "../views/PokdarwisDashboard.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/umkm",
    name: "UMKM",
    component: UMKMDashboard,
  },
  {
    path: "/pokdarwis",
    name: "Pokdarwis",
    component: PokdarwisDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
