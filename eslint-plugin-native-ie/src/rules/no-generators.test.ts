
import tester from '../tester';
import rule from './no-generators';

tester.run("no-generators", rule, {
  valid: [
    { code: "function g() {}", },
    { code: "var g = function() {}", },
  ],
  invalid: [
    { code: "function *g() {}", errors: [{messageId: "disallow-generator"}] },
    { code: "var g = function*() {}", errors: [{messageId: "disallow-generator"}] },
  ],
});
