module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": false,
      "forOf": true,
      "spread": true,
      "modules": true,
      "classes": true,
      "generators": true,
      "restParams": true,
      "regexUFlag": true,
      "regexYFlag": true,
      "globalReturn": true,
      "destructuring": true,
      "impliedStrict": true,
      "blockBindings": true,
      "defaultParams": true,
      "octalLiterals": true,
      "arrowFunctions": true,
      "binaryLiterals": true,
      "templateStrings": true,
      "superInFunctions": true,
      "unicodeCodePointEscapes": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": true,
      "objectLiteralShorthandProperties": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "plugins": [
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "eslint-plugin-prefer-arrow",
    "@typescript-eslint",
    "deprecation",
    "jsdoc"
  ],
  "rules": {
    "dot-notation": "off",
    "indent": "off",
    "no-empty-function": "off",
    "no-use-before-define": "off",
    "no-redeclare": "error",
    "@typescript-eslint/indent": [
      "error",
      "tab",
      {
        "SwitchCase": 1
      }
    ],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "generic"
      }
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        "assertionStyle": "as"
      }
    ],
    "@typescript-eslint/dot-notation": [
      "error"
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "no-public"
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": true
        }
      }
    ],
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        "allow": [
          "arrowFunctions"
        ]
      }
    ],
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        "allowDestructuring": true,
        "allowedNames": [
          "self"
        ]
      }
    ],
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        "avoidEscape": true
      }
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        "path": "never",
        "types": "prefer-import",
        "lib": "always"
      }
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/method-signature-style": [
      "error",
      "method"
    ],
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/no-shadow": "error",
    "deprecation/deprecation": [
      "warn"
    ],
    "space-infix-ops": "error",
    "no-shadow": "off",
    "import/no-extraneous-dependencies": "off",
    "no-inner-declarations": "off",
    "key-spacing": [
      "error",
      {
        "mode": "strict"
      }
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "arrow-parens": "off",
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": "error",
    "complexity": "off",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "curly": "off",
    "eol-last": [
      "error",
      "always"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxBOF": 1,
        "maxEOF": 1
      }
    ],
    "eqeqeq": [
      "error",
      "always"
    ],
    "guard-for-in": "error",
    "import/order": [
      "error",
      {
        "groups": [
          "index",
          "sibling",
          "parent",
          "internal",
          "external",
          "builtin",
          "object"
        ]
      }
    ],
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/newline-after-description": "error",
    "linebreak-style": [
      "error",
      "unix"
    ],
    "new-parens": [
      "error",
      "always"
    ],
    "no-caller": "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-return-await": "error",
    "no-sequences": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": "off",
    "prefer-arrow-callback": "off",
    "prefer-arrow/prefer-arrow-functions": "off",
    "prefer-numeric-literals": "error",
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    "radix": "error",
    "space-before-function-paren": "off",
    "space-in-parens": [
      "error",
      "never"
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/"
        ]
      }
    ],
    "use-isnan": "error",
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": true
      }
    ],
    "keyword-spacing": [
      "error"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "jsdoc/no-undefined-types": "on",
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "record"
    ],
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "interface"
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports",
        "disallowTypeAnnotations": true
      }
    ]
  }
};
