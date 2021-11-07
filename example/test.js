// THIS IS A COMMENT.

function x(_z, _foo = 1, _faz = 2) {}
var x = function(_z, _foo = 1, _faz = 2) {}

function z(..._rest) {}
var z = function(..._rest) {}

var zz = Math.max(...[1, 2, 3]);
var zz = [...[]];

var obj = {
    ["aaa"]: "ng",
    zz,
    method() {
    },
}
obj.method();

for (var x of []) {
}

var o = 0o1111 | 0O1111;
var b = 0b1111 | 0B1111;
"0o1111";
var t = `OK${o}`;

var r = /aaa/y;
var u = /aaa/u;
var yu = /aaa/yu;

var [a, b, c] = [1, 2, 3];
var {a, b, c} = {a: 1, b: 2, c: 3};
function f([a, b, c]) { console.log(a, b, c); }
function f({a, b, c}) { console.log(a, b, c); }

var u = "\u{1f4a9}";
var \u{102C0} = 2;
var o = { \u{102C0} : 2 };

function X() {
    if (new.target === X) { }
}

const zzzz = 1;
let yyyyy = 2;

for (const _ in {}) {}
for (let _ in {}) {}

var f = () => {};

class C {}
var o = {
    foo() {
        return super.bar();
    },
}

function *gen() {
    yield "a";
}
