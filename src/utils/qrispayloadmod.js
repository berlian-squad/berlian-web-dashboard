/**
 * Menghitung CRC-16/IBM-3740 (CCITT-FALSE) untuk string QRIS
 * @param {string} str - String QRIS (tanpa 4 digit CRC terakhir)
 * @returns {string} 4 digit CRC dalam bentuk Hexadecimal uppercase
 */
export const calculateCRC16 = (str) => {
  let crc = 0xffff; // Initial value
  const poly = 0x1021; // Polynomial

  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ poly) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }

  // Ubah ke hexadecimal, pastikan 4 digit (pad dengan 0 di depan jika perlu), lalu uppercase
  return crc.toString(16).toUpperCase().padStart(4, "0");
};

// Pastikan fungsi calculateCRC16 sudah ada di atasnya ya!

/**
 * Fungsi untuk generate string QRIS dinamis berdasarkan nominal
 * @param {number|string} amountRaw - Nominal angka murni (tanpa titik)
 * @returns {string} String QRIS lengkap yang siap diubah jadi QR Code
 */
export const generateDynamicQRIS = (amountRaw) => {
  // 1. Pastikan amount jadi string murni (contoh: "450000")
  const amountStr = String(amountRaw).replace(/\D/g, "");

  // 2. Hitung panjang karakter amount, pastikan selalu 2 digit (contoh: 6 jadi "06")
  const amountLength = String(amountStr.length).padStart(2, "0");

  // 3. Susun blok QRIS
  const prefix =
    "00020101021226610018ID.CO.ARTAJASA.WWW011893600008014572769602060001230303UBE51370014ID.CO.QRIS.WWW0215ID1019123456781520458125303360";
  const amountBlock = `54${amountLength}${amountStr}`; // Hasil: 5406450000
  const middle =
    "5802ID5912Berlian Demo6011DKI Jakarta6105103106229011001234ABCDE0703A010804BILL";
  const crcTag = "6304";

  // 4. Gabungkan semua bagian sebelum dihitung CRC-nya
  const payloadToHash = `${prefix}${amountBlock}${middle}${crcTag}`;

  // 5. Hitung CRC dari payload tersebut
  const crc = calculateCRC16(payloadToHash);

  // 6. Kembalikan string QRIS final (Payload + CRC)
  return `${payloadToHash}${crc}`;
};
