import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

config();

export default defineConfig({
  server: {
    port: 8001,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: { '@': '/src' },
  },
});
