// Given a string, return a string made of the first 2 chars (if present), however include first char 
// only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

// Examples

// startOz('ozymandias') → oz
// startOz('bzoo') → z
// startOz('oxx') → o

// --------------------------------------------------------------

// Uzbek: Satr berilgan boʻlsa, birinchi 2 ta belgidan iborat boʻlgan satrni qaytaring
// (agar mavjud boʻlsa), lekin birinchi belgi “o” boʻlsa, ikkinchisini esa “z” boʻlsagina kiriting, 
// shuning uchun “ozymandias” “oz” hosil qiladi.

// Misollar

// startOz('ozymandias') → oz
// startOz ('bzoo') → z
// startOz('oxx') → o

function startOz(str) {
	if (str.substring(0, 2) === 'oz') {
		return 'oz';
	} else if (str.substring(0, 1) === 'o') {
		return 'o';
	} else if (str.substring(1, 2) === 'z') {
		return 'z';
	}
	return '';
}

startOz('oxx')