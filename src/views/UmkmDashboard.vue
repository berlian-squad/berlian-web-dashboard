<template>
  <DashboardLayout :menus="umkmMenus">
    <!-- Semua yang kamu tulis di sini akan masuk ke tengah-tengah layout (di tag <slot/>) -->
    <div class="p-6">
      <h2 class="text-2xl font-semibold text-gray-800">Halo UMKM!</h2>
      <p class="text-gray-500 mt-2">Ini adalah area konten utama kamu.</p>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref } from "vue";
import DashboardLayout from "../components/DashboardLayout.vue";

const umkmMenus = ref([
  { name: "Dashboard", icon: "📊", active: false },
  { name: "Transactions", icon: "💰", active: false },
  { name: "Products", icon: "📦", active: false },
  { name: "Customers", icon: "👥", active: false },
  { name: "Chat", icon: "💬", active: true }, // Chat aktif sesuai desain
  { name: "Settings", icon: "⚙️", active: false },
]);
</script>
