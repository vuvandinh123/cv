/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'background-custom': '#f0f0f6', // Thay đổi mã màu tùy chỉnh ở đây
      },
    },
  },
  plugins: [],
}