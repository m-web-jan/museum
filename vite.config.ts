import { resolve } from "path";
import json from '@rollup/plugin-json';

export default {
  plugins: [json()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        exhibits: resolve(__dirname, "exhibits/index.html"),
      },
    },
  },
};