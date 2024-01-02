// In this little assignment you are given a string 
// of space separated numbers, and have to return the
//  highest and lowest number.

function highAndLow(numbers) {
  numbers = numbers.split(' ').sort((a, b) => a - b)

  return `${numbers[numbers.length - 1]} ${numbers[0]}`
}

console.log(highAndLow("1 2 -3 4 5"));  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
