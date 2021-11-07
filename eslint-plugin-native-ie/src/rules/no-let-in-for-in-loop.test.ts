import tester from '../tester';
import rule from './no-let-in-for-in-loop';

tester.run("no-let-in-for-in-loop", rule, {
  valid: [
    { code: "for (var _ in {}) {}" },
  ],
  invalid: [
    { code: "for (let _ in {}) {}", errors: [{messageId: "disallow-let-in-for-in-loop"}] },
  ],
});
