import tester from '../tester';
import rule from './no-class';

tester.run("no-class", rule, {
  valid: [],
  invalid: [
    { code: "class C {}", errors: [{messageId: "disallow-class"}] },
    { code: "var c = class {}", errors: [{messageId: "disallow-class"}] },
  ],
});

