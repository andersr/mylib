/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import configPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginTsdoc from "eslint-plugin-tsdoc";

export default tseslint.config(
  {
    ignores: ["**/dist", "**/build", "**/*.js", "tmp"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react: pluginReact,
    },
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
  configPrettier,
  {
    plugins: {
      tsdoc: pluginTsdoc,
    },
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["app/docs/.storybook/*", "eslint.config.mjs"],
        },
      },
    },
    rules: {
      "tsdoc/syntax": "warn",
    },
  }
);
