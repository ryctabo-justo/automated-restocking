module.exports = {
  root: true,
  extends: [
    'standard-with-typescript'
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    '@typescript-eslint/space-before-function-paren': 'off'
  }
}
