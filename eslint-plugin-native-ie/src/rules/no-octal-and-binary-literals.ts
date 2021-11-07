// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowOctalLiteral = "disallow-octal-literal";
const DisallowBinaryLiteral = "disallow-binary-literal";
type MessageIds = typeof DisallowOctalLiteral | typeof DisallowBinaryLiteral;

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowOctalLiteral]: "Do not use Octal literal syntax.",
      [DisallowBinaryLiteral]: "Do not use Binary literal syntax.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    // TODO needs Number constructor?
    return {
      Literal(node: TSESTree.Literal): void {
        const { value, raw } = node;
        if (typeof value !== "number" || raw[0] !== "0") {
          return;
        }

        if (raw.startsWith("0o") || raw.startsWith("0O")) {
          ctx.report({
            node: node,
            messageId: DisallowOctalLiteral,
          });
        }

        if (raw.startsWith("0b") || raw.startsWith("0B")) {
          ctx.report({
            node: node,
            messageId: DisallowBinaryLiteral
          });
        }
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
