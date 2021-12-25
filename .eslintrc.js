module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'vue/no-async-in-computed-properties': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-setup-props-destructure': 'off',
        'vue/html-indent': ['error', 4],
        'vue/multiline-html-element-content-newline': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'no-tabs': ['error', {'allowIndentationTabs': true}],
        'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
        'semi': ['error', 'always'],
        'eqeqeq': ['error', 'always'],
        'no-var': 'error',
        'indent': ['error', 4],
        'max-len': ['error', {'code': 95, 'ignoreStrings': false}],
        'no-unused-vars': 'off',
        'arrow-parens': 'off', 
        'object-curly-newline': 'off', 
        'no-mixed-operators': 'off', 
        'arrow-body-style': 'off', 
        'function-paren-newline': 'off', 
        'space-before-function-paren': 'off', 
        'array-element-newline': 'off'
    }
};
