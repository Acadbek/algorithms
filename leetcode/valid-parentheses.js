// var isValid = function (s) {
//     let stack = []

//     let pairs = {
//         '{': '}',
//         '[': ']',
//         '(': ')'
//     }

//     for (const bracket of s) {
//         if (Object.keys(pairs).includes(bracket)) {
//             stack.push(bracket)
//         } else if (stack.length === 0 || bracket !== pairs[stack.pop()]) {
//             return false
//         }
//     }

//     return stack.length === 0
// };

var isValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i].charCodeAt(0)

        if (char === 40 || char === 123 || char === 91) {
            stack.push(char);
        } else {
            if (stack.length === 0 || Math.abs(char - stack.pop()) > 2) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([])"));     // true
console.log(isValid("{[()]}"));   // true
console.log(isValid("{[(])}"));   // false



// let test1 = "("
// let test2 = "()[]{}"
// let test3 = "(]"
// let test4 = "([])"

// console.log(isValid(test2));