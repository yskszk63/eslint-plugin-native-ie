import tester from '../tester';
import rule from './no-object-literal-extensions';

tester.run("no-object-literal-extensions", rule, {
  valid: [
    { code: "var o = { p: null }", },
  ],
  invalid: [
    { code: "var o = { ['p']: null }", errors: [{messageId: "disallow-computed-property"}] },
    { code: "var key = null; var o = { key, }", errors: [{messageId: "disallow-shorthand-property"}] },
    { code: "var o = { m() {} }", errors: [{messageId: "disallow-method-property"}] },
  ],
});
