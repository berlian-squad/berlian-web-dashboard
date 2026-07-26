<template>
  <!-- Melempar array pokdarwisMenus ke props :menus -->
  <DashboardLayout :menus="pokdarwisMenus">
    <!-- KONTEN UTAMA POKDARWIS -->
    <div
      class="flex flex-col items-center justify-center p-10 text-center h-[calc(100vh-5rem)] w-full relative overflow-hidden bg-white"
    >
      <!-- Hiasan Background -->
      <div
        class="absolute top-10 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"
      ></div>
      <div
        class="absolute bottom-10 left-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"
      ></div>

      <!-- Wrapper Konten -->
      <div
        class="relative z-10 max-w-4xl bg-white p-12 rounded-4xl shadow-xl shadow-gray-200/50 border border-gray-100"
      >
        <img
          :src="imagesPokdarwis"
          alt="Data Curation Illustration"
          class="w-full h-auto object-cover rounded-2xl mb-8 border border-gray-100 shadow-sm"
        />

        <h1 class="text-2xl font-bold text-gray-900 mb-4">
          Ruang Kerja Pokdarwis
        </h1>
        <p class="text-[15px] text-gray-600 leading-relaxed mb-6">
          Halaman ini dikhususkan bagi
          <strong>Kelompok Sadar Wisata (Pokdarwis)</strong>. Ke depannya,
          <em>role</em> ini akan bertanggung jawab untuk melakukan kurasi,
          validasi, dan manajemen data terkait kebudayaan serta pariwisata
          lokal. Data yang telah dikurasi akan diolah menjadi
          <em>Knowledge Base</em> yang valid untuk mendukung ekosistem
          <strong>RAG (Retrieval-Augmented Generation)</strong> pada AI BERLIAN.
        </p>

        <!-- Badge MVP Note -->
        <div
          class="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 text-xs font-bold px-4 py-2.5 rounded-lg border border-yellow-200"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Fitur ini tidak masuk dalam cakupan rilis MVP saat ini.
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref } from "vue";
import DashboardLayout from "../components/DashboardLayout.vue";
import imagesPokdarwis from "../assets/iamges_pokdarwis.png";

const pokdarwisMenus = ref([
  { name: "Dashboard", icon: "📊", active: true },
  { name: "Kurasi Data", icon: "📁", active: false },
  { name: "Statistik RAG", icon: "📈", active: false },
  { name: "Pengaturan", icon: "⚙️", active: false },
]);
</script>
