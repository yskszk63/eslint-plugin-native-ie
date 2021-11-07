import noDefaultFunctionParameters from "./no-default-function-parameters";
import noRestParameters from "./no-rest-parameters";
import noSpreadSyntaxForIterableObjects from "./no-spread-syntax-for-iterable-objects";
import noObjectLiteralExtensions from "./no-object-literal-extensions";
import noForOfLoops from "./no-for-of-loops";
import noOctalAndBinaryLiterals from "./no-octal-and-binary-literals";
import noTemplateLiterals from "./no-template-literals";
import noRegexpYAndUFlags from "./no-regexp-y-and-u-flags";
import noDestructing from "./no-destructing";
import noUnicodeCodePointEscapes from "./no-unicode-code-point-escapes";
import noNewTarget from "./no-new-target";
import noConst from "./no-const";
import noLet from "./no-let";
import noConstInForInLoop from "./no-const-in-for-in-loop";
import noLetInForInLoop from "./no-let-in-for-in-loop";
import noArrowFunctions from "./no-arrow-functions";
import noClass from "./no-class";
import noSuper from "./no-super";
import noGenerators from "./no-generators";

export default {
  "no-default-function-parameters": noDefaultFunctionParameters,
  "no-rest-parameters": noRestParameters,
  "no-spread-syntax-for-iterable-objects": noSpreadSyntaxForIterableObjects,
  "no-object-literal-extensions": noObjectLiteralExtensions,
  "no-for-of-loops": noForOfLoops,
  "no-octal-and-binary-literals": noOctalAndBinaryLiterals,
  "no-template-literals": noTemplateLiterals,
  "no-regexp-y-and-u-flags": noRegexpYAndUFlags,
  "no-destructing": noDestructing,
  "no-unicode-code-point-escapes": noUnicodeCodePointEscapes,
  "no-new-target": noNewTarget,
  "no-const": noConst,
  "no-let": noLet,
  "no-const-in-for-in-loop": noConstInForInLoop,
  "no-let-in-for-in-loop": noLetInForInLoop,
  "no-arrow-functions": noArrowFunctions,
  "no-class": noClass,
  "no-super": noSuper,
  "no-generators": noGenerators,
}
