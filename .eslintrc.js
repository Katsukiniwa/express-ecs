module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json']
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"]
      }
    }
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-inferrable-types': 0,
    "sort-imports": 0,
    "import/order": [2, { "alphabetize": { "order": "asc" } }],
    "no-shadow": ["error", { "builtinGlobals": false, "hoist": "functions", "allow": [] }]
  },
};
