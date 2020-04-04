export const debounce = (fn, delay = 1000) => {
  let timeout
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn.apply(null, args)
    }, delay)
  }
}