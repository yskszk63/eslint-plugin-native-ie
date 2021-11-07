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

- no-default-function-parameters
- no-rest-parameters
- no-spread-syntax-for-iterable-objects
- no-object-literal-extensions
- no-for-of-loops
- no-octal-and-binary-literals
- no-template-literals
- no-regexp-y-and-u-flags
- no-destructing
- no-unicode-code-point-escapes
- no-new-target
- no-const
- no-let
- no-const-in-for-in-loop
- no-let-in-for-in-loop
- no-arrow-functions
- no-class
- no-super
- no-generators

## License

[MIT](LICENSE)

## Author

[yskszk63](https://github.com/yskszk63)
