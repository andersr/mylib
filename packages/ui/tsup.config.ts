import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/main.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
