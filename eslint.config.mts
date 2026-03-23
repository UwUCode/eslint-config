import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

const files = ["**/*.ts", "**/*.mts", "**/*.cts"];
const typeCheckedConfigs = tseslint.configs.strictTypeChecked.map(config => ({
    ...config,

    files,
}));

export default defineConfig(
    {
        ignores: ["dist/**", "node_modules/**"],
    },
    js.configs.recommended,
    ...typeCheckedConfigs,
    tseslint.configs.stylisticTypeChecked,
    stylistic.configs.customize({
        indent: 4,
        quotes: "double",
        semi: true,
        braceStyle: "1tbs",
        quoteProps: "consistent-as-needed",
        commaDangle: "always-multiline",
    }),
    {
        files,
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            "@stylistic": stylistic,
            "import": importPlugin,
            unicorn,
            "unused-imports": unusedImports,
        },
        rules: {
            "@stylistic/eol-last": ["error", "always"],
            "@stylistic/max-statements-per-line": ["error", { max: 2 }],
            "@stylistic/member-delimiter-style": ["error", {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false,
                },
            }],
            "@typescript-eslint/array-type": ["error", { default: "generic" }],
            "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
            "@typescript-eslint/consistent-type-assertions": [
                "error",
                {
                    assertionStyle: "as",
                },
            ],
            "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    disallowTypeAnnotations: false,
                    fixStyle: "separate-type-imports",
                },
            ],
            "@typescript-eslint/explicit-function-return-type": [
                "error",
                {
                    allowTypedFunctionExpressions: true,
                    allowHigherOrderFunctions: true,
                    allowDirectConstAssertionInArrowFunctions: true,
                    allowConciseArrowFunctionExpressionsStartingWithVoid: false,
                    allowFunctionsWithoutTypeParameters: false,
                    allowIIFEs: true,
                },
            ],
            "@typescript-eslint/explicit-module-boundary-types": [
                "error",
                {
                    allowArgumentsExplicitlyTypedAsAny: false,
                    allowDirectConstAssertionInArrowFunctions: true,
                    allowHigherOrderFunctions: true,
                    allowTypedFunctionExpressions: true,
                    allowOverloadFunctions: false,
                },
            ],
            "@typescript-eslint/member-ordering": [
                "error",
                {
                    default: {
                        memberTypes: [
                            "signature",
                            "call-signature",
                            "#private-static-field",
                            "private-static-field",
                            "protected-static-field",
                            "static-field",
                            "#private-field",
                            "private-field",
                            "protected-field",
                            "field",
                            ["protected-abstract-get", "protected-abstract-set"],
                            "protected-abstract-method",
                            ["abstract-get", "abstract-set"],
                            "abstract-method",
                            "private-constructor",
                            "protected-constructor",
                            "constructor",
                            "static-initialization",
                            ["#private-static-get", "#private-static-set"],
                            ["private-static-get", "private-static-set"],
                            ["protected-static-get", "protected-static-set"],
                            ["static-get", "static-set"],
                            "#private-static-method",
                            "private-static-method",
                            "protected-static-method",
                            "static-method",
                            ["#private-get", "#private-set"],
                            ["private-get", "private-set"],
                            ["protected-get", "protected-set"],
                            ["get", "set"],
                            "#private-method",
                            "private-method",
                            "protected-method",
                            "method",
                        ],
                        order: "natural-case-insensitive",
                    },
                },
            ],
            "no-empty-function": "off",
            "@typescript-eslint/no-empty-function": [
                "error",
                {
                    allow: [
                        "arrowFunctions",
                        "overrideMethods",
                    ],
                },
            ],
            "@typescript-eslint/no-non-null-assertion": "off",
            "require-await": "off",
            "@typescript-eslint/require-await": "off",
            "@typescript-eslint/restrict-template-expressions": [
                "warn",
                {
                    allowBoolean: true,
                    allowNever: true,
                    allowNullish: true,
                    allowNumber: true,
                },
            ],
            "@typescript-eslint/no-unnecessary-condition": [
                "error",
                {
                    allowConstantLoopConditions: "only-allowed-literals",
                },
            ],
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-unsafe-declaration-merging": "off",
            "@typescript-eslint/no-extraneous-class": "off",
            "import/order": [
                "error",
                {
                    "alphabetize": {
                        caseInsensitive: true,
                        order: "asc",
                    },
                    "newlines-between": "always",
                    "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
                },
            ],
            "import/extensions": [
                "error",
                "ignorePackages",
            ],
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    args: "after-used",
                    argsIgnorePattern: "^_",
                    vars: "all",
                    varsIgnorePattern: "^_",
                },
            ],
            "unicorn/filename-case": [
                "error",
                {
                    cases: {
                        camelCase: true,
                        pascalCase: true,
                    },
                },
            ],
            "unicorn/no-null": "off",
            "unicorn/no-process-exit": "off",
            "unicorn/prevent-abbreviations": "off",
            "unicorn/no-static-only-class": "off",
            "unicorn/no-magic-array-flat-depth": "off",
            "unicorn/no-this-assignment": "off",
            "unicorn/prefer-global-this": "off",
            "unicorn/prefer-export-from": "warn",
            "unicorn/prefer-import-meta-properties": "error",
        },
    },
);
