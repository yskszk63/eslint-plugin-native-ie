// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowClass = "disallow-class";
type MessageIds = typeof DisallowClass;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowClass]: "Do not use class.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      ClassDeclaration(node: TSESTree.ClassDeclaration): void {
        ctx.report({
          node: node,
          messageId: DisallowClass,
        });
      },
      ClassExpression(node: TSESTree.ClassExpression): void {
        ctx.report({
          node: node,
          messageId: DisallowClass,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
