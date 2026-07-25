import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    // Cek localStorage pas pertama kali load. Kalau ada isinya, berarti anggap dulu masih login.
    isAuthenticated: localStorage.getItem("isAuth") === "true",
    userRole: localStorage.getItem("role") || null,
  }),
  actions: {
    login(role) {
      this.isAuthenticated = true;
      this.userRole = role;

      // Simpan ke localStorage biar datanya ndk hilang pas halaman di-refresh
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("role", role);
    },
    logout() {
      this.isAuthenticated = false;
      this.userRole = null;

      localStorage.removeItem("isAuth");
      localStorage.removeItem("role");
    },
  },
});
