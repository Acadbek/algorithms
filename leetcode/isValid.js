var isValid = function (s) {
	const leftSymbols = [];
	for (let i = 0; i < s.length; i++) {
			if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
					leftSymbols.push(s[i]);
			}
			else if (s[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '(') {
					leftSymbols.pop();
			} else if (s[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '{') {
					leftSymbols.pop();
			} else if (s[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '[') {
					leftSymbols.pop();
			}
			else {
					return false;
			}
	}
	console.log(leftSymbols.length === 0);
};

isValid("()")
