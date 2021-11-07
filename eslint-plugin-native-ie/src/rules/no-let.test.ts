import tester from '../tester';
import rule from './no-let';

tester.run("no-let", rule, {
  valid: [
    { code: "var v = null" },
  ],
  invalid: [
    { code: "let v = null", errors: [{messageId: "disallow-let"}] },
  ],
});

