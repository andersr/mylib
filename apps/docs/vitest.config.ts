// import react from "@vitejs/plugin-react";
import { defineConfig, mergeConfig } from "vitest/config";
import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";

import viteConfig from "./vite.config";

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     browser: {
//       enabled: true,
//       name: "chromium",
//     },
//     include: [
//       "../../packages/ui/**/*.test.tsx",
//       "../../packages/utils/**/*.test.ts",
//     ],
//     globals: true,
//     setupFiles: ["./testSetup.js"],
//   },
// });

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        // This should match your package.json script to run Storybook
        // The --ci flag will skip prompts and not open a browser
        storybookScript: "pnpm storybook --ci",
      }),
      // storybookNextJsPlugin(),
    ],
    test: {
      // Glob pattern to find story files
      include: ["/stories/**/*.stories.?(m)[jt]s?(x)"],
      // include: ["../../packages/ui/**/*.stories.?(m)[jt]s?(x)"],
      // Enable browser mode
      browser: {
        enabled: true,
        name: "chromium",
        // Make sure to install Playwright
        provider: "playwright",
        headless: true,
      },
      // Speed up tests and better match how they run in Storybook itself
      // https://vitest.dev/config/#isolate
      // Consider removing this if you have flaky tests
      isolate: false,
      setupFiles: ["./.storybook/vitest.setup.ts"],
    },
  })
);
