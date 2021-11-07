// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowForOfLoop = "disallow-for-of-loop";
type MessageIds = typeof DisallowForOfLoop;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowForOfLoop]: "Do not use for of loop.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      ForOfStatement(node: TSESTree.ForOfStatement): void {
        ctx.report({
          node: node.right,
          messageId: DisallowForOfLoop,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
