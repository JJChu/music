export function shuffle (arr) {
  let _arr = arr.slice()
  let m = _arr.length
  let t, i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = _arr[m]
    _arr[m] = _arr[i]
    _arr[i] = t
  }
  return _arr
}

export function debounce (func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
