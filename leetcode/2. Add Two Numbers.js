// var addTwoNumbers = function(l1, l2) {
// 	console.log(l1, l2)
// };


// const addTwoNumbers = (l1, l2) => {
// }
		
function addTwoNumbers(l1, l2) {
	let digits = +l1.reverse().join('') + +l2.reverse().join('')
	return String(digits).split('').reverse()
}

addTwoNumbers([2,4,3], [5,6,4])