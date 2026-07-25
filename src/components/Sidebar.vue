<template>
  <aside
    class="w-64 bg-[#161b22] h-screen fixed left-0 top-0 flex flex-col text-gray-300 z-20"
  >
    <!-- Brand / Logo -->
    <div class="p-6 mb-4">
      <h1 class="text-xl font-bold text-white">Berlian Dashboard</h1>
      <p class="text-xs text-gray-400 mt-1">Batik Al Huda</p>
    </div>

    <!-- Dynamic Menus -->
    <nav class="flex-1 px-4 space-y-1">
      <!-- Looping menu dari props -->
      <a
        v-for="(menu, index) in menus"
        :key="index"
        href="#"
        class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
        :class="{
          'bg-gray-800 text-white border-l-4 border-blue-500': menu.active,
        }"
      >
        <span>{{ menu.icon }}</span>
        <span class="text-sm font-medium">{{ menu.name }}</span>
      </a>
    </nav>

    <!-- Bottom Actions -->
    <div class="p-4 space-y-2 mt-auto border-t border-gray-700">
      <button
        class="w-full bg-[#0d52bc] hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition"
      >
        Upgrade Plan
      </button>
      <div class="pt-4 space-y-1">
        <a
          href="#"
          class="flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:text-white"
        >
          <span>❓</span> Support
        </a>
        <button
          @click="handleLogout"
          class="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition text-left"
        >
          <span>🚪</span> Logout
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

defineProps({
  menus: {
    type: Array,
    required: true,
  },
});

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push("/");
};
</script>
