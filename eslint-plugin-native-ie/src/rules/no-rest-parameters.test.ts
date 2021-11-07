import tester from '../tester';
import rule from './no-rest-parameters';

tester.run("no-rest-parameters", rule, {
  valid: [],
  invalid: [
    { code: "function fn(...r) {}", errors: [{messageId: "disallow-rest-parameter"}] },
  ],
});
