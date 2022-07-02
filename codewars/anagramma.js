function anagram(a, b) {
	console.log(a.split('').sort().join('') === b.split('').sort().join(''))
}
anagram('asadbek', 'kaeasdb')




// another leetcode problem

// function mySqrt(x) {
// 	console.log(Math.floor(Math.sqrt(x)))
// }

// mySqrt(427)


// another leetcode problem
function defangIpAdd(add) {
	console.log(add.split('.').join('[.]'))
}

defangIpAdd('1.1.1.1')


// another problem
let k = 4
function someFunc(str) {
	console.log(str.split(' ').splice(0, 4).join(' '))
}

someFunc('hello every body whats up')

const numJewelsInStone = (jewels, stones) => {
	let jewelsArr = jewels.split('')   // ['a', 'A']
	let stonessArr = stones.split('')   // ['A', 'a', 'f', 'd', 's', 'f', 'a', 'A'	]
	let numOfJewels = 0
	jewelsArr.forEach(jewel => {
		for(let i = 0; i < stonessArr.length; i++) {
			if(jewel === stones[i]) {
				console.log(numOfJewels += 1)
			}
		}
	});
}

numJewelsInStone('aA', 'o')