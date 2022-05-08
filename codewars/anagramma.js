// function anagrams(word, words) {
//     if(word.split('').reverse().join('') === words.find((w) => w.split('').reverse().join(''))) {
// 			console.log(true)
//     }else{
//       console.log(false)
//     }
// }

//   anagrams('as', ['aabb', 'abcd', 'bbaa', 'dada', 'sa'])

function anagrams(word, words) {
	if(words.map((w) => word === w)){
		console.log(word)
	}else if(words.find((w) => console.log(w))) {

	}
}

anagrams('salom', ['molas', 'salomm', 'sasasa'])