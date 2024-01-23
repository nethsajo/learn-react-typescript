import { defineConfig } from 'vite';
import { config } from 'dotenv';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

config();

export default defineConfig({
  server: {
    port: 4000,
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
  define: {
    'process.env.TMDB_API_KEY': `"${process.env.TMDB_API_KEY}"`,
  },
});
