// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowComputedProperty = "disallow-computed-property";
const DisallowShorthandProperty = "disallow-shorthand-property";
const DisallowMethodProperty = "disallow-method-property";
type MessageIds = typeof DisallowComputedProperty | typeof DisallowShorthandProperty | typeof DisallowMethodProperty;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowComputedProperty]: "Do not use computed property name.",
      [DisallowShorthandProperty]: "Do not use shorthand property.",
      [DisallowMethodProperty]: "Do not use method property.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      ObjectExpression(node: TSESTree.ObjectExpression): void {
        for (const property of node.properties) {
          if (property.type !== "Property") {
            continue;
          }

          if (property.computed) {
            ctx.report({
              node: property,
              messageId: DisallowComputedProperty,
            });
          }
          if (property.shorthand) {
            ctx.report({
              node: property,
              messageId: DisallowShorthandProperty,
            });
          }
          if (property.method) {
            ctx.report({
              node: property,
              messageId: DisallowMethodProperty,
            });
          }
        }
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
