This repo contains an exploration of different methods for calculating the _nth_ number in the Fibonacci sequence.

For the purpose of these algorithms, I am using the version of the Fibonacci sequence that begins with 0, 1, and expecting the user input to be 0-indexed.

User input values that are negative numbers are treated as invalid and the functions will return undefined.

To test the relative performance of the different approaches, I have included the `runner.js` file which, executed with node, profiles the functions for a set input value and logs out the results and the duration of each function execution.