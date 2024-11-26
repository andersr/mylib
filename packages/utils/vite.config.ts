import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig(({ mode }) => {
  return {
    build: {
      minify: mode !== "development",
      lib: {
        entry: resolve(__dirname, "./src/main.ts"),
        name: "andersco-utils",
        fileName: (format) => `main.${format}.js`,
      },
      sourcemap: true,
      emptyOutDir: true,
    },
    plugins: [dts({ exclude: "**/*.test.ts" })],
  };
});
