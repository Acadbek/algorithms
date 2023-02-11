// Given a string, take the first 2 chars and return the string 
// with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' 
// chars are there.

// Examples

// front22('kitten') → kikittenki
// front22('Ha') → HaHaHa
// front22('abc') → ababcab

// -------------------------------------in UZBEK-------------------------------------------

// String beriladi va osha stringni boshidagi 2ta xarfni olib stringning oldiga va orqasiga qoshgan 
// xolda qaytaring

// Masalan: 'xabar' => xaxabarxa chunki boshidagi 2ta xarf 'xa' ga teng, uni olib 'xabar'
// sozini boshiga va oxriga qoshib qaytardim
// 2- misol: 'piyola' => 'pipiyolapi' ga

function front22(str) {
	let s = str.substring(0, 2)
	console.log(s + str + s);
}

// 2 - yoli
function front222(str) {
	console.log(str.substring(0, 2) + str + str.substring(0, 2));
}

front22('xabar')
front222('piyola')