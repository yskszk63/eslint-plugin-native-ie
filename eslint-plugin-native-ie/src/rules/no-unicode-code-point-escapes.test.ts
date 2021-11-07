import tester from '../tester';
import rule from './no-unicode-code-point-escapes';

tester.run("no-unicode-code-point-escapes", rule, {
  valid: [
    { code: String.raw`var s = '\\u{1f4a9}'`, },
  ],
  invalid: [
    { code: String.raw`var s = '\u{1f4a9}'`, errors: [{messageId: "disallow-unicode-code-point-escape-in-literal"}] },
    { code: String.raw`var \u{102C0} = 2`, errors: [{messageId: "disallow-unicode-code-point-escape-in-identifier"}] },
  ],
});
