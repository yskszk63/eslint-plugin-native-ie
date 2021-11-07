// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowTemplateLiteral = "disallow-template-literal";
type MessageIds = typeof DisallowTemplateLiteral;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowTemplateLiteral]: "Do not use template literal.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      TemplateLiteral(node: TSESTree.TemplateLiteral) {
        ctx.report({
          node,
          messageId: DisallowTemplateLiteral,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
