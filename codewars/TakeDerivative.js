// This function takes two numbers as parameters, the first 
// number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from 
// the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be 
// truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. 
// It should output "56x^7", the first number 56 being the product of the two numbers, 
// and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 

// -----------------------------------------------------------------------------------

// UZBEK

// Bu funktsiya parametr sifatida ikkita raqamni oladi, birinchi raqam koeffitsient, 
// ikkinchi raqam esa ko'rsatkichdir.

// Sizning funktsiyangiz ikkita raqamni ko'paytirishi kerak va keyin ko'rsatkichdan 1 ni 
// ayirish kerak. Keyin u ifodani chop etishi kerak 
// (masalan, 28x ^ 7). "^1"ko'rsatkich = 2 bo'lganda kesilmasligi kerak.

// Eslatmalar:

// Ushbu funktsiyaning chiqishi satr bo'lishi kerak
// Ko'rsatkich hech qachon 1 bo'lmaydi va hech bir raqam 0 bo'lmaydi.


function derive(coefficient, exponent) {
	if (coefficient && exponent === 0) {
		return
	}
	else {
		let result = coefficient * exponent
		let decre = exponent - 1
		console.log((result + 'x' + '^' + decre).toString());
	}
}
// -----------------------------------------
// bu 2- yol
function derive2(coefficient, exponent) {
	return `${coefficient * exponent}x^${exponent - 1}`
}

// 56x^7" 
derive(5, 9)
derive2(4, 7)