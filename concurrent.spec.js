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
