var romanToInt = function(s){
	const roman = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	}
	// c(roman)
	// c(s)

}
function c (prop, string) {
	console.log(prop, string)
} 

// romanToInt('III')

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
			return sum+ele.amountString
		}, 0)
		c(sum)
	});
}

sumNumber(json)
