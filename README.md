<div align="center">
  <h1>has-version</h1>
  <a href="https://npmjs.com/package/has-version">
    <img alt="NPM" src="https://img.shields.io/npm/v/has-version.svg">
  </a>
  <a href="https://github.com/bconnorwhite/has-version">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/has-version.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/has-version?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/has-version.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/has-version">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/has-version?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Check if NPM has the version of a given package.

## Installation

```bash
yarn add has-version
```

```bash
npm install has-version
```

## API

### Usage

```ts
import hasVersion from "has-version";

hasVersion("chalk", "1.0.0").then((result) => {
  console.log(result); // true
});

hasVersion("chalk", "999.999.999").then((result) => {
  console.log(result); // false
});

hasVersion("a-package-that-doesnt-exist", "1.0.0").then((result) => {
  console.log(result); // undefined
});
```

### Types
```ts
import hasVersion from "has-version";

function hasVersion(name: string, version: string): Promise<boolean | undefined>;
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/has-version.svg"></h2>

- [cross-fetch-json](https://www.npmjs.com/package/cross-fetch-json): Universal fetch API that only returns JSON

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/has-version.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/has-version.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
