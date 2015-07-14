var fibo = [ 1, 2 ]

var findFibo = function(userN) {
  var n = userN - 1
  for (var i = 1; i < n; i++) {
    var nextNum = fibo[i] + fibo[i-1]
    fibo.push(nextNum)
  }
  return fibo[n]
}

var findFibo2 = function(n) {
  var prev = 1
  var current = 2
  for (var i = 2; i < n; i++) {
    current = prev + current
    prev = current - prev
  }
  return current
}

var add = function(x, y) { return x + y }

var take = function(n, arr, process) {
  
}
