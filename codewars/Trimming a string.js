function trim(str, size) {
	if (str.length > size) {
		let wors = str.slice(0, size);
		console.log(wors + '...');
	} else {
		console.log(str);
	}
}

trim('Creating kata is fun', 14)

// Creating kata is fun", 14),"Creating ka...