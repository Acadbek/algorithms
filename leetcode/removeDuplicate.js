// var removeDuplicates = function(nums) {
//    return nums.filter((vl, ind) => {
// 		 console.log(nums.indexOf(vl) === ind);
// 	 })
// };

// // console.log(removeDuplicates);

// removeDuplicates([1,1,2])

var arr = [1,1,2,3,3,3,1];

function removeDuplicates(arr) {
	// return arr.filter((item, index) => arr.indexOf(item) !== index);

	return new Set(arr)

	// var unique = []
	// arr.forEach(element => {
	// 	if(!unique.includes(element)) {
	// 		unique.push(element)
	// 	}
	// });
	// console.log(unique); 

}


// console.log(removeDuplicates(arr));

function reversed (str) {
	return str.split('').reverse().join('')
}

console.log(reversed('salom')); 


// console.log(arr.indexOf(1)); // 0 => 0 => true
// console.log(arr.indexOf(1)); // 0 => 1 => false
// console.log(arr.indexOf(2)); // 2 => 2 => true
// console.log(arr.indexOf(3)); // 3 => 3 => true
// console.log(arr.indexOf(3)); // 3 => 4 => false
// console.log(arr.indexOf(3)); // 3 => 3 => true
// console.log(arr.indexOf(1)); // 0 => 6 => false

// let a = [1, 3, 4]
// let b = [1, 5, 4]

// const middleWay = (a, b) => {
// 	console.log(a[1], b[1]);
// }
// middleWay(a, b)