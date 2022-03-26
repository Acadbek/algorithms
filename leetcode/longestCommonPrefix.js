// Write a function to find the longest common prefix 
// string amongst an array of strings.
// If there is no common prefix, return an empty string "".


// function longestCommonPrefix(strs) {
//     let arr = []
//     for (let i = 0; i < strs.length; i++) {
//         let letter = strs[i].split('')
//         // console.log(strs[i].charAt(letter[0]) === strs[i].charAt(letter[0]))
//         // console.log(letter[0])
//     }


//     strs.forEach(element => {
//         for (let i = 0; i < element.length; i++) {
//             // console.log(element[0] === element[i])
//             // if (element[0] === element[i]) {
//             arr.push(element[0] === element[i] ? element : '')
//             // }
//         }
//     });
//     console.log(arr)
// };

// longestCommonPrefix(['sas', 'cas', 'fas'])


function longestCommonPrefix(strs) {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first string
    for (let i = 0; i <= strs[0].length; i++) {
        // Loop through the other strings
        for (let j = 1; j < strs.length; j++) {
            // Check if this character is also present in the same position of each string
            if (strs[0][i] !== strs[j][i]) {
                // If not, return the string up to and including the previous character
                return strs[0].slice(0, i);
            }
        }
    }
    console.log(strs[0]);
};

longestCommonPrefix('asad', 'asc', 'asew')