function solution(word) {
    let newWord = word.split(' ')
    let upperLetter = newWord[1].charAt(0).toUpperCase()
    console.log(`${newWord[0]}${upperLetter}${newWord[1].substring(1)}`, '=====CamelCase function======')
}

solution('camel case')