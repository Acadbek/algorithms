// function anagrams(word, words) {
//     if(word.split('').reverse().join('') === words.find((w) => w.split('').reverse().join(''))) {
// 			console.log(true)
//     }else{
//       console.log(false)
//     }
// }

//   anagrams('as', ['aabb', 'abcd', 'bbaa', 'dada', 'sa'])

// function anagrams(word, words) {
// 	if(words.map((w) => w === word === true)){
// 		console.log(true)
// 	}else if(words.find((w2) => console.log(w2))) {

// 	}
// }

function anagrams(word, words) {
	if(words.find((w) => w === word === true)){
		console.log(true)
	}else{
		console.log(false)
	}
}

anagrams('salom', ['molas', 'scalomm', 'sasasa'])

// no completete solution but it works for me :)