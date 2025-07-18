// import js from "@eslint/js";
// import globals from "globals";
// import react from "eslint-plugin-react";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// // import { ReactThreeFiber } from "@react-three/fiber";

// export default [
//   { ignores: ["dist"] },
//   {
//     files: ["**/*.{js,jsx}"],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: "latest",
//         ecmaFeatures: { jsx: true },
//         sourceType: "module",
//       },
//     },
//     settings: { react: { version: "18.3" } },
//     plugins: {
//       react,
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//       "@react-three": ReactThree,
//     },
//     rules: {
//       ...js.configs.recommended.rules,
//       ...react.configs.recommended.rules,
//       ...react.configs["jsx-runtime"].rules,
//       ...reactHooks.configs.recommended.rules,
//       "react/jsx-no-target-blank": "off",
//       // "react/no-unknown-property": ["error", { ignore: ["intensity"] }],
//       // "react/no-unknown-property": [<enabled>, { ignore: <ignore>, requireDataLowercase: <requireDataLowercase> }]
//       // "react/no-unknown-property": ["error", { ignore: ["css"] }],
//       "react-refresh/only-export-components": [
//         "warn",
//         { allowConstantExport: true },
//       ],
//     },
//   },
// ];

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "@react-three"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
