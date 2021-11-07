import tester from '../tester';
import rule from './no-destructing';

tester.run("no-destructing", rule, {
  valid: [],
  invalid: [
    { code: "var [] = []", errors: [{messageId: "disallow-destructing"}] },
    { code: "var [a] = []", errors: [{messageId: "disallow-destructing"}] },
    { code: "var [a, b] = []", errors: [{messageId: "disallow-destructing"}] },

    { code: "var {} = {}", errors: [{messageId: "disallow-destructing"}] },
    { code: "var {a} = {}", errors: [{messageId: "disallow-destructing"}] },
    { code: "var {a, b} = {}", errors: [{messageId: "disallow-destructing"}] },

    { code: "function fn([]) {}", errors: [{messageId: "disallow-destructing"}] },
    { code: "function fn([a]) {}", errors: [{messageId: "disallow-destructing"}] },
    { code: "function fn([a, b]) {}", errors: [{messageId: "disallow-destructing"}] },

    { code: "function fn({}) {}", errors: [{messageId: "disallow-destructing"}] },
    { code: "function fn({a}) {}", errors: [{messageId: "disallow-destructing"}] },
    { code: "function fn({a, b}) {}", errors: [{messageId: "disallow-destructing"}] },

    { code: "var fn = function([]) {}", errors: [{messageId: "disallow-destructing"}] },
    { code: "var fn = function([a]) {}", errors: [{messageId: "disallow-destructing"}] },
    { code: "var fn = function([a, b]) {}", errors: [{messageId: "disallow-destructing"}] },

    { code: "var fn = function({}) {}", errors: [{messageId: "disallow-destructing"}] },
    { code: "var fn = function({a}) {}", errors: [{messageId: "disallow-destructing"}] },
    { code: "var fn = function({a, b}) {}", errors: [{messageId: "disallow-destructing"}] },
  ],
});

