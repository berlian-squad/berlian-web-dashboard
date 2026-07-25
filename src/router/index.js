import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import UMKMDashboard from "../views/UmkmDashboard.vue";
import PokdarwisDashboard from "../views/PokdarwisDashboard.vue";
import { useAuthStore } from "../stores/auth.js";

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

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  const isAuth = authStore.isAuthenticated;
  const role = authStore.userRole;

  if (to.path === "/umkm" && (!isAuth || role !== "umkm")) {
    return "/";
  } else if (to.path === "/pokdarwis" && (!isAuth || role !== "pokdarwis")) {
    return "/";
  } else if (to.path === "/" && isAuth) {
    return `/${role}`;
  }
});

export default router;
