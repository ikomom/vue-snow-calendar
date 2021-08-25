/**
 * 节流
 * @param func
 * @param time
 * @returns {(function(...[*]=): void)|*}
 */
export const throttle = (func = () => {}, time = 1000) => {
  let delay = 0
  return (...params) => {
    const now = +new Date()
    if (now - delay > time) {
      func.apply(this, params)
      delay = now
    }
  }
}

/**
 * 分割数组
 * @param {Array} item
 * @param {Number} size
 * @returns {*[]|*}
 */
export function chunk(item, size) {
  if (item.length <= 0 || size <= 0) {
    return item;
  }

  let chunks = [];

  for (let i = 0; i < item.length; i = i + size) {
    chunks.push(item.slice(i, i + size));
  }

  return chunks
}
