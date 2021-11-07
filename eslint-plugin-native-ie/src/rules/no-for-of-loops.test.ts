
import tester from '../tester';
import rule from './no-for-of-loops';

tester.run("no-for-of-loops", rule, {
  valid: [],
  invalid: [
    { code: "for (var _ of {}) {}", errors: [{messageId: "disallow-for-of-loop"}] },
  ],
});
