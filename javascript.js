module.exports = {
	extends: "eslint:recommended",
	plugins: [
		"eslint-plugin-jsdoc",
		"eslint-plugin-prefer-arrow",
		"import-newlines"
	],
	rules: {
		"no-constructor-return": "error",
		"no-duplicate-imports": "error",
		"no-template-curly-in-string": "warn"
	}
};
