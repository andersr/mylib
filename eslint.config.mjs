import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import json from "@eslint/json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),
  {
    files: ["**/*.{js,ts,tsx,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    plugins: { json },
  },
  eslint.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/no-unescaped-entities": "warn",
    },
  },
  {
    files: ["**/*.json"],
    ignores: ["*-lock.json"],
    language: "json/json",
    ...json.configs.recommended,
    rules: {
      "no-irregular-whitespace": "off",
    },
  },
];
