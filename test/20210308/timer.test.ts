import { mySetInterval, myClearInterval } from '../../src/20210308/timer';

jest.useFakeTimers();

const delay = (ms: number) => {
  return new Promise<void>(resolve => setTimeout(() => resolve(), ms));
};

test('timer', async () => {
  const callback = jest.fn();

  const intervalID = mySetInterval(callback, 100);

  await delay(1000);

  myClearInterval(intervalID);

  jest.runAllTimers();

  expect(callback).toBeCalled();
  expect(callback).toBeCalledTimes(10);

  // Timeout - Async callback was not invoked within the 5000 ms timeout
  // specified by jest.setTimeout.Timeout - Async callback was not invoked
  // within the 5000 ms timeout specified by jest.setTimeout.
});
