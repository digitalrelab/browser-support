module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, variables: false },
    ],
    "react/prop-types": false,
    "react/display-name": false,
  },
}
