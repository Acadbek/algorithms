// Return true if the given non-negative number is a multiple of 3 or a 
// multiple of 5. (Hint: Use the % 'mod' operator)

// Examples

// or35(3) → true
// or35(10) → true
// or35(8) → false

// ----------------------------- IN UZBEK ----------------------------
// son beriladi va son 3, 5 ga bolinganda qoldiq qolmasa true bolsin yoqsa false

function or35(n) {
  return n % 3 === 0 || n % 5 === 0 ? true : false
}