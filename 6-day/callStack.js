const p = document.querySelector('#text')
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')

function rever() {
    btn.addEventListener('click', () => {
        const rev = []
        const leng = input.value.length - 1

        for (let i = leng; i >= 0; i--) {
            rev.push(input.value[i])
        }

        const rev2 = rev.reverse()
        p.innerHTML = rev
        console.log(rev2)

        if (rev == rev2) {
            console.log(true)
        } else {
            console.log(false)
        }
        return rev.join(' ')
    })
}

rever()
// function ReverseString(str) {

//     // Check input
//     if (!str || str.length < 2 ||
//         typeof str !== 'string') {
//         return 'Not valid';
//     }

//     // Take empty array revArray
//     const revArray = [];
//     const length = str.length - 1;

//     // Looping from the end
//     for (let i = length; i >= 0; i--) {
//         revArray.push(str[i]);
//     }

//     // Joining the array elements
//     return revArray.join('');
// }
// document.write(ReverseString("asadbek"))
