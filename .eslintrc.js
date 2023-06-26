module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: "off", //allow all quotes
    semi: 0,
  },
  ignorePatterns: [".eslintrc.js"], //exclude files
  settings: {
    react: {
      version: "detect", //Allow eslint to detect react version
    },
  },
};
