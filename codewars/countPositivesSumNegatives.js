// function some(inp) {

// 	let pos = [];
// 	let sum = 0;

// 	for( let i = 0; i < inp.length; i++ ) {
// 		if( inp[i] >= 0 ) {
// 			pos.push(inp[i]);
// 		} else {
// 			sum += inp[i];
// 		}
// 	}
// 	console.log([pos.length, sum]);
// }

// some( [1, 3, 4, 5, -1, -3, -7, -1] )

// function countPositivesSumNegatives (a) {
// 	if (!a || !a.length) return []
  
// 	let pos = a.filter(x => x > 0),
// 		neg = a.filter(x => x <= 0)
  
// 	console.log([pos.length, Math.floor(neg.reduce((s,v)=>s+v,0))])
//   }

//   countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20])


function countPositivesSumNegatives(input) {
    return (input && input.length) ? [input.filter(num => num > 0).length, input.filter(num => num < 0).reduce((acc, cur) => acc + cur, 0)] : []
}
