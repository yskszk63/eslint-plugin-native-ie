import tester from '../tester';
import rule from './no-const-in-for-in-loop';

tester.run("no-const-in-for-in-loop", rule, {
  valid: [
    { code: "for (var _ in {}) {}" },
  ],
  invalid: [
    { code: "for (const _ in {}) {}", errors: [{messageId: "disallow-const-in-for-in-loop"}] },
  ],
});
