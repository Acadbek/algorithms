function lengthOfLastWord(w) {
    let word = w.trim().split(' ').pop()
    console.log(word.length, 'lengthOfLastWord.js')
}
lengthOfLastWord('who is')