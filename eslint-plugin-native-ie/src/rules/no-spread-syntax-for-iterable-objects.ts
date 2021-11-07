// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowSpreadSyntax = "disallow-spread-syntax";
type MessageIds = typeof DisallowSpreadSyntax;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowSpreadSyntax]: "Do not use spread syntax.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      SpreadElement(node: TSESTree.SpreadElement): void {
        ctx.report({
          node: node,
          messageId: DisallowSpreadSyntax,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
