// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowLet = "disallow-let";
type MessageIds = typeof DisallowLet;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowLet]: "Do not use let.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      VariableDeclaration(node: TSESTree.VariableDeclaration): void {
        if (node.kind !== "let") {
          return;
        }
        ctx.report({
          node,
          messageId: DisallowLet,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
