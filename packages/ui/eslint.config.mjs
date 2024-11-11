import config from "@andersco/eslint-config/base.mjs";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...config,
  {
    ignores: ["dist/*", "node_modules/*"],
  },
];
