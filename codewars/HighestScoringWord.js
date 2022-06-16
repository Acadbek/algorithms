let word1 = 'man i need a taxi up to ubud',
	word2 = 'aa b';


let alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };

function high2(x) {
	let letter = '';
	let number = 0;
	let array = x.split('')
	// console.log(array)

	for(let i = 0; i < x.length; i++) {
		letter = array[i]
		number = alphabet[letter]
		// console.log(number)
	}
}

high2(word1)

// !completed

for (let i= 'a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
	const alphabetMap = {};
	console.log(alphabetMap[i] = j);
}