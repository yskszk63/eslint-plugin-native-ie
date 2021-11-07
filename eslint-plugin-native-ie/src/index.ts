import rules from './rules';

export default {
  rules,
  configs: {
    all: {
      env: {
        browser: true,
        es6: true,
      },
      plugins: ["native-ie"],
      rules: {
        "native-ie/no-default-function-parameters": "error",
        "native-ie/no-rest-parameters": "error",
        "native-ie/no-spread-syntax-for-iterable-objects": "error",
        "native-ie/no-object-literal-extensions": "error",
        "native-ie/no-for-of-loops": "error",
        "native-ie/no-octal-and-binary-literals": "error",
        "native-ie/no-template-literals": "error",
        "native-ie/no-regexp-y-and-u-flags": "error",
        "native-ie/no-destructing": "error",
        "native-ie/no-unicode-code-point-escapes": "error",
        "native-ie/no-new-target": "error",
        "native-ie/no-const": "error",
        "native-ie/no-let": "error",
        "native-ie/no-const-in-for-in-loop": "error",
        "native-ie/no-let-in-for-in-loop": "error",
        "native-ie/no-arrow-functions": "error",
        "native-ie/no-class": "error",
        "native-ie/no-super": "error",
        "native-ie/no-generators": "error",
      }
    },
    ie11: {
      env: {
        browser: true,
        es6: true,
      },
      plugins: ["native-ie"],
      rules: {
        "native-ie/no-default-function-parameters": "error",
        "native-ie/no-rest-parameters": "error",
        "native-ie/no-spread-syntax-for-iterable-objects": "error",
        "native-ie/no-object-literal-extensions": "error",
        "native-ie/no-for-of-loops": "error",
        "native-ie/no-octal-and-binary-literals": "error",
        "native-ie/no-template-literals": "error",
        "native-ie/no-regexp-y-and-u-flags": "error",
        "native-ie/no-destructing": "error",
        "native-ie/no-unicode-code-point-escapes": "error",
        "native-ie/no-new-target": "error",
        //"native-ie/no-const": "error",
        //"native-ie/no-let": "error",
        "native-ie/no-const-in-for-in-loop": "error",
        "native-ie/no-let-in-for-in-loop": "error",
        "native-ie/no-arrow-functions": "error",
        "native-ie/no-class": "error",
        "native-ie/no-super": "error",
        "native-ie/no-generators": "error",
      }
    },
    ie10: {
      env: {
        browser: true,
        es6: true,
      },
      plugins: ["native-ie"],
      rules: {
        "native-ie/no-default-function-parameters": "error",
        "native-ie/no-rest-parameters": "error",
        "native-ie/no-spread-syntax-for-iterable-objects": "error",
        "native-ie/no-object-literal-extensions": "error",
        "native-ie/no-for-of-loops": "error",
        "native-ie/no-octal-and-binary-literals": "error",
        "native-ie/no-template-literals": "error",
        "native-ie/no-regexp-y-and-u-flags": "error",
        "native-ie/no-destructing": "error",
        "native-ie/no-unicode-code-point-escapes": "error",
        "native-ie/no-new-target": "error",
        "native-ie/no-const": "error",
        "native-ie/no-let": "error",
        //"native-ie/no-const-in-for-in-loop": "error",
        //"native-ie/no-let-in-for-in-loop": "error",
        "native-ie/no-arrow-functions": "error",
        "native-ie/no-class": "error",
        "native-ie/no-super": "error",
        "native-ie/no-generators": "error",
      }
    },
  }
}
