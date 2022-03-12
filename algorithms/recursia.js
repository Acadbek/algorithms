// Funsiyani ichida o'shan funcni ozi qayta chaqirilyapti

function recursia(num) {
    console.log(num);
    const newNum = num - 1
    if (newNum > 0) {
        recursia(newNum)
    }
}

recursia(100)