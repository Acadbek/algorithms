// You're given three integers, a, b and c. It is guaranteed that two of these
// integers are equal to each other. What is the value of the third integer?

// Example

// For a = 2, b = 7, and c = 2, the output should be
// solution(a, b, c) = 7.

// The two equal numbers are a and c.The third number(b) equals 7, which is the answer.

function solution(a, b, c) {
  if (a === b) return c;
  else if (c === b) return a;
  else if (c === a) return b;
}

const solution2 = (a, b, c) => a ^ b ^ c // optimize way


solution(2, 2, 7)

console.log(2 ^ 7);
