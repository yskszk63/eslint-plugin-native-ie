// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowYFlagInRegExp = "disallow-y-flag-in-regexp";
const DisallowUFlagInRegExp = "disallow-u-flag-in-regexp";
type MessageIds = typeof DisallowYFlagInRegExp | typeof DisallowUFlagInRegExp;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowYFlagInRegExp]: "Do not use Y flag in RegExp.",
      [DisallowUFlagInRegExp]: "Do not use U flag in RegExp.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    // TODO needs check RegExp constructor?
    return {
      Literal(node: TSESTree.Literal): void {
        const { value } = node;
        if (!(value instanceof RegExp)) {
          return;
        }

        if (value.flags.includes("y")) {
          ctx.report({
            node,
            messageId: DisallowYFlagInRegExp,
          });
        }
        if (value.flags.includes("u")) {
          ctx.report({
            node,
            messageId: DisallowUFlagInRegExp,
          });
        }
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
