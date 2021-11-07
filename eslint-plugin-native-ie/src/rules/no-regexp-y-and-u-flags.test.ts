import tester from '../tester';
import rule from './no-regexp-y-and-u-flags';

tester.run("no-regexp-y-and-u-flags", rule, {
  valid: [
    { code: "var r = null", },
    { code: "var r = /test/g", },
  ],
  invalid: [
    { code: "var r = /test/y", errors: [{messageId: "disallow-y-flag-in-regexp"}] },
    { code: "var r = /test/u", errors: [{messageId: "disallow-u-flag-in-regexp"}] },
  ],
});
