// Given a string, if the string "del" appears starting at index 1, return a string where that 
// "del" has been deleted. Otherwise, return the string unchanged.

// Examples

// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel


// =======================================================================================================


//  Uzbek: string beriladi agar stringda 'del' xarflari ketmaketligi bolsa va ular 1 indexdan boshlansa
// 'del' ni ochirib tashlang agar 'del' bolsa va u boshqa indexdan boshlansa stringni ozini qaytaring

let str = 'abcdel';

function delDel(x) {
	if(x.substring(1,4) === 'del') {
		return str.replace('del', '')
	}else{
		return str
	}
}

delDel(str)