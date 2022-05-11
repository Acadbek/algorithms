var encryptThis = function(text) {
	return text.split(' ').map(function(word) {
		console.log(word, 'word')

		let fir1 = word.slice(1, 2)
		console.log(fir1, 'fir1')

		let last = word[word.length - 1]
		console.log(last, 'last')

		var letters = word.split('');
		console.log(letters, 'letters');

		var firstLetter = letters.shift().charCodeAt(0);
		console.log(firstLetter, 'charCodeAt');

		var newWord = firstLetter + letters.join('');
		console.log(newWord, 'result ===============');
	}).join(' ');
}

encryptThis('A wise')

// no complete