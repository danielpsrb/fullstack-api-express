import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5171, // Ganti 5171 dengan port yang diinginkan
  },
  plugins: [react()],
});
