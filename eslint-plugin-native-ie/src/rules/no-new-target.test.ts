import tester from '../tester';
import rule from './no-new-target';

tester.run("no-new-target", rule, {
  valid: [ ],
  invalid: [
    { code: "function f() { var f = new.target; }", errors: [{messageId: "disallow-new.target"}] },
  ],
});
