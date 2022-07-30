// Return true if the given string begins with 'mix', except the 'm' can be 
// anything, so 'pix', '9ix' .. all count.

// Examples

// mixStart('mix snacks') → true
// mixStart('pix snacks') → true
// mixStart('piz snacks') → false

// ---------------------------------------------------------------------------------------------------

// Uzbek : 
// Agar berilgan satr "mix" bilan boshlansa, true qiymatini qaytaring, bundan tashqari "m" 
// har qanday bo'lishi mumkin, shuning uchun "pix", "9ix" .. hammasi hisobga olinadi.

// Misollar

// mixStart('mix snacks') → true
// mixStart('pix snacks') → true
// mixStart('piz snacks') → false

let str = 'mix snacks'

function mixStart(x){
	if(x.substring(1, 3) === 'ix') {
		console.log(true);
	}else{
		console.log(false);
	}
}

mixStart(str)