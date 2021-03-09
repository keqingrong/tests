import { mySetInterval, myClearInterval } from '../timer';

jest.useFakeTimers();

test('timer', () => {
  const callback = jest.fn();

  const intervalID = mySetInterval(callback, 1000);

  expect(callback).not.toBeCalled();

  jest.runOnlyPendingTimers();

  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);

  jest.runOnlyPendingTimers();

  expect(callback).toHaveBeenCalledTimes(2);

  jest.runOnlyPendingTimers();

  expect(callback).toHaveBeenCalledTimes(3);

  myClearInterval(intervalID);

  jest.runOnlyPendingTimers();
  expect(callback).toHaveBeenCalledTimes(3);
  // FIXME: testEnvironment 为 "node" 时，定时器没有被清除，"jsdom" 正常
});
