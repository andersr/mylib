import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

export default defineConfig(({ mode }) => {
  return {
    build: {
      minify: mode !== "development",
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        name: "andersco-mylib",
        fileName: (format) => `index.${format}.js`,
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
    plugins: [react(), dts()],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  };
});
