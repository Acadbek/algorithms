// Given 2 int values, return whichever value is nearest to the value 
// 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value 
// of a number.

// Examples

// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0

// --------------------------------------------IN UZBEK----------------------------------

// 2 int qiymati berilgan bo'lsa, qaysi qiymat 10 qiymatiga yaqin bo'lsa, uni qaytaring yoki 
// teng bo'lsa 0 ni qaytaring. E'tibor bering, Math.abs(n) raqamning mutlaq qiymatini 
// qaytaradi.

// Misollar

// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0

function close10(a, b) {
  const ten = 10

  const birinchi = ten - a
  const ikkinchi = ten - b

  if (a < 0 || b < 0) {
    return Math.min(a, b)
  }

}

console.log(close10(-8, 2));

// 1, 3 | 2, 5 | -4, -3 | 6, 9 | 7, 1 | 9, 4

// 10 - a = 9
// 10 - b = 7

// 10 - a = 8
// 10 - b = 5

// 10 - a = 6
// 10 - b = 9

// 10 - a = 14
// 10 - b = 13

