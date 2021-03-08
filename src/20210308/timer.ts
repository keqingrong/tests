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
interface MyTimeout {
  valueOf(): NodeJS.Timeout | null;
}

function mySetInterval(callback: () => void, duration: number) {
  let timeoutId: NodeJS.Timeout | null = null;

  const myTimeoutId: MyTimeout = {
    valueOf: () => timeoutId,
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
  clearTimeout(Number(myIntervalId));
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
