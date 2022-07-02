function anagram(a, b) {
	console.log(a.split('').sort().join('') === b.split('').sort().join(''))
}

anagram('asadbek', 'kaeasdb')
