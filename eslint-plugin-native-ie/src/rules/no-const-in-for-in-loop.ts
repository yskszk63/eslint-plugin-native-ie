// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowConstInForLoop = "disallow-const-in-for-in-loop";
type MessageIds = typeof DisallowConstInForLoop;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowConstInForLoop]: "Do not use const in for in loop in loop head.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      ForInStatement(node: TSESTree.ForInStatement): void {
        if (node.left.type !== "VariableDeclaration" || node.left.kind !== "const") {
          return;
        }
        ctx.report({
          node: node.left,
          messageId: DisallowConstInForLoop,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
