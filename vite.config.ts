import { defineConfig } from 'vite';
import path from 'path/posix';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: path.join(__dirname, './src/react'),
      share: path.join(__dirname, './src/shared'),
    },
  },
});
