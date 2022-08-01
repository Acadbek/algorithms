// Given a year, return the century it is in. The first century 
// spans from the year 1 up to and including the year 100, the second - from 
// the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.

// Uzbek:
// -------------------------------------------------------------------------------------

// Bir yil berilgan bo'lsa, u yashayotgan asrni qaytaring.
// Birinchi asr 1 yildan 100 yilgacha, ikkinchi asr 101 yildan 200 yilgacha va hokazolarni 
// o'z ichiga oladi.

// Misol:

// year = 1905, chiqish kerak = 20;
// year = 1700, chiqish kerak = 17.


function solution(year) {
  console.log(Math.ceil((year / 100)))
}
solution(2022)