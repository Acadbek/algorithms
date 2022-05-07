function dontGiveMeFive2(start, end) {
    let arr = []
    for(let i = start; i <= end; i++) {
        if(!i.toString().includes('5')) {
            parseInt(arr.push(i))
            return arr
        }
    }
    return arr.length, 'length'
}

dontGiveMeFive2(1,9)