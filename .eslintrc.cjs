module.exports = {
  root: true,
  env: { browser: true, es2020: true, node:true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',  "file-extension-in-import-ts"],
  rules: 
  {
    "file-extension-in-import-ts/file-extension-in-import-ts": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
      
    ],
  },
}

