/**
 * Fungsi untuk memformat angka menjadi format Rupiah (dengan titik)
 * @param {string|number} value - Nilai angka yang mau diformat
 * @returns {string} String angka dengan format titik ribuan
 */
export const formatRupiah = (value) => {
  // Kalau nilainya kosong/undefined, kembalikan string kosong
  if (!value) return "";

  // Pastikan nilainya jadi string dulu, lalu hapus semua karakter non-angka
  const rawValue = value.toString().replace(/\D/g, "");

  // Kalau ada sisa angkanya, format dengan toLocaleString
  if (rawValue) {
    return parseInt(rawValue, 10).toLocaleString("id-ID");
  }

  return "";
};
