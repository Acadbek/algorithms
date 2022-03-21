// Complete the solution so that it splits the string into
// pairs of two characters. If the string contains an odd 
// number of characters then it should replace the missing 
// second character of the final pair with an underscore ('_').


// Examples:
//   * 'abc' =>  ['ab', 'c_']
//   * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str) {
    console.log(str.split('').map((x, i) => i % 2 === 0 ? str.slice(i, i + 2) : str.slice(i, i + 1) + '_'));
}
solution('nosirjonov')