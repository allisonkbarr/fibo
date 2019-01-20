// recursively finds the nth fibonacci number using memoization to avoid repeat calculations
// more efficient than the rescursiveFibonacci function without memoization,
// but shares the fault of not being tail call optimized
// this function will fail for high values of n because it will overflow the stack
// user inputs the n value based on 0 index

function memoizedFibonacci() {
  let cache = {
    0: 0,
    1: 1
  }
  
  return function nthFibonacci(n) {
    if (n < 0) {
      return
    }

    if (cache.hasOwnProperty(n)) {
      return cache[n]
    }
    
    const newResult = nthFibonacci(n - 1) + nthFibonacci(n - 2)
    cache[n] = newResult
    
    return newResult
  }
}

module.exports = memoizedFibonacci
