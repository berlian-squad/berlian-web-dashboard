<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center relative overflow-hidden"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>

    <img
      :src="diamondBulat"
      class="absolute -bottom-32 -left-48 w-160 h-auto z-0 opacity-90 drop-shadow-2xl"
      alt="Hiasan Pojok"
    />

    <div
      class="relative bg-white p-8 rounded-4xl shadow-2xl w-full max-w-105 z-10 m-4"
    >
      <div class="flex justify-center mb-5">
        <div
          class="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 shadow-sm"
        >
          <img :src="diamonLogo" class="w-6 h-auto" alt="Logo Up" />
        </div>
      </div>

      <!-- Welcome Text -->
      <div class="text-center mb-8">
        <h2 class="text-[22px] font-bold text-gray-800">Welcome back</h2>
        <p class="text-sm text-gray-500 mt-1.5">
          Please enter your detail to sign in.
        </p>
      </div>

      <!-- Form Input -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email Input -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1.5"
            >E-Mail Address</label
          >
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email..."
            class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition text-sm"
            required
          />
        </div>

        <!-- Password Input -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1.5"
            >Password</label
          >
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Password@123"
              autocomplete="new-password"
              class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition text-sm pr-10"
            />

            <!-- Tambahkan modifier .prevent pada @click -->
            <button
              type="button"
              @click.prevent="showPassword = !showPassword"
              class="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition"
            >
              {{ showPassword ? "🙈" : "👁️" }}
            </button>
          </div>
        </div>

        <!-- Error Message Alert -->
        <p
          v-if="errorMessage"
          class="text-red-500 text-sm font-medium text-center"
        >
          {{ errorMessage }}
        </p>

        <!-- Remember & Forgot Password -->
        <div class="flex items-center justify-between text-sm pt-2">
          <label class="flex items-center gap-2 cursor-pointer text-gray-600">
            <input
              type="checkbox"
              class="rounded border-gray-300 text-gray-800 focus:ring-gray-800 w-4 h-4"
            />
            <span class="font-medium">Remember me</span>
          </label>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-800 font-medium underline decoration-gray-300 hover:decoration-gray-800 underline-offset-2 transition"
          >
            Forgot password?
          </a>
        </div>

        <!-- Submit Button -->
        <div class="pt-4">
          <button
            type="submit"
            class="w-full bg-[#1c1c1e] hover:cursor-pointer hover:bg-black text-white font-medium py-3 rounded-xl transition-all duration-200 shadow-lg shadow-black/10"
          >
            Sign in
          </button>
        </div>
      </form>

      <!-- Footer Text -->
      <p class="text-center text-sm text-gray-500 mt-8">
        Don't have an account yet?
        <a href="#" class="text-gray-900 font-semibold hover:underline"
          >Sign up</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import bgImage from "../assets/nightperform.jpeg";
import diamondBulat from "../assets/diamondbullat.png";
import diamonLogo from "../assets/diamondaja.png";
import { useAuthStore } from "../stores/auth";

const router = useRouter();
const showPassword = ref(false);

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const authStore = useAuthStore();

const handleLogin = () => {
  errorMessage.value = "";

  if (email.value === "umkm_demo@email.com" && password.value === "umkmgg99") {
    authStore.login("umkm");
    router.push("/umkm");
  } else if (
    email.value === "pokdarwis_demo@email.com" &&
    password.value === "pokdarwisgg99"
  ) {
    authStore.login("pokdarwis");
    router.push("/pokdarwis");
  }
  // Kalau dua-duanya salah
  else {
    errorMessage.value = "Email atau password salah. Coba periksa lagi ya!";
  }
};
</script>
