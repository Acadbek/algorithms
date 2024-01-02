// For example, when an array is passed like 
// [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}


sumTwoSmallestNumbers([19, 5, 42, 2, 77])
