// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// ---------------------------------------------------------------------------------------------------

// Uzbek
// Sizning vazifangiz n musbat butun sonning eng yaqin kvadrat raqamini topishdir.

// Kvadrat sonlar: 

// 0 (=0×0)
// 1 (=1×1)
// 4 (=2×2)
// 9 (=3×3)
// 16 (=4×4)
// 25 (=5×5)

const nearest_sq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
nearest_sq(122)

// Math.pow = 2ta argument qabul qiladi, birinchi arg ga son beriladi 2 arg esa 1 argni ozida 
// nechi son bolsa shuncha bir biriga kopaytiradi Masalan: Math.pow(5, 5) bolsa 5 * 5 = 25 bolmaydi
// 5 ni 5 martta oziga kopaytiradi javob 3125 chiqadi. 
// Buni 5**2 bu usul bilan ham yozsa boladi

// Math.round = kasr sonni butun eng yaqin butun qismini qaytaradi --> 5.3 = 5
// 4.7 = 5

// Math.sqrt = sonni kvadrat ildizini qaytaradi
// Math.sqrt(25) = 5