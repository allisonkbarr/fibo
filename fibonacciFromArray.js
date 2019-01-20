// first pass at a function for finding the nth number in the Fibonacci sequence
// user inputs the n value based on 0 index
// function builds an array of the length of the user input + 1 and returns the nth value in that array
// memory required increases arithmetically - aka O(N)

function buildFiboSequence(length) {
  if (length === 0) {
    return [];
  } else if (length === 1) {
    return [0]
  }

  const fiboSequence = [0, 1]
  for (let i = 2; i < length; i++) {
    const nextNum = fiboSequence[i - 1] + fiboSequence[i - 2]
    fiboSequence.push(nextNum)
  }
  return fiboSequence
}

function findFibo(userN) {
  if (userN < 0) {
    return
  }

  const fiboSequence = buildFiboSequence(userN + 1)
  
  return fiboSequence[userN]
}

module.exports = findFibo
