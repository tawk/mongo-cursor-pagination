module.exports = {
  root : true,
  env : {
    node : true,
    es2020 : true
  },
  parserOptions : {
    sourceType : 'module',
    ecmaVersion : 2022
  },
  extends : [
    'eslint:recommended',
    'standard'
  ],
  plugins : [
    'newline-destructuring'
  ],
  rules : {
    'no-console' : 'error',
    semi : ['error', 'always'],
    'key-spacing' : [
      'error',
      {
        beforeColon : true
      }
    ],
    'space-before-function-paren' : [
      'error',
      {
        anonymous : 'always',
        named : 'never',
        asyncArrow : 'always'
      }
    ],
    'operator-linebreak' : ['error', 'after'],
    'no-nested-ternary' : 'error',
    quotes : ['error', 'single'],
    'arrow-parens' : ['error', 'always'],
    'object-property-newline' : ['error', { allowMultiplePropertiesPerLine : false }],
    'object-curly-newline' : ['error', {
      minProperties : 2,
      multiline : true,
      consistent : true
    }],
    'newline-destructuring/newline' : ['error', {
      items : 1,
      consistent : true
    }],
    'class-methods-use-this' : 'warn',
    strict : ['warn', 'global'],
    'padding-line-between-statements' : [
      'warn',
      {
        blankLine : 'always',
        prev : 'multiline-expression',
        next : 'multiline-expression'
      }
    ]
  },
  overrides : [
    {
      files : ['test/**/*.js'],
      env : {
        jest : true
      },
      rules : {
        'no-new' : 'warn'
      }
    }
  ]
};
