function reverse_number(num) {
  let remainder;
  let array = [];

  while (num !== 0) {
    remainder = num % 10;
    array.push(remainder);
    num = Math.floor(num / 10);
  }

  console.log(Number(array.join('')));
}

reverse_number(123);
