const isPerfectSquare = (num) => {
	for(let i = 1; i * i <= num; i++) {
		if(i === num) console.log(true)
	}
	return false
}

isPerfectSquare(23)