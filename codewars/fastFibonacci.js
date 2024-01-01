function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}

function fib2(num) {
  if (num === 1) return 1;
  return fib(num - 1) + num
}

// not complited
console.log(fib2(1000));










