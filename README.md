<!-- Love Jest? Please consider supporting our collective: 👉  https://opencollective.com/jest/donate -->

## 🐛 Bug Report

<!-- A clear and concise description of what the bug is. -->

Using `jest.concurrent` along with `jest.retryTimes` makes the test not to be executed again when it fails. [10473](https://github.com/facebook/jest/issues/10473)

## To Reproduce

Steps to reproduce the behavior:

```javascript
let CONCURRENT_RETRIES_COUNT = 0; //Just for the sake of this test! We know we shouldn't rely on globals within concurrent behavior
let SEQUENTIAL_RETRIES_COUNT = 0;
const RETRY_TIMES = 5;

jest.retryTimes(RETRY_TIMES);

describe('concurrent retry', () => {
  it.concurrent(`CONCURRENT_RETRIES_COUNT should be ${RETRY_TIMES}`, () => {
    CONCURRENT_RETRIES_COUNT += 1;
    // console.log(CONCURRENT_RETRIES_COUNT); // just prints once
    expect(CONCURRENT_RETRIES_COUNT).toBe(RETRY_TIMES);
  });

  it(`SEQUENTIAL_RETRIES_COUNT should be ${RETRY_TIMES}`, () => {
    // console.log(SEQUENTIAL_RETRIES_COUNT); // prints 5 times
    SEQUENTIAL_RETRIES_COUNT += 1;
    expect(SEQUENTIAL_RETRIES_COUNT).toBe(RETRY_TIMES);
  });
});
```

## Expected behavior

<!-- A clear and concise description of what you expected to happen. -->

The test should be executed again as many as times set with jest.retryTimes(RETRY_TIMES) when it fails;

## Link to repl or repo (highly encouraged)

<!--
Please provide either a [repl.it demo](https://repl.it/languages/jest) or a minimal repository on GitHub.
Issues without a reproduction link are likely to stall.
-->

https://github.com/juliosampaio/jest-concurrent-retries-issue

## envinfo

<!--
Run npx envinfo --preset jest
Paste the results here:
-->

```
  System:
    OS: Linux 5.3 Linux Mint 19.2 (Tina)
    CPU: (8) x64 Intel(R) Core(TM) i7-8650U CPU @ 1.90GHz
  Binaries:
    Node: 10.15.0 - ~/.nvm/versions/node/v10.15.0/bin/node
    Yarn: 1.21.1 - /usr/bin/yarn
    npm: 6.4.1 - ~/.nvm/versions/node/v10.15.0/bin/npm
  npmPackages:
    jest: ^26.4.2 => 26.4.2
```
