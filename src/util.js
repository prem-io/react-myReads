/**
* @debounce Returns a function, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for N millisecond
* @param {function} fn - function as a parameter
* @param {number} delay - delay in milliseconds
*/

export const debounce = (fn, delay = 1000) => {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};