function c(prop, info) {
	if (info == undefined) {
		console.log(prop);
	} else {
		console.log(prop, 'info:', info)
	}
}

const romanToInteger = (s) => {
	let roman = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	}

	let total = 0;

	for (let i = 0; i < s.length; i++) {
		if (roman[s[i]] < roman[s[i + 1]]) {
			total -= roman[s[i]]
		} else {
			total += roman[s[i]]
		}
	}
	return total
}

c(romanToInteger('MCMXCIV'), 'res'); // 1994
