module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@hono/eslint-config',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  ignorePatterns: ['.eslintrc.cjs', 'dist/'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'node/no-extraneous-import': [
      'error',
      {
        allowModules: ['clsx'],
      },
    ],
  },
}
