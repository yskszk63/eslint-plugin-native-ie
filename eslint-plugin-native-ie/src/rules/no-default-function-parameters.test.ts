import tester from '../tester';
import rule from './no-default-function-parameters';

tester.run("no-default-function-parameters", rule, {
  valid: [
    { code: "function fn() {}" },
    { code: "function fn(v) {}" },
    { code: "var fn = function() {}" },
    { code: "var fn = function(v) {}" },
  ],
  invalid: [
    { code: "function fn(v = 1) {}", errors: [{messageId: "disallow-default-function-parameter"}] },
    { code: "function fn(v = 1, z = 2) {}", errors: [{messageId: "disallow-default-function-parameter"},{messageId: "disallow-default-function-parameter"}] },
    { code: "function fn(v, z = 2) {}", errors: [{messageId: "disallow-default-function-parameter"}] },
    { code: "var fn = function(v = 1) {}", errors: [{messageId: "disallow-default-function-parameter"}] },
    { code: "var fn = function(v = 1, z = 2) {}", errors: [{messageId: "disallow-default-function-parameter"},{messageId: "disallow-default-function-parameter"}] },
    { code: "var fn = function(v, z = 2) {}", errors: [{messageId: "disallow-default-function-parameter"}] },
  ],
});
