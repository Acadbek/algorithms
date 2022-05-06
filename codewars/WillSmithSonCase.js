
function capitilaze(word) {
    return word[0].toUpperCase() + word.slice(1)
}
function replaceWord(letter) {
    return letter.replace(',', ' ')
}
String.prototype.toJadenCase = function(){
    let toJadenCase = this.split(' ').map(n => {
        return capitilaze(n)
    })
    return toJadenCase.join(' ')
}

let a = 'salom dunyo djfs ksdjf sddkffjn'
console.log(a.toJadenCase())

// Output: 'Salom Dunyo Djfs Ksdjf Sddkffjn'