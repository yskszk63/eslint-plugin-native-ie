import tester from '../tester';
import rule from './no-octal-and-binary-literals';

tester.run("no-octal-and-binary-literals", rule, {
  valid: [
    { code: "var v = null", },
    { code: "var v = 0", },
    { code: "var v = '0o0000'", },
  ],
  invalid: [
    { code: "var v = 0o0000", errors: [{messageId: "disallow-octal-literal"}] },
    { code: "var v = 0O0000", errors: [{messageId: "disallow-octal-literal"}] },

    { code: "var v = 0b0000", errors: [{messageId: "disallow-binary-literal"}] },
    { code: "var v = 0B0000", errors: [{messageId: "disallow-binary-literal"}] },
  ],
});
