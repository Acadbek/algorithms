function sumTwoSmallestNumbers(numbers) {
	let a = numbers.sort((a,b) => a - b).slice(0, 1)
	let b = numbers.sort((a,b) => a - b).slice(1, 2)
	if(Number(a), Number(b) > -1) {
		console.log('output:', Number(a) + Number(b))
	}
}

  sumTwoSmallestNumbers([14, 2, 44, 2, 1, 3])