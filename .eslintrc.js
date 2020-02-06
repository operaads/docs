module.exports = {
  root: true,
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
