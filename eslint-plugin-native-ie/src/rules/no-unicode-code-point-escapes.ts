// eslint-disable-next-line node/no-unpublished-import
import type { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

const DisallowUnicodeCodePointEscapeInLiteral = "disallow-unicode-code-point-escape-in-literal";
const DisallowUnicodeCodePointEscapeInIdentifier = "disallow-unicode-code-point-escape-in-identifier";
type MessageIds = typeof DisallowUnicodeCodePointEscapeInLiteral | typeof DisallowUnicodeCodePointEscapeInIdentifier;

function containsEscape(raw: string): boolean {
  return /.*(?<!\\)\\u{.*/.test(raw);
}

export default {
  meta: {
    type: "problem",
    messages: {
      [DisallowUnicodeCodePointEscapeInLiteral]: "Do not use unicode escape syntax in literal.",
      [DisallowUnicodeCodePointEscapeInIdentifier]: "Do not use unicode escape syntax in identifier.",
    },
    schema: [],
  },
  create(ctx: TSESLint.RuleContext<MessageIds, []>): TSESLint.RuleListener {
    return {
      Literal(node: TSESTree.Literal): void {
        const { value, raw } = node;
        if (typeof value !== 'string') {
          return;
        }
        if (!containsEscape(raw)) {
          return;
        }
        ctx.report({
          node,
          messageId: DisallowUnicodeCodePointEscapeInLiteral,
        });
      },
      Identifier(node: TSESTree.Identifier): void {
        const raw = ctx.getSourceCode().getText(node);
        if (!containsEscape(raw)) {
          return;
        }
        ctx.report({
          node,
          messageId: DisallowUnicodeCodePointEscapeInIdentifier,
        });
      },
    }
  },
} as TSESLint.RuleModule<MessageIds, []>
