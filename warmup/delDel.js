// Given a string, if the string "del" appears starting at index 1, return a string where that 
// "del" has been deleted. Otherwise, return the string unchanged.

// Examples

// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel

let str = 'abcdel';

function delDel(x) {
	if(x.substring(1,4) === 'del') {
		return str.replace('del', '')
	}else{
		return str
	}
}

delDel(str)