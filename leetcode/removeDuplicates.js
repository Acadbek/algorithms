var removeDuplicates = function(nums) {
	let sortedArr = nums.slice().sort();
	let result = []	
	for(let i = 0; i < sortedArr.length - 1; i++){
		if(sortedArr[i + 1] == sortedArr[i]){
			result.push(sortedArr[i])
		}
	}
	console.log(result.replace(4), 'result');
};

removeDuplicates([1, 3, 3, 44, 5, 6, 7, 4, 5, 6, 89])

const findDuplicates = (arr) => {
	let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
	// JS by default uses a crappy string compare.
	// (we use slice to clone the array so the
	// original array won't be modified)
	let results = [];
	for (let i = 0; i < sorted_arr.length - 1; i++) {
		if (sorted_arr[i + 1] == sorted_arr[i]) {
			results.push(sorted_arr[i]);
		}
	}
	// console.log(results);
}

// findDuplicates([1,1,3,3,4,5,6,7])

// console.log([3,4,5,6,7,5,4,].slice());