module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'no-unused-vars': [1, { vars: 'all', args: 'after-used' }], // 未使用変数については警告レベルに
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      1,
      {
        html: {
          void: 'always',
        },
      },
    ],
    //"vue/singleline-html-element-content-newline": ["error", {
    //  "ignoreWhenNoAttributes": true,
    //  "ignoreWhenEmpty": true,
    //  "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
    //}],
    'prettier/prettier': ['error', { semi: false }],
  },
}
