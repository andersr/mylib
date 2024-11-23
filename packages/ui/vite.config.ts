import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig(({ mode }) => {
  return {
    build: {
      minify: mode !== "development",
      lib: {
        entry: resolve(__dirname, "./src/main.ts"),
        name: "andersco-ui",
        fileName: (format) => `main.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
      sourcemap: true,
      emptyOutDir: true,
    },
    plugins: [react(), libInjectCss(), dts()],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  };
});
