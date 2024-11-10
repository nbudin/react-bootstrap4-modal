import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ReactBootstrap4Modal',
      fileName: 'index',
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
});
