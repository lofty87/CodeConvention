module.exports = {
  rules: {
    'array-bracket-newline': [ 'error', 'consistent' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-callback-return': [ 'error', { allowImplicit: true } ],
    'array-element-newline': [ 'error', 'consistent' ],
    'arrow-body-style': 'off',
    'arrow-parens': [ 'error', 'always' ],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
    'camelcase': 'off',
    'comma-dangle': [ 'error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    } ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-style': [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'never', { enforceForClassMembers: true } ],
    'consistent-return': [ 'error', { treatUndefinedAsUnspecified: false } ],
    'constructor-super': 'error',
    'curly': [ 'error', 'all' ],
    'default-case': 'off',
    'dot-location': [ 'error', 'property' ],
    'eol-last': [ 'error', 'always' ],
    'eqeqeq': [ 'error', 'always' ],
    'for-direction': 'error',
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'function-paren-newline': [ 'error', 'multiline' ],
    'func-call-spacing': [ 'error', 'never' ],
    'func-names': 'off',
    'func-style': [ 'error', 'declaration', { allowArrowFunctions: true } ],
    'generator-star-spacing': [ 'error', { before: false, after: true } ],
    'getter-return': [ 'error', { allowImplicit: true } ],
    'global-require': 'off',
    'indent': [ 'error', 2, {
      ArrayExpression: 'first',
      CallExpression: { arguments: 'first' },
      ImportDeclaration: 'first',
      MemberExpression: 0,
      ObjectExpression: 'first',
      SwitchCase: 1,
      VariableDeclarator: 'first',
      flatTernaryExpressions: true,
      offsetTernaryExpressions: false,
      outerIIFEBody: 1,
    } ],
    'jsx-quotes': [ 'error', 'prefer-double' ],
    'keyword-spacing': [ 'error', { before: true, after: true } ],
    'key-spacing': [ 'error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    } ],
    'linebreak-style': 'off',
    'max-classes-per-file': 'off',
    'max-nested-callbacks': 'off',
    'multiline-ternary': [ 'error', 'always-multiline' ],
    'newline-per-chained-call': 'off',
    'new-cap': 'off',
    'new-parens': [ 'error', 'always' ],
    'nonblock-statement-body-position': [ 'error', 'below' ],
    'no-alert': 'off',
    'no-class-assign': 'error',
    'no-cond-assign': [ 'error', 'always' ],
    'no-confusing-arrow': 'error',
    'no-console': 'off',
    'no-constant-condition': [ 'error', { checkLoops: false } ],
    'no-const-assign': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': [ 'error', { allowEmptyCatch: true } ],
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': [ 'error', 'both' ],
    'no-invalid-regexp': [ 'error', { allowConstructorFlags: [ 'u', 'y' ] } ],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-redeclare': 'error',
    'no-return-assign': [ 'error', 'always' ],
    'no-return-await': 'off',
    'no-self-assign': [ 'error', { props: false } ],
    'no-self-compare': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': [ 'error', { defaultAssignment: false } ],
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-vars': 'off',
    'no-useless-concat': 'error',
    'no-useless-escape': 'off',
    'no-useless-rename': 'error',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-newline': [ 'error', { consistent: true } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': 'off',
    'object-shorthand': [ 'error', 'consistent' ],
    'operator-linebreak': [ 'error', 'after', { overrides: { '?': 'before', ':': 'before' } } ],
    'padded-blocks': [ 'error', 'never' ],
    'padding-line-between-statements': [ 'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quotes': [ 'error', 'single', { allowTemplateLiterals: true } ],
    'quote-props': [ 'error', 'consistent-as-needed' ],
    'require-await': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],
    'semi': [ 'error', 'always' ],
    'semi-spacing': [ 'error', { before: false, after: true } ],
    'semi-style': [ 'error', 'last' ],
    'sort-imports': [ 'error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
    } ],
    'spaced-comment': [ 'error', 'always', {
      exceptions: [ '/', '!', '-', '*', '<' ],
      markers: [ 'global', '/', '!', '-', '*', '<', '!<' ],
    } ],
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    } ],
    'space-infix-ops': 'error',
    'space-in-parens': [ 'error', 'never' ],
    'space-unary-ops': [ 'error', { words: true, nonwords: false } ],
    'switch-colon-spacing': [ 'error', { before: false, after: true } ],
    'template-curly-spacing': [ 'error', 'never' ],
    'template-tag-spacing': [ 'error', 'never' ],
    'vars-on-top': 'error',
    'yield-star-spacing': [ 'error', { before: false, after: true } ],
  },
};
