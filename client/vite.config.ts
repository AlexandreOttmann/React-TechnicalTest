import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import checker from "vite-plugin-checker";

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  css: {
    modules: {
      /**
       * Will camelize the names of every classes of the CSS files.
       */
      localsConvention: "camelCaseOnly",
    },
  },
});
