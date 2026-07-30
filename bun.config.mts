import { defineConfig } from "eslint/config";

import sharedConfig from "./eslint.config.mjs";

export default defineConfig(sharedConfig, {
    rules: {
        "import/extensions": [
            "error",
            "ignorePackages",
            { fix: true, fixExtension: "ts" },
        ],
    },
});
