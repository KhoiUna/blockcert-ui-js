import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    chunkSizeWarningLimit: 1900,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "blockcert-ui.html"),
      },
      output: {
        manualChunks: {
          "@blockcerts/cert-verifier-js": ["@blockcerts/cert-verifier-js"],
        },
      },
    },
  },
});
