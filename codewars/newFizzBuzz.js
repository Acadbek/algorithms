function fizzBuzz(x, y) {
  const array = [];

  for (let i = x; i < y + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) array.push('FizzBuzz');
    else if (i % 5 === 0) array.push('Buzz');
    else if (i % 3 === 0) array.push('Fizz');
    else array.push(i);
  }
  return array;
}

fizzBuzz(1, 18);