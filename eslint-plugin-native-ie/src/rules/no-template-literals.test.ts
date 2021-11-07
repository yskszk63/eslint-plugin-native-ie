import tester from '../tester';
import rule from './no-template-literals';

tester.run("no-template-literals", rule, {
  valid: [],
  invalid: [
    { code: "var t = `template${v}`", errors: [{messageId: "disallow-template-literal"}] },
  ],
});

