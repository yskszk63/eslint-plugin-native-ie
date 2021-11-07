// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowConst = "disallow-const";
type MessageIds = typeof DisallowConst;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowConst]: "Do not use const.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      VariableDeclaration(node: TSESTree.VariableDeclaration): void {
        if (node.kind !== "const") {
          return;
        }
        ctx.report({
          node,
          messageId: DisallowConst,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
