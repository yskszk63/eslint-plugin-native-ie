// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowSuper = "disallow-super";
type MessageIds = typeof DisallowSuper;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowSuper]: "Do not use super.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      Super(node: TSESTree.Super): void {
        ctx.report({
          node: node,
          messageId: DisallowSuper,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
