// 2nd pass at a function that finds the nth number in the Fibonacci sequence
// improvement over fibonacciFromArray as it does not unnecessarily store the calculated values
// as it runs through the loop to the desired value

function findFiboFromLoop(n) {
  if (n < 0) {
    return
  }
  if (n < 2) {
    return n
  }
  let prev = 0
  let current = 1
  for (let i = 1; i < n; i++) {
    current = prev + current
    prev = current - prev
  }
  return current
}

module.exports = findFiboFromLoop
