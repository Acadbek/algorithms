// Given two int values, return their sum. Unless the two values are the same, 
// then return double their sum.

// Examples

// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

// -------------------------------------------------------------------

// Uzbek:
// Ikki int qiymat berilgan bo'lsa, ularning yig'indisini qaytaring.
// Ikki qiymat bir xil bo'lmasa, ularning summasini ikki baravar qaytaring.

// Misollar

// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

function sumDouble(a, b){
	if(a !== b) {
		console.log(a + b);
	}else if(a === b) {
		console.log((a + b) * 2);
	}
}

sumDouble(2, 2)