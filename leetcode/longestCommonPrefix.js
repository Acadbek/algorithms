// Write a function to find the longest common prefix 
// string amongst an array of strings.
// If there is no common prefix, return an empty string "".


function longestCommonPrefix(strs) {
    let arr = []
    for (let i = 0; i < strs.length; i++) {
        let letter = strs[i].split('')
        // console.log(strs[i].charAt(letter[0]) === strs[i].charAt(letter[0]))
        // console.log(letter[0])
    }


    strs.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            // console.log(element[0] === element[i])
            if (element[0] === element[i]) {
                arr.push(element[0] === element[i] ? element[i] : '')
                console.log(arr)
            }
        }
    });
};

longestCommonPrefix(['asad', 'asal', 'asab'])