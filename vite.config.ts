import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        exhibits: resolve(__dirname, "exhibits/index.html"),
        contacts: resolve(__dirname, "contacts/index.html"),
        tickets: resolve(__dirname, "ticket/index.html"),
        docs: resolve(__dirname, "docs/index.html"),
      },
    },
  },
});