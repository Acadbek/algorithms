// Given a month as an integer from 1 to 12, return to which 
// quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// -----------------------------------  Uzbek  -----------------------------------------------

// 1dan 12 gacha butun son beriladi, siz bu sonni yilning qaysi choragiga tegishli ekanini toping

// Masalan: 
//    2-oy (Fevral) 12 ning 1- choragidagi son
//    5-oy (May) yilning 2- choragi
//    11-oy (Noyabr) yilning 4- choragi

// 12 / 4 = 3

// 1, 2, 3    = return 1
// 4, 5, 6    = return 2
// 7, 8, 9    = return 3
// 10, 11, 12 = return 4

const quarterOf = (month) => {
	if (month <= 3) {
		return 1;
	}
	if (month <= 6 && month > 3) {
		return 2;
	}
	if (month <= 9 && month > 6) {
		return 3;
	}
	if (month <= 12 && month > 9) {
		return 4;
	}
}

quarterOf(7)