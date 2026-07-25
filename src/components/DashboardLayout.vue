<template>
  <div class="min-h-screen bg-white flex">
    <!-- Panggil Sidebar dan lempar props menus ke dalamnya -->
    <Sidebar :menus="menus" />

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col w-full ml-64">
      <Topbar />

      <!-- Area konten dinamis, margin top 20 untuk ngasih jarak dari Topbar -->
      <main class="mt-20 flex-1 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
import Topbar from "./Topbar.vue";

defineProps({
  menus: Array,
});
</script>
