import tester from '../tester';
import rule from './no-arrow-functions';

tester.run("no-arrow-functions", rule, {
  valid: [],
  invalid: [
    { code: "var fn = () => {};", errors: [{messageId: "disallow-arrow-function"}] },
  ],
});
