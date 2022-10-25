var longestCommonPrefix = function(strs) {
	let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
	for (let str of strs) {
		while (str.slice(0, prefix.length) != prefix) {
			prefix = prefix.slice(0, -1);
		}
	}
	return (prefix);
};

let res = longestCommonPrefix(["flower","flow","flight"]);
