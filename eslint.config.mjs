import js from "@eslint/js";
import next from "eslint-config-next";
import prettier from "eslint-config-prettier";
import parser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: [
      "node_modules/",
      "dist/",
      ".next/",
      ".next/**/*",
      "public/",
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs",
    ],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser,
      globals: {
        process: "readonly",
        console: "readonly",
        React: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        window: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        test: "readonly",
        beforeEach: "readonly",
        jest: "readonly",
        global: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...next.rules,
      ...prettier.rules,
      // Optionally enable the rule:
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
