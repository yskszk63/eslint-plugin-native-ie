import tester from '../tester';
import rule from './no-spread-syntax-for-iterable-objects';

tester.run("no-spread-syntax-for-iterable-objects", rule, {
  valid: [],
  invalid: [
    { code: "var a = [...[]]", errors: [{messageId: "disallow-spread-syntax"}] },
  ],
});

