// recursively finds the nth fibonacci number using memoization to avoid repeat calculations
// more efficient than the rescursiveFibonacci function without memoization,
// but shares the fault of not being tail call optimized
// this function will fail for high values of n because it will overflow the stack
// user inputs the n value based on 0 index

function memoizedFibonacci() {
  let cache = [0, 1]
  
  return function nthFibonacci(n) {
    if (n < 0) {
      return
    }
    const cacheLength = cache.length;

    if (cacheLength > n) {
      return cache[n]
    }
    
    let previous
    let nextPrevious
    if (cacheLength === n) {
      previous = cache[n - 1]
    } else {
      previous = nthFibonacci(n - 1)
    }
    if (cacheLength >= n - 1) {
      nextPrevious = cache[n - 2]
    } else {
      nextPrevious = nthFibonacci(n - 2)
    }

    const newResult = previous + nextPrevious
    cache.push(newResult)
    
    return newResult
  }
}

module.exports = memoizedFibonacci
