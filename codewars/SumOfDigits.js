let num = BigInt(555)

const res = (c) => {
	return c.toString().split('').reduce((a, b) => (+a) + (+b), 0)
}

function digital_root(n) {
	console.log(res(n))
}

digital_root(num)
