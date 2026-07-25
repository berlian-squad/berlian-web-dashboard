<template>
  <DashboardLayout :menus="umkmMenus">
    <!-- h-[calc(100vh-5rem)] memastikan tingginya pas nggak ngelebihi layar (5rem = tinggi topbar) -->
    <div class="flex h-[calc(100vh-5rem)] bg-white w-full">
      <!-- KOLOM 1: Chat List (Messages) -->
      <div class="w-[320px] border-r border-gray-200 flex flex-col shrink-0">
        <!-- Header Messages -->
        <div
          class="p-5 flex items-center justify-between border-b border-gray-100"
        >
          <h2 class="text-lg font-bold text-gray-900">Messages</h2>
          <button class="text-gray-500 hover:text-gray-900 transition">
            <!-- Icon Filter (Hamburger lines) -->
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
          </button>
        </div>

        <!-- List Kontak (Looping dari dummy data) -->
        <div class="flex-1 overflow-y-auto">
          <div
            v-for="chat in chatList"
            :key="chat.id"
            class="flex gap-3 p-4 border-b border-gray-50 cursor-pointer transition-colors duration-150"
            :class="
              chat.active
                ? 'bg-[#f8faff] border-l-4 border-l-blue-600'
                : 'hover:bg-gray-50 border-l-4 border-l-transparent'
            "
          >
            <!-- Avatar & Online Indicator -->
            <div class="relative shrink-0">
              <img
                :src="chat.avatar"
                class="w-11 h-11 rounded-full object-cover"
                :alt="chat.name"
              />
              <!-- Tanda hijau kalau online -->
              <span
                v-if="chat.online"
                class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"
              ></span>
            </div>

            <!-- Chat Info -->
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-baseline mb-0.5">
                <h3 class="text-sm font-semibold text-gray-900 truncate">
                  {{ chat.name }}
                </h3>
                <span
                  class="text-[10px] font-bold text-gray-400 uppercase tracking-wider"
                  >{{ chat.time }}</span
                >
              </div>

              <div class="flex justify-between items-center gap-2">
                <p
                  class="text-xs truncate"
                  :class="
                    chat.unread > 0
                      ? 'font-medium text-gray-800'
                      : 'text-gray-500'
                  "
                >
                  {{ chat.message }}
                </p>
                <!-- Badge Unread Messages -->
                <span
                  v-if="chat.unread > 0"
                  class="shrink-0 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full"
                >
                  {{ chat.unread }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- KOLOM 2: Chat Area -->
      <div
        class="flex-1 border-r border-gray-200 bg-white flex flex-col min-w-0"
      >
        <!-- 1. Header Chatroom -->
        <div
          class="px-6 py-4 border-b border-gray-100 flex justify-between items-center shrink-0"
        >
          <div>
            <h2 class="text-lg font-bold text-gray-900">Albert Chai</h2>
            <p class="text-xs font-medium mt-0.5">
              <span class="text-green-500">Active now</span>
              <span class="text-gray-300 mx-2">•</span>
              <span class="text-green-500 font-semibold">Order #ORD-8821</span>
            </p>
          </div>
          <div class="flex items-center gap-3">
            <!-- Tombol Create Payment -->
            <button
              @click="isPaymentModalOpen = true"
              class="bg-[#f28739] hover:bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition shadow-sm"
            >
              <span>🧾</span> Create Payment Request
            </button>
            <button
              class="text-gray-400 hover:text-gray-600 px-2 text-xl font-bold"
            >
              ⋮
            </button>
          </div>
        </div>

        <!-- 2. Chat Bubbles Area -->
        <div class="flex-1 overflow-y-auto p-6 space-y-6">
          <!-- Badge Tanggal -->
          <div class="flex justify-center">
            <span
              class="bg-[#f4f5f8] text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            >
              Today
            </span>
          </div>

          <!-- Incoming Bubble 1 (Kiri) -->
          <div class="flex gap-3">
            <img
              :src="avatarAlbert"
              class="w-8 h-8 rounded-full object-cover mt-1 shrink-0"
              alt="Albert"
            />
            <div class="flex flex-col gap-1 items-start">
              <div
                class="bg-[#f3f6fc] text-gray-800 p-4 rounded-2xl rounded-tl-sm max-w-105 text-sm leading-relaxed"
              >
                Bisakah saya dapat 3 potong batik ini ?<br />
                saya suka polanya 😍❤️
                <hr class="my-3 border-gray-300" />
                Can i get 3 pieces of this batik?<br />
                ลายสวยมาก ฉันชอบค่ะ ☺️❤️
              </div>
              <span class="text-[10px] text-gray-400 font-medium ml-1 mt-1"
                >9:30 AM</span
              >
            </div>
          </div>

          <!-- Outgoing Bubble 1 (Kanan) -->
          <div class="flex justify-end gap-3">
            <div class="flex flex-col gap-1 items-end">
              <div
                class="bg-[#161b22] text-white p-4 rounded-2xl rounded-tr-sm max-w-105 text-sm leading-relaxed shadow-md shadow-gray-200/50"
              >
                Tentu bisa mas, ini motifnya parang memang banyak yang suka.<br />
                Kalo jadi pesen saya kasih bonus 1 kain lagi ya
              </div>
              <span class="text-[10px] text-gray-400 font-medium mr-1 mt-1"
                >9:30 AM <span class="mx-1">•</span> SEEN</span
              >
            </div>
          </div>

          <!-- Incoming Bubble 2 (Kiri) -->
          <div class="flex gap-3">
            <img
              :src="avatarAlbert"
              class="w-8 h-8 rounded-full object-cover mt-1 shrink-0"
              alt="Albert"
            />
            <div class="flex flex-col gap-1 items-start">
              <div
                class="bg-[#f3f6fc] text-gray-800 p-4 rounded-2xl rounded-tl-sm max-w-105 text-sm leading-relaxed"
              >
                Jadi berapa yang harus saya bayar?
                <hr class="my-3 border-gray-300" />
                ฉันต้องจ่ายเท่าไหร่?
              </div>
              <span class="text-[10px] text-gray-400 font-medium ml-1 mt-1"
                >9:30 AM</span
              >
            </div>
          </div>

          <!-- Outgoing Bubble 2 (Kanan) -->
          <div class="flex justify-end gap-3">
            <div class="flex flex-col gap-1 items-end">
              <div
                class="bg-[#161b22] text-white p-4 rounded-2xl rounded-tr-sm max-w-105 text-sm leading-relaxed shadow-md shadow-gray-200/50"
              >
                jadi 450 ribu rupiah aja mas, nanti dapat 4 kain ya saya bonus 1
                kain
              </div>
              <span class="text-[10px] text-gray-400 font-medium mr-1 mt-1"
                >9:30 AM <span class="mx-1">•</span> SEEN</span
              >
            </div>
          </div>

          <!-- Yang tagihan sent -->
          <!-- Outgoing Bubble 3: Payment Request Card (Muncul setelah tombol diklik) -->
          <transition
            enter-active-class="transition ease-out duration-500 transform origin-bottom-right"
            enter-from-class="opacity-0 scale-90 translate-y-8"
            enter-to-class="opacity-100 scale-100 translate-y-0"
          >
            <div v-if="isPaymentSent" class="flex justify-end gap-3 mt-4">
              <div class="flex flex-col gap-1 items-end">
                <!-- Card Tagihan -->
                <div
                  class="bg-[#161b22] p-4 rounded-2xl rounded-tr-sm w-75 shadow-lg shadow-gray-200/50 border border-gray-800"
                >
                  <!-- Badge Header -->
                  <div
                    class="bg-[#dbe6fd] text-[#0d52bc] text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 mb-3 w-fit"
                  >
                    <svg
                      class="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Payment Request Sent
                  </div>

                  <!-- Info Produk -->
                  <div class="flex gap-3 items-center mb-4">
                    <div
                      class="w-14 h-14 bg-gray-700 rounded-lg overflow-hidden shrink-0"
                    >
                      <!-- Pakai placeholder batik yang sama -->
                      <img
                        :src="previewBatik"
                        class="w-full h-full object-cover"
                        alt="Batik"
                      />
                    </div>
                    <div>
                      <!-- Menampilkan nama item dan quantity secara dinamis -->
                      <h4 class="text-xs text-gray-300 leading-snug mb-1">
                        Batik Motif Parang Klithik... <br />
                        x
                        {{ paymentType === "default" ? defaultQty : customQty }}
                        item
                      </h4>
                      <!-- Harga dinamis dari hasil input -->
                      <p class="text-sm font-bold text-white">
                        Rp {{ finalPrice }}
                      </p>
                      <p class="text-[10px] text-gray-500 italic mt-0.5">
                        around 857 baht
                      </p>
                    </div>
                  </div>

                  <!-- Tombol Detail -->
                  <button
                    @click="isDetailModalOpen = true"
                    class="w-full bg-[#f28739] hover:bg-orange-500 text-black font-bold py-2.5 rounded-lg text-xs transition"
                  >
                    Detail Info
                  </button>
                </div>

                <span class="text-[10px] text-gray-400 font-medium mr-1 mt-1">
                  <!-- Waktu statis buat demo -->
                  9:31 AM <span class="mx-1">•</span> DELIVERED
                </span>
              </div>
            </div>
          </transition>
        </div>

        <!-- 3. Input Area -->
        <div class="p-4 bg-white border-t border-gray-100 shrink-0">
          <div
            class="flex items-center gap-3 border border-gray-200 rounded-xl p-2 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all bg-white"
          >
            <button
              class="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </button>
            <button
              class="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <!-- Icon Emoji -->
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>

            <input
              type="text"
              placeholder="Type your message to Albert..."
              class="flex-1 outline-none text-sm px-2 py-2 bg-transparent text-gray-700 placeholder-gray-400"
            />

            <button
              class="bg-[#0d52bc] hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 transition shadow-md shadow-blue-500/20"
            >
              Send
              <!-- Icon Paper Airplane -->
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </button>
          </div>
          <p class="text-[10px] text-gray-400 mt-2.5 ml-2 font-medium">
            Press Enter to send, Shift + Enter for new line.
          </p>
        </div>
      </div>

      <!-- KOLOM 3: User Info & Context -->
      <div
        class="w-75 bg-white border-l border-gray-200 flex flex-col shrink-0 overflow-y-auto"
      >
        <!-- 1. User Profile -->
        <div class="p-6 flex flex-col items-center border-b border-gray-100">
          <div class="w-20 h-20 rounded-full bg-orange-50 p-1 mb-3">
            <img
              :src="avatarAlbert"
              class="w-full h-full rounded-full object-cover"
              alt="Albert Chai"
            />
          </div>
          <h3 class="text-lg font-bold text-gray-900">Albert Chai</h3>
          <p class="text-sm text-gray-500 mb-3">albert.j@example.com</p>
          <span
            class="bg-[#f0f4ff] text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
          >
            Thailand
          </span>
        </div>

        <!-- 2. Additional Info Section -->
        <div class="p-6 space-y-6">
          <!-- Current Context (Item Details / Order Sent) -->
          <div>
            <h4
              class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3"
            >
              Current Context
            </h4>

            <!-- TAMPILAN SEBELUM TAGIHAN DIKIRIM -->
            <div
              v-if="!isPaymentSent"
              class="border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col"
            >
              <div class="bg-[#f2f6fc] p-4 border-b border-gray-200">
                <h5 class="font-bold text-gray-900 text-lg mb-1">
                  Item #PRG- 222
                </h5>
                <p class="text-[13px] text-gray-500">
                  Placed {{ currentDate }}
                </p>
              </div>
              <div class="bg-white p-4">
                <div class="flex gap-3 items-center mb-4">
                  <div
                    class="w-12 h-12 bg-gray-200 rounded overflow-hidden shrink-0"
                  >
                    <img
                      :src="previewBatik"
                      class="w-full h-full object-cover"
                      alt="Batik"
                    />
                  </div>
                  <div>
                    <h6
                      class="text-sm font-semibold text-gray-900 leading-tight mb-0.5"
                    >
                      Batik Motif Parang Klithik
                    </h6>
                    <p class="text-[13px] text-gray-600">Rp 145.000</p>
                  </div>
                </div>
                <button
                  class="w-full bg-[#e3ecfb] hover:bg-blue-100 text-[#0d52bc] font-semibold py-2.5 rounded-lg text-sm transition"
                >
                  View Product
                </button>
              </div>
            </div>

            <!-- TAMPILAN SETELAH TAGIHAN DIKIRIM (Sesuai Referensi) -->
            <div
              v-else
              class="border border-gray-200 rounded-xl p-4 shadow-sm bg-[#f4f7fc]"
            >
              <div class="flex justify-between items-start mb-2">
                <h5 class="font-bold text-gray-900 text-[17px] leading-tight">
                  Order<br />#ORD-8821
                </h5>
                <!-- Badge Payment Sent -->
                <span
                  class="bg-[#fef3c7] text-yellow-700 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider"
                >
                  Payment Sent
                </span>
              </div>
              <p class="text-[12px] text-gray-500 mb-4">
                Placed {{ currentDate }}
              </p>

              <!-- Product Item Details -->
              <div
                class="flex gap-3 items-center mb-4 bg-white p-2.5 rounded-lg border border-gray-100"
              >
                <div
                  class="w-10 h-10 bg-gray-200 rounded overflow-hidden shrink-0"
                >
                  <img
                    :src="previewBatik"
                    class="w-full h-full object-cover"
                    alt="Batik"
                  />
                </div>
                <div>
                  <h6
                    class="text-[11px] font-bold text-gray-900 leading-tight mb-0.5"
                  >
                    Batik Motif Parang Klithik
                  </h6>
                  <p class="text-[11px] text-gray-600">Rp {{ finalPrice }}</p>
                </div>
              </div>

              <button
                class="w-full bg-[#dbe6fd] hover:bg-blue-200 text-[#0d52bc] font-bold py-2 rounded-lg text-xs transition"
              >
                View Order Details
              </button>
            </div>
          </div>

          <!-- Internal Notes -->
          <div>
            <h4
              class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3"
            >
              Internal Notes
            </h4>

            <div
              class="bg-[#fff9c4]/30 border border-yellow-200/50 rounded-xl p-4 mb-3"
            >
              <p class="text-xs text-yellow-800 italic leading-relaxed">
                "Note from Nov 10: Prefers recycled packaging. Always responds
                quickly to emails."
              </p>
            </div>

            <!-- Button Add Note dengan dashed border -->
            <button
              class="w-full border border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-600 font-medium py-2 rounded-lg text-xs transition flex items-center justify-center gap-2"
            >
              <span class="text-lg leading-none mb-0.5">+</span> Add Note
            </button>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
  <!-- PAYMENT REQUEST MODAL -->
  <div
    v-if="isPaymentModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity"
  >
    <div
      class="bg-[#f2f2f2] rounded-4xl w-full max-w-105 p-8 relative shadow-2xl"
    >
      <!-- Tombol Close (X) -->
      <button
        @click="isPaymentModalOpen = false"
        class="absolute top-6 right-6 text-black hover:text-gray-600 transition"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <h2 class="text-xl font-medium text-center text-gray-900 mb-8 mt-2">
        Buat Tagihan
      </h2>

      <!-- OPSI 1: DEFAULT -->
      <div class="mb-6">
        <label class="flex items-center gap-3 cursor-pointer mb-4">
          <input
            type="radio"
            v-model="paymentType"
            value="default"
            class="w-6 h-6 text-blue-600 focus:ring-blue-500 border-gray-300 accent-[#0d52bc]"
          />
          <span class="text-gray-800 font-medium text-base">Default</span>
        </label>

        <!-- Konten Default -->
        <div
          class="pl-9"
          :class="{
            'opacity-40 pointer-events-none': paymentType !== 'default',
          }"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <img
                :src="previewBatik"
                class="w-14 h-14 rounded-lg object-cover"
                alt="Batik"
              />
              <div>
                <h3 class="font-bold text-gray-900 text-[15px] mb-1">
                  Batik Motif Parang Klithik
                </h3>
                <p class="text-gray-500 text-sm">Rp 145.000</p>
              </div>
            </div>

            <!-- Stepper -->
            <div class="flex items-center gap-2">
              <button
                @click="defaultQty > 1 ? defaultQty-- : null"
                class="w-9 h-9 rounded-lg bg-[#e3ebfc] text-[#0d52bc] font-medium hover:bg-blue-100 flex items-center justify-center"
              >
                -
              </button>
              <span
                class="w-10 text-center text-sm font-medium border border-gray-300 bg-white rounded-lg py-1.5"
                >{{ defaultQty }}</span
              >
              <button
                @click="defaultQty++"
                class="w-9 h-9 rounded-lg bg-[#e3ebfc] text-[#0d52bc] font-medium hover:bg-blue-100 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
          <div class="flex justify-between items-center mt-6">
            <span class="text-gray-900 font-medium text-lg">Total</span>
            <span class="text-[22px] font-semibold text-gray-900"
              >Rp{{ defaultTotalFormatted }}</span
            >
          </div>
        </div>
      </div>

      <!-- OPSI 2: CUSTOM -->
      <div class="mb-10">
        <label class="flex items-center gap-3 cursor-pointer mb-4">
          <input
            type="radio"
            v-model="paymentType"
            value="custom"
            class="w-6 h-6 text-blue-600 focus:ring-blue-500 border-gray-300 accent-[#0d52bc]"
          />
          <span class="text-gray-800 font-medium text-base">Custom</span>
        </label>

        <!-- Konten Custom -->
        <div
          class="pl-9"
          :class="{
            'opacity-40 pointer-events-none': paymentType !== 'custom',
          }"
        >
          <div
            class="border border-gray-300 bg-white rounded-2xl p-4 mb-6 flex items-center"
          >
            <span class="text-gray-500 font-medium text-2xl mr-2">Rp.</span>

            <input
              type="text"
              :value="customPrice"
              @input="formatCustomPrice"
              class="w-full text-2xl font-medium outline-none bg-transparent text-gray-900"
            />
          </div>

          <div class="flex justify-between items-center">
            <span class="text-gray-900 font-medium text-lg">Item Quantity</span>
            <!-- Stepper -->
            <div class="flex items-center gap-2">
              <button
                @click="customQty > 1 ? customQty-- : null"
                class="w-9 h-9 rounded-lg bg-[#e3ebfc] text-[#0d52bc] font-medium hover:bg-blue-100 flex items-center justify-center"
              >
                -
              </button>
              <span
                class="w-10 text-center text-sm font-medium border border-gray-300 bg-white rounded-lg py-1.5"
                >{{ customQty }}</span
              >
              <button
                @click="customQty++"
                class="w-9 h-9 rounded-lg bg-[#e3ebfc] text-[#0d52bc] font-medium hover:bg-blue-100 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Tombol Kirim Tagihan -->
      <button
        @click="handleKirimTagihan"
        class="w-full bg-[#0d52bc] hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl text-[17px] transition flex justify-center items-center gap-2"
      >
        Kirim Tagihan <span>&#9655;</span>
      </button>
    </div>
  </div>

  <!-- NOTIFIKASI KIRIM TAGIHAN -->
  <transition
    enter-active-class="transition ease-out duration-300 transform"
    enter-from-class="opacity-0 translate-y-[-20px] scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-[-20px] scale-95"
  >
    <div
      v-if="showNotification"
      class="fixed top-24 right-10 z-50 bg-[#1cb87b] text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3"
    >
      <!-- Icon Centang Bulat -->
      <div
        class="bg-white rounded-full w-5 h-5 flex items-center justify-center shrink-0"
      >
        <svg
          class="w-3.5 h-3.5 text-[#1cb87b]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <span class="font-medium text-sm">Tagihan berhasil terkirim</span>
    </div>
  </transition>

  <!-- DETAIL INFO MODAL (QRIS) -->
  <div
    v-if="isDetailModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity"
  >
    <div
      class="bg-white rounded-4xl w-full max-w-95 p-6 relative shadow-2xl flex flex-col mx-4"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-[17px] font-medium text-gray-900 mx-auto pl-6">
          Informasi Tagihan
        </h2>
        <button
          @click="isDetailModalOpen = false"
          class="text-black hover:text-gray-600 transition p-1"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Kartu QRIS -->
      <div
        class="border border-gray-300 rounded-[28px] p-6 flex flex-col items-center text-center mb-4"
      >
        <!-- Logo QRIS -->
        <img :src="logoQris" alt="QRIS Logo" class="h-7 mb-4 object-contain" />

        <!-- Harga Dinamis dari finalPrice -->
        <h3 class="text-[32px] font-normal text-gray-900 mb-6">
          Rp{{ finalPrice }}
        </h3>

        <div
          class="bg-red-50 border border-red-200 text-red-700 text-[11px] leading-relaxed p-3 rounded-xl mb-5 text-center font-medium"
        >
          Mohon untuk tidak melakukan transaksi pembayaran! NMID yang tertera
          pada QR code ini adalah NMID asli. Aplikasi masih berupa demo 🙏🏻
        </div>

        <!-- QR Code -->
        <div
          class="mb-6 bg-white p-2 rounded-xl border border-gray-100 shadow-sm"
        >
          <qrcode-vue
            v-if="qrisPayload"
            :value="qrisPayload"
            :size="200"
            level="M"
            render-as="svg"
          />
        </div>

        <!-- NMID & Valid Info -->
        <p class="text-[11px] text-gray-600 mb-2">NMID: ID123EXAMPLE456</p>
        <p class="text-[11px] text-gray-600 mb-3">
          Valid until {{ validUntilTime }}
        </p>

        <!-- Countdown Timer -->
        <div class="bg-[#f5f6f8] px-4 py-2 rounded-lg flex items-center gap-2">
          <svg
            class="w-3.5 h-3.5 text-gray-800"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-[11px] font-medium text-gray-800"
            >14:59 remaining</span
          >
        </div>
      </div>

      <!-- Kartu Payment Card -->
      <div class="border border-gray-300 rounded-xl p-4 flex flex-col gap-2.5">
        <p class="text-[11px] text-gray-800">
          atau informasi pembayaran payment card
        </p>
        <div class="flex items-center gap-3">
          <!-- Logo Visa -->
          <img :src="logoVisa" alt="Visa" class="h-3.5 object-contain" />
          <!-- Logo Mastercard -->
          <img
            :src="logoMastercard"
            alt="Mastercard"
            class="h-4 object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import DashboardLayout from "../components/DashboardLayout.vue";
import avatarAlbert from "../assets/fotoava1.png";
import avatarMarcus from "../assets/fotoava2.png";
import avatarElena from "../assets/fotoava3.png";
import previewBatik from "../assets/batikparangklitikpreview.jpg";
import { formatRupiah } from "../utils/formatters";
import logoVisa from "../assets/logovisawweb.png";
import logoMastercard from "../assets/mastercardlogoweb.png";
import { generateDynamicQRIS } from "../utils/qrispayloadmod.js";
import QrcodeVue from "qrcode.vue";
import logoQris from "../assets/logoqris.png";

const isPaymentModalOpen = ref(false);
const paymentType = ref("custom"); // Secara default pilih opsi 'custom' sesuai screenshot
const defaultQty = ref(1);
const customPrice = ref("450.000");
const customQty = ref(3);

const isDetailModalOpen = ref(false);

const defaultTotalFormatted = computed(() => {
  const total = defaultQty.value * 145000;
  return formatRupiah(total);
});

const formatCustomPrice = (event) => {
  customPrice.value = formatRupiah(event.target.value);
};

const showNotification = ref(false);

const isPaymentSent = ref(false);
const finalPrice = ref("");

const validUntilTime = ref("");

const qrisPayload = ref("");

const currentDate = new Date().toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const handleKirimTagihan = () => {
  isPaymentSent.value = true;

  let rawAmount = 0;

  if (paymentType.value === "default") {
    finalPrice.value = defaultTotalFormatted.value;
    rawAmount = defaultQty.value * 145000;
  } else {
    finalPrice.value = customPrice.value;
    rawAmount = customPrice.value.replace(/\D/g, "");
  }

  qrisPayload.value = generateDynamicQRIS(rawAmount);
  console.log(
    "String QRIS untuk harga " + finalPrice.value + " adalah:",
    qrisPayload.value,
  );

  const now = new Date();
  now.setMinutes(now.getMinutes() + 15);

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  validUntilTime.value = `${hours}:${minutes}`;

  isPaymentModalOpen.value = false;
  showNotification.value = true;

  setTimeout(() => {
    showNotification.value = false;
  }, 3000);
};

const umkmMenus = ref([
  { name: "Dashboard", icon: "📊", active: false },
  { name: "Transactions", icon: "💰", active: false },
  { name: "Products", icon: "📦", active: false },
  { name: "Customers", icon: "👥", active: false },
  { name: "Chat", icon: "💬", active: true },
  { name: "Settings", icon: "⚙️", active: false },
]);

// Dummy data list chat
const chatList = ref([
  {
    id: 1,
    name: "Albert Chai",
    avatar: avatarAlbert,
    message: "jadi 450 ribu rupiah aja mas, nanti dapat 4 kain....",
    time: "2m ago",
    unread: 2,
    online: true,
    active: true,
  },
  {
    id: 2,
    name: "Marcus Chen",
    avatar: avatarMarcus,
    message: "Thank you for the quick refund!",
    time: "1h ago",
    unread: 0,
    online: false,
    active: false,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: avatarElena,
    message: "Is the winter collection in stock?",
    time: "Yesterday",
    unread: 0,
    online: false,
    active: false,
  },
]);
</script>
