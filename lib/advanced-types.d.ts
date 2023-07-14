/// <reference types="chai" />

declare namespace Chai {
  // For BDD API
  interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
    posixPath(path: string): Assertion
  }
}
