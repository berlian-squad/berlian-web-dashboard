<template>
  <!-- Posisi fixed di atas, dengan margin left 64 (256px) untuk ngasih ruang ke Sidebar -->
  <header
    class="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-10"
  >
    <!-- Search Bar -->
    <div
      class="flex flew-row items-center bg-gray-50 rounded-full px-4 py-2 w-96 border border-gray-200"
    >
      <span class="text-gray-400 mr-2">🔍</span>
      <input
        type="text"
        placeholder="Search conversations..."
        class="bg-transparent outline-none w-full text-sm text-gray-700"
      />
    </div>

    <!-- Right Icons & Profile -->
    <div class="flex items-center gap-6">
      <button class="text-gray-500 hover:text-gray-700">🔔</button>
      <button class="text-gray-500 hover:text-gray-700">❓</button>
      <div class="flex items-center gap-3 border-l pl-6 border-gray-200">
        <div class="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <!-- Placeholder avatar -->
          <img
            src="https://ui-avatars.com/api/?name=Admin&background=random"
            alt="Profile"
          />
        </div>
        <span class="text-sm font-medium text-gray-700">Admin</span>
      </div>
    </div>
  </header>
</template>
