// // Recursion
// function rec(num) {
//     const newNum = num - 1
//     // console.log(newNum)
//     if (newNum == 0) {
//         return
//     }
//     else {
//         // console.log(num)
//         rec(num)
//     }
// }

// rec(10)

function countDown(number) {
    console.log(number);
    const newNumber = number - 1;
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
countDown(4);
