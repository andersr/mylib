import config from "@andersco/eslint-config/base.mjs";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...config,
  {
    ignores: ["build/*", "node_modules/*"],
  },
];
