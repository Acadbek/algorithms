// Given an int n, return the absolute 
// difference between n and 21, except return double the absolute difference if n is over 21.

// --------------------------------------UZBEK--------------------------------------------

// Int n berilgan bo'lsa, n va 21 o'rtasidagi mutlaq farqni qaytaring, 
// bundan mustasno, agar n 21 dan ortiq bo'lsa, mutlaq farqni ikki baravar qaytaring.


function diff21(n) {
	if (n > 21) {
		let a = n - 21
		console.log((a + a));
	}
	else {
		console.log(21 - n);
	}
}

diff21(10)