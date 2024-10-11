// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Si tu utilises React, sinon remplace par ce qui correspond à ton framework

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // ou un autre port si tu préfères
    },
});
