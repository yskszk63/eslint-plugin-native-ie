// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowArrowFunction = "disallow-arrow-function";
type MessageIds = typeof DisallowArrowFunction;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowArrowFunction]: "Do not use arrow function.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      ArrowFunctionExpression(node: TSESTree.ArrowFunctionExpression): void {
        ctx.report({
          node,
          messageId: DisallowArrowFunction,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
