//  PAlindrome function

function reverX(x) {
    const array = []
    const value = x.toString().length - 1
    for (let i = value; i >= 0; i--) {
        array.push(x.toString()[i])
    }
    let revValue = array.join('')
    if (x == revValue) {
        return true
    } else {
        return false
    }
}

reverX(121)
