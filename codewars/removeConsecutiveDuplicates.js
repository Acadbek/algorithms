const removeConsecutiveDuplicates = s => {
	let words = s.split(' ')
	let result = ''
	for (let i = 0; i < words.length; i++) {
		if (words[i] !== words[i + 1]) {
			result += `${words[i]} `
		}
	}
	console.log(result)
}

removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")