import tester from '../tester';
import rule from './no-super';

tester.run("no-super", rule, {
  valid: [],
  invalid: [
    { code: "var o = { fn() { super.foo() }, }", errors: [{messageId: "disallow-super"}] },
  ],
});
