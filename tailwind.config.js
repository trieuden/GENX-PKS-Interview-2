/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Quét tất cả file React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // --- Cấu hình quan trọng cho MUI ---
  corePlugins: {
    preflight: false, // Tắt CSS reset của Tailwind
  },
  // ---------------------------------
};
