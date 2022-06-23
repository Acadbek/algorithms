let num = 5487787777

const res = (c) => {
	return c.toString().split('').reduce((a, b) => (+a) + (+b), 0)
}

function digital_root (n){
	const total = res(n)
	console.log(total, 'first')
	if(total.toString().length > 1) {
		const secondTotal = res(total)
		console.log(secondTotal)
	}
}

digital_root(num)

// !completed