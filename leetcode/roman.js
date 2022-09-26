function c (prop, info) {
	if(info == undefined) {
		console.log(prop);
	}else{
		console.log(prop, 'info:', info)
	}
} 


var romanToInt = function(s){
	const roman = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	
	c(s.split('').map((value,index,arr) => roman[arr[index - 1]] < roman[value] 
	? (roman[value] - ( 2 * roman[arr[index-1] ])) 
	: (roman[value]))
		.reduce((a, b) => a + b))
}
romanToInt('VIXM');


 // 
	// for(let key in roman){
	// 	return (s.split('').map((val, index, arr) => {
	// 		for(let i = 1; i < arr.length; i++) {
	// 			c(key === arr[index + 1] ? c(key) : false)
	// 		}
	// 		// c(val === key ? c(roman[key]) : false)
	// 		// c(val, index)
	// 	}))
	// }
// const keys = Object.keys(roman)
// return (keys.map((value, index, arr) => {
// 	c(value === s ? c(keys[value]) : false)
// }))





















const user = {
	age: 41,
	child: {
		age: 28,
		child: {
			age: 34,
			child: {
				age: 44
			}
		}
	}
}
// 147
const deepFilter = (obj, filter) => {
	let sum = 0;
	c(obj, 'main')
	for(let key in obj) {
		const val = obj[key];
		c(typeof val, 'type')
		// let res = val.filter((value) => c(value, 'filtered'))
		// if(typeof val === 'number') {
		// 	c(val, 'number')
		// 	sum+=val
		// }
		// c(sum, 'result')

		if(typeof val === 'object') {
			deepFilter(val, filter)		
		}
	}
}

// deepFilter(user)

var json = {
	data: [
		{
			jobNumber: 3,
			jobTasks: [
				{
					amountString: 44
				},
				{
					amountString: 44
				},
				{
					amountString: 44
				},
			]
		}
	]
}

const sumNumber = (data) => {
	data.data.forEach(element => {
		var sum = element.jobTasks.reduce(function(sum, ele) {
			c(ele, sum)
			return sum+ele.amountString
		}, 0)
		c(sum)
	});
}

// sumNumber(json)
