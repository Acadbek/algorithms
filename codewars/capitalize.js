// function capitalize(s, arr) {
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     if (arr.includes(i)) {
//       result += s[i].toUpperCase();
//     } else {
//       result += s[i];
//     }
//   }
//   return result;
// }


let capitalize = (s, arr) => s.split``.map((c, i) => arr.includes(i) ? c.toUpperCase() : c).join``;

console.log(capitalize('hello', [1, 3, 4]));
