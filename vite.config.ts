import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: ['react-is', 'prop-types', '@emotion/react', '@emotion/styled'],
    exclude: ['@mui/material', '@mui/system', '@mui/styled-engine'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/, 'react-is', 'prop-types', '@emotion/react', '@emotion/styled'],
    },
  },
});
