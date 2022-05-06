
function capitilaze(word) {
    return word[0].toUpperCase() + word.slice(1)
}
function replace(letter) {
    return letter.replace(',', ' ')
}
String.prototype.toJadenCase = function(){
    return toJadenCase = this.split(' ').map(n => {
        let capitilazeWord = capitilaze(replace(n))
        // replace(capitilazeWord)
    })
}

let a = 'salom dunyo djfs ksdjf sddkffjn sdkfjn'
console.log(a.toJadenCase().toString())
// console.log(a.replace(',', ' '))