/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "latest",
    },
  },
  rules: {
    quotes: ["off", "double"],
    eqeqeq: "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks: "useDebounce",
      },
    ],
    "react-native/no-inline-styles": "off",
    radix: "off",
    "eslint-comments/no-unlimited-disable": "off",
    "@typescript-eslint/no-unused-vars": "off",
    curly: "OFF",
    "no-empty": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/indent": "off",
    "linebreak-style": ["off", "unix"],
    semi: ["warn", "always"],
    "no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-case-declarations": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-constant-condition": "off",
    "@typescript-eslint/ban-types": "off",
  },
};
