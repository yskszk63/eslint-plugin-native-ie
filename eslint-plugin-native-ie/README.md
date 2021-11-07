# eslint-plugin-native-ie

This is a plugin for eslint that checks the grammar of es6, which does not work with Internet explorer.

## Example

`package.json`

```json
{
...
  "devDependencies": {
    "eslint": "^8.1.0",
    "eslint-plugin-native-ie": "^0.1.0"
  },
...
}
```

`.eslitrc.json` (for ie11)

```json
{
  "extends": ["plugin:native-ie/ie11"]
}
```

`.eslitrc.json` (for ie10)

```json
{
  "extends": ["plugin:native-ie/ie10"]
}
```

## Rules

Rule                                  | IE11 | IE10 | Disallowed grammer example
--------------------------------------|------|------|---------------------------
no-default-function-parameters        | ✅   | ✅   | <pre lang="javascript">function fn(param="default") {}</pre>
no-rest-parameters                    | ✅   | ✅   | <pre lang="javascript">function fn(...rest) {}</pre>
no-spread-syntax-for-iterable-objects | ✅   | ✅   | <pre lang="javascript">var a = [...[]];</pre>
no-object-literal-extensions          | ✅   | ✅   | <pre lang="javascript">var o = { [foo]: false, bar, hoge() {}, }</pre>
no-for-of-loops                       | ✅   | ✅   | <pre lang="javascript">for (var _ of {}) {}</pre>
no-octal-and-binary-literals          | ✅   | ✅   | <pre lang="javascript">var o = 0o0755; var b = 0b0010;</pre>
no-template-literals                  | ✅   | ✅   | <pre lang="javascript">var s = \`hello ${name}\`:</pre>
no-regexp-y-and-u-flags               | ✅   | ✅   | <pre lang="javascript">var y = /test/y; var u = /test/u;</pre>
no-destructing                        | ✅   | ✅   | <pre lang="javascript">var [a, b, c] = [1, 2, 3];</pre>
no-unicode-code-point-escapes         | ✅   | ✅   | <pre lang="javascript">var u = "\u{1f4a9}";</pre>
no-new-target                         | ✅   | ✅   | <pre lang="javascript">function() { new.target === C }</pre>
no-const                              | -    | ✅   | <pre lang="javascript">const c = null;</pre>
no-let                                | -    | ✅   | <pre lang="javascript">let l = null;</pre>
no-const-in-for-in-loop               | ✅   | -    | <pre lang="javascript">for (const _ in {}) {}</pre>
no-let-in-for-in-loop                 | ✅   | -    | <pre lang="javascript">for (let _ in {}) {}</pre>
no-arrow-functions                    | ✅   | ✅   | <pre lang="javascript">var fn = () => {};</pre>
no-class                              | ✅   | ✅   | <pre lang="javascript">class C {}</pre>
no-super                              | ✅   | ✅   | <pre lang="javascript">class C { constructor() {super.foo()} }</pre>
no-generators                         | ✅   | ✅   | <pre lang="javascript">function \*g() {}</pre>

## License

[MIT](LICENSE)

## Author

[yskszk63](https://github.com/yskszk63)
