import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.178.82', // IP deines Servers
    port: 5173, // Standardport von Vite
  },
});

