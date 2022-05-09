var encryptThis = function(text) {
	const charCodes = map.call(text, (x) => x.charCodeAt(0));
	console.log(charCodes)
}
encryptThis('A wise old owl lived in an oak')

let asci = 'A'.charCodeAt(0)
// console.log(asci)