// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowLetInForInLoop = "disallow-let-in-for-in-loop";
type MessageIds = typeof DisallowLetInForInLoop;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowLetInForInLoop]: "Do not use let in for in loop.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      ForInStatement(node: TSESTree.ForInStatement): void {
        if (node.left.type !== "VariableDeclaration" || node.left.kind !== "let") {
          return;
        }
        ctx.report({
          node: node.left,
          messageId: DisallowLetInForInLoop,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
