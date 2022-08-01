// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.

// --------------------------------------------------------------------------------

// Uzbek: 
// Palindrome yoki palindrome emasligini tekshiring

// Masalan:

// "aabaa" = true chunki "aabaa" ni teskarisi ham "aabaa"
// "abac" = false chunki "abac" ni teskarisi "caba"


function solution(inputString) {
  if (inputString.split('').reverse().join('') === inputString) {
    console.log(true);
  } else {
    console.log(false);
  }
}

solution('vvv')