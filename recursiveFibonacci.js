// recursive approach to finding the nth fibonacci number
// not tail call optimized because it calls nthFibonacci twice in the return
// therefore will overflow the call stack at high n values
// user inputs the n value based on 0 index

function nthFibonacci(n) {
  if (n < 0) {
    // this is an invalid input
    return
  }
  if (n < 2) {
    return n
  }
  return nthFibonacci(n - 1) + nthFibonacci(n - 2)
}

module.exports = nthFibonacci
