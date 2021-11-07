// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowDestructing = "disallow-destructing";
type MessageIds = typeof DisallowDestructing;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowDestructing]: "Do not use destructing.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      ArrayPattern(node: TSESTree.ArrayPattern): void {
        ctx.report({
          node,
          messageId: DisallowDestructing,
        });
      },
      ObjectPattern(node: TSESTree.ObjectPattern): void {
        ctx.report({
          node,
          messageId: DisallowDestructing,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
