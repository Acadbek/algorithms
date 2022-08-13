//[English]

// Create a function that returns the sum of the two lowest positive 
// numbers given an array of minimum 4 positive integers. No floats or
// non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// ----------------------------------------------------------------------------------------------

// [UZBEK]

// Minimal 4 ta butun sonli massiv bor, ular ichida 2ta eng kichiklarini 
// yig'indisi toping.


// 1 - functionda sort(), slice(), reduce() ishlatilgan.
// 2 - functionda sort() methodini o'zi ishlatilgan.

function sumTwoSmallestNumbers(numbers) {
	return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => {
		console.log(a + b);
	})
}

sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])



const sumTwoSmallestNumbers2 = (nums) => {
	let [a, b] = nums.sort((a, b) => a - b)
	console.log(a + b);
}

sumTwoSmallestNumbers2([3, 87, 45, 12, 7, 1])