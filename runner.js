const fibonacciFromArray = require('./fibonacciFromArray')
const fibonacciFromLoop = require('./fibonacciFromLoop')
const fibonacciRecursive = require('./recursiveFibonacci')
const fibonacciMemoized = require('./memoizedFibonacci')()

function timeFunction(label, fn, ...args) {
  const startTime = Date.now()
  const result = fn(...args)
  console.log(`Function ${label} returned: ${result}`)
  const endTime = Date.now()
  console.log(`Function ${label} took ${endTime - startTime}ms to complete`)
}

const n = 30
timeFunction('from array', fibonacciFromArray, n)
timeFunction('from loop', fibonacciFromLoop, n)
timeFunction('memoized', fibonacciMemoized, n)
timeFunction('recursively', fibonacciRecursive, n)
