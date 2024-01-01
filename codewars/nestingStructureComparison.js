// function findMissing(list) {
//   let newArr = []
//   let len = list.length - 1;

//   for (let i = 0; i < len; i++) {
//     let item = list[i] - list[i + 1]
//     newArr.push(item)
//   }

//   if (newArr[0] > 0) {
//     console.log(Math.max(...newArr));
//   } else {
//     console.log(Math.min(...newArr) / 2);
//   }
// }

// i + max(i - i+1) / 2

function findMissing(arr, n) {
  let a, l, s, i, sum = 0, missingnumber;
  a = arr[0];
  l = arr[n - 1];


  if ((a + l) % 2 == 0) {
    s = (a + l) / 2;
    s = s * (n + 1);
  }
  else {
    s = (n + 1) / 2;
    s = (a + l) * s;
  }

  for (i = 0; i <= n - 1; i++) {
    sum = sum + arr[i];
  }

  missingnumber = s - sum;
  return missingnumber

}



let a = [12, 28, 36]
let b = [11, 17, 23, 29, 35, 41, 47, 59]
let c = [
  -13,
  -18,
  -23,
  -28,
  -33,
  -38,
  -43,
  -48,
  -53,
  -58,
  -63,
  -68,
  -73,
  -78,
  -83,
  -88,
  -93,
  -98,
  -103,
  -108,
  -113,
  -118,
  -123,
  -128,
  -133,
  -138,
  -143,
  -148,
  -153,
  -163,
  -168,
  -173,
  -178,
  -183,
  -188,
  -193,
  -198,
  -203,
  -208,
  -213,
  -218,
  -223,
  -228,
  -233,
  -238,
  -243,
  -248,
  -253,
  -258,
  -263,
  -268]
let n = b.length
findMissing(b, n)
