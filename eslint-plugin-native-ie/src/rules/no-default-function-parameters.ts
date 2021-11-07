// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowDefaultFunctionParameter = "disallow-default-function-parameter";
type MessageIds = typeof DisallowDefaultFunctionParameter;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowDefaultFunctionParameter]: "Do not use default function parameter.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      AssignmentPattern(node: TSESTree.AssignmentPattern) {
        ctx.report({
          node: node.right,
          messageId: DisallowDefaultFunctionParameter,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
