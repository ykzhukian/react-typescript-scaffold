module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  "rules": {
    "no-var": "error",
    // 优先使用 interface
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "interface"
      ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "linebreak-style": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-static-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  }
};
