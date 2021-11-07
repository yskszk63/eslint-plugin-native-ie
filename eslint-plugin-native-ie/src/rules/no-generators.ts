// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowGenerator = "disallow-generator";
type MessageIds = typeof DisallowGenerator;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowGenerator]: "Do not use generator.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      FunctionExpression(node: TSESTree.FunctionExpression): void {
        if (!node.generator) {
          return;
        }
        ctx.report({
          node,
          messageId: DisallowGenerator,
        });
      },
      FunctionDeclaration(node: TSESTree.FunctionDeclaration): void {
        if (!node.generator) {
          return;
        }
        ctx.report({
          node,
          messageId: DisallowGenerator,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
