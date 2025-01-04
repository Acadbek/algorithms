function longestCommonPrefix(strs) {
	if (!strs.length) return '';

	let base = strs[0];
	let res = ''

	for (let i = 0; i < base.length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (base[i] !== strs[j][i]) {
				return res
			}
		}
		return res += base[i]
	}
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
