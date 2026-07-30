import importPlugin from "eslint-plugin-import";

import type { Rule } from "eslint";

interface ExtensionOptions {
    fix?: boolean;
    fixExtension?: string;
}

interface SourceNode {
    range?: [number, number];
    value?: unknown;
}

const extensionsRule = importPlugin.rules.extensions;
if (extensionsRule === undefined) {
    throw new Error("import/extensions rule not found in eslint-plugin-import");
}

function getFixOption(options: ReadonlyArray<unknown>): boolean {
    return options.some(option => (
        typeof option === "object" && option !== null && "fix" in option && (option as ExtensionOptions).fix === true
    ));
}

function getFixExtension(options: ReadonlyArray<unknown>): string | undefined {
    const option = options.find(candidate => (
        typeof candidate === "object" && candidate !== null && "fixExtension" in candidate
    ));
    const extension = option === undefined ? undefined : (option as ExtensionOptions).fixExtension;

    return extension === undefined || extension.length === 0 ? undefined : extension.replace(/^\./, "");
}

function removeFixOption(options: ReadonlyArray<unknown>): Array<unknown> {
    return options.flatMap((option) => {
        if (
            typeof option !== "object" || option === null || (!("fix" in option) && !("fixExtension" in option))
        ) {
            return [option];
        }

        const ruleOptions = { ...option as ExtensionOptions & Record<string, unknown> };
        delete ruleOptions.fix;
        delete ruleOptions.fixExtension;
        return Object.keys(ruleOptions).length > 0 ? [ruleOptions] : [];
    });
}

function makeFix(
    context: Rule.RuleContext,
    source: SourceNode,
    message: string,
    fallbackExtension: string | undefined,
): Rule.ReportFixer | undefined {
    if (typeof source.value !== "string" || source.range === undefined) {
        return undefined;
    }

    const rawSource = context.sourceCode.getText(source as never);
    const quote = rawSource[0];
    if ((quote !== "'" && quote !== "\"") || rawSource.at(-1) !== quote) {
        return undefined;
    }

    const sourceValue = source.value;
    const queryIndex = sourceValue.search(/[?#]/);
    const path = queryIndex === -1 ? sourceValue : sourceValue.slice(0, queryIndex);
    const suffix = queryIndex === -1 ? "" : sourceValue.slice(queryIndex);
    const missingExtension = /^Missing file extension "([^"]+)"/.exec(message)?.[1] ?? fallbackExtension;
    const unexpectedExtension = /^Unexpected use of file extension "([^"]+)"/.exec(message)?.[1];

    let fixedPath: string | undefined;
    if (missingExtension !== undefined && path.length > 0) {
        fixedPath = `${path}.${missingExtension}`;
    } else if (unexpectedExtension !== undefined && path.endsWith(`.${unexpectedExtension}`)) {
        fixedPath = path.slice(0, -(unexpectedExtension.length + 1));
    }

    if (fixedPath === undefined) {
        return undefined;
    }

    const replacement = `${quote}${fixedPath}${suffix}${quote}`;
    return fixer => fixer.replaceTextRange(source.range!, replacement);
}

export const importExtensionsRule = {
    ...extensionsRule,
    meta: {
        ...extensionsRule.meta,
        fixable: "code",
    },
    create(context: Rule.RuleContext) {
        const fix = getFixOption(context.options);
        const fixExtension = getFixExtension(context.options);
        const ruleContext = Object.create(context) as Rule.RuleContext;
        Object.defineProperty(ruleContext, "options", {
            configurable: true,
            value: removeFixOption(context.options),
        });
        Object.defineProperty(ruleContext, "report", {
            configurable: true,
            value: (descriptor: Rule.ReportDescriptor): void => {
                if (!fix || descriptor.fix !== undefined) {
                    context.report(descriptor);
                    return;
                }

                const report = descriptor as Rule.ReportDescriptor & {
                    message: string;
                    node: SourceNode;
                };
                const reportFix = makeFix(context, report.node, report.message, fixExtension);
                context.report(reportFix === undefined ? descriptor : { ...descriptor, fix: reportFix });
            },
        });

        return extensionsRule.create(ruleContext);
    },
} as unknown as Rule.RuleModule;

// The upstream rule's schema does not know about our `fix` option. The
// wrapped rule still validates its policy options when it is executed.
Object.assign(importExtensionsRule, { schema: [{ type: "array" }] });
