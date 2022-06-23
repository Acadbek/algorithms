
function spongeMeme(sentence) {
	function sortString(str) {
		let lower = str.toLowerCase()
		for(let i = 0; i <	lower.length; i++) {
			if(i % 2 == 0) {
				console.log(lower[i].toUpperCase())
			}
			else{
				console.log(lower[i])
			}
		}
	}
		sortString(sentence)
}


spongeMeme('StOp mAkInG SpOnGeBoB MeMeS')

// StOp mAkInG SpOnGeBoB MeMeS