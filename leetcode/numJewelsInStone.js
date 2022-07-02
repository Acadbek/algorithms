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