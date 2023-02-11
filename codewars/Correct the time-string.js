let specialChar = /[`!@#$%^&*()_+\-=\[\]{};';"\\|,.<>\/?~]/
let letters = /[a-zA-Z]/

function findLettersAndSpecialChar(str) {
	return str.match(specialChar) || str.match(letters) || !str.includes(":")
}

function timeCorrect(timestring) {
	if (isNaN(timestring) && timestring.trim() === '') {
		return '';
	} else if (timestring === null || findLettersAndSpecialChar(timestring)) {
		return null;
	} else {
		let h = timestring.split(':')[0]
		let m = timestring.split(':')[1]
		let s = timestring.split(':')[2]



		// if (s > 59) {
		// 	m + 1
		// }

		if (h > 23) {
			h = "00"
		}
		if (m > 59) {
			m > 59 ? h + 1 : ''
			m = "00"
		}
		if (s > 59) {
			s = "00"
		}

		console.log(h, m, s)
	}
}

timeCorrect("21:58:45")

// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01" 

// Test.assertEquals(timeCorrect(null), null);
// Test.assertEquals(timeCorrect(""), "");

// // Invalid Format
// Test.assertEquals(timeCorrect("001122"), null);
// Test.assertEquals(timeCorrect("00;11;22"), null);
// Test.assertEquals(timeCorrect("0a:1c:22"), null);


// Test.assertEquals(timeCorrect("09:10:01"), "09:10:01");
// Test.assertEquals(timeCorrect("11:70:10"), "12:10:10");
// Test.assertEquals(timeCorrect("19:99:09"), "20:39:09");
// Test.assertEquals(timeCorrect("19:99:99"), "20:40:39");
// Test.assertEquals(timeCorrect("24:01:01"), "00:01:01");
// Test.assertEquals(timeCorrect("52:01:01"), "04:01:01");

// let string = /[a-zA-Z]/
// /^[^a-zA-Z0-9]+$/