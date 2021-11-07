// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowNewTarget = "disallow-new.target";
type MessageIds = typeof DisallowNewTarget;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowNewTarget]: "Do not use new.target.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      MetaProperty(node: TSESTree.MetaProperty): void {
        if (node.meta.name !== "new" || node.property.name !== "target") {
          return;
        }
        ctx.report({
          node,
          messageId: DisallowNewTarget,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
