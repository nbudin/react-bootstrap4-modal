import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ insertTypesEntry: true, exclude: ['./dist', './lib', './test', './ModalTester.tsx'] }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ReactBootstrap4Modal',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'react-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setupTests.ts'],
    globals: true,
    reporters: [
      'default',
      ['junit', { outputFile: './test/reports/TEST-vitest.xml' }],
      ['html', { outputFile: './test/html_reports/vitest-report.html' }],
    ],
    coverage: {
      enabled: true,
      include: ['./src/**/*.{js,jsx,ts,tsx}'],
      reportsDirectory: './coverage',
      reporter: ['text', 'lcov'],
      reportOnFailure: true,
    },
  },
});
