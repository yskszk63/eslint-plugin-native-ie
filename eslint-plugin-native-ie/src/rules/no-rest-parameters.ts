// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowRestParameter = "disallow-rest-parameter";
type MessageIds = typeof DisallowRestParameter;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowRestParameter]: "Do not use rest parameter.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      RestElement(node: TSESTree.RestElement) {
        ctx.report({
          node: node,
          messageId: DisallowRestParameter,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
