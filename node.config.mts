import { defineConfig } from "eslint/config";

import sharedConfig, { files } from "./eslint.config.mjs";

export default defineConfig(sharedConfig, {
    files,
    rules: {
        "import/extensions": [
            "error",
            "ignorePackages",
            { fix: true, fixExtension: "js" },
        ],
    },
});
