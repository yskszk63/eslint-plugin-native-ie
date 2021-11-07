import tester from '../tester';
import rule from './no-const';

tester.run("no-const", rule, {
  valid: [
    { code: "var x = null", },
  ],
  invalid: [
    { code: "const x = null", errors: [{messageId: "disallow-const"}] },
  ],
});

