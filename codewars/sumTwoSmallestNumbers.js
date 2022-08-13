function sumTwoSmallestNumbers(numbers) {
	return numbers.sort((a, b) => a - b).slice(0, 2).reduce(function (a, b) {
		return a + b
	})
}

sumTwoSmallestNumbers([3, 87, 45, 12, 7])