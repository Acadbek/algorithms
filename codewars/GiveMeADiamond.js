function diamond(n) {
	if (n < 0) return null

    if ( n % 2 !== 0 ) {
				let down = false
				let acc = 1
        let res = Array(n).fill("")
				for (let i = 0; i < n; i++) {
					res[i] = res[i] + res[i].padStart(Math.ceil((n-acc)/2), " ") + '*'.repeat(acc) + '\n'
					console.log(res)
					if (down) {
						console.log('subtracting', acc, n)
						acc-=2 
					} else {
						console.log('adding', acc, n)
						acc+=2
						if (acc >= n) {
							down = true
						}
					}
				}
				console.log('--------')
				console.log(res)
				consoleAll(res)
				console.log('--------')
    }else {
      console.log(null)
    }
  }

	function consoleAll(arr) {
		arr.forEach(element => {
			console.log(element)
		});
	}

  diamond(5)
  // diamond(5)
  // diamond(-3)
  // diamond(9)
  // diamond(2)
	//   *
	//  ***
	// *****
	//  ***
	//   *
