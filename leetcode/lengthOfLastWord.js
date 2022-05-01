// Given a string s consisting of some 
// words separated by some number of spaces, 
// return the length of the last word in the string.
// A word is a maximal substring consisting of non-space 
// characters only.

function lengthOfLastWord(w) {
    let word = w.trim().split(' ').pop()
    console.log(word.length, 'lengthOfLastWord.js')
}
lengthOfLastWord('who is')