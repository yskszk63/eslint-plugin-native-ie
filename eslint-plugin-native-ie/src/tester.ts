// test only.
// eslint-disable-next-line node/no-unpublished-import
import { TSESLint } from "@typescript-eslint/experimental-utils";
export default new TSESLint.RuleTester({
  parser: require.resolve("espree"),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "script",
  },
});
