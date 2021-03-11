/**
 * 3. 实现 setInterval
 * 利用 setTimeout 实现 setInterval
 * 利用 clearTimeout 实现 clearInterval
 */

/**
 * @param {Function} callback
 * @param {number} duration
 * @returns {number}
 * @example
 * mySetInterval(()=> {
 *   console.log('xxx');
 * }, 200);
 */
type Timeout = ReturnType<typeof setTimeout>;

interface MyTimeout {
  id(): Timeout | null;
}

function mySetInterval(callback: () => void, duration: number) {
  let timeoutId: Timeout | null = null;

  const myTimeoutId: MyTimeout = {
    id: () => timeoutId,
  };

  const loop = () => {
    timeoutId = setTimeout(() => {
      callback();
      loop();
    }, duration);
  };

  loop();

  return myTimeoutId;
}

function myClearInterval(myIntervalId: MyTimeout) {
  const timeoutId = myIntervalId.id();
  if (timeoutId !== null) {
    clearTimeout(timeoutId);
  }
}

/**
 * @param {number} timer
 * @returns {void}
 * @example
 * const timer = mySetInterval(()=> {
 *   console.log('xxx');
 * }, 200);
 * setTimeout(() => {
 *   myClearInterval(timer);
 * }, 1000);
 */

export { mySetInterval, myClearInterval };
