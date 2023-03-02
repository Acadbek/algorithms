//v-1
//function largest(n, array) {
//  console.log(array.sort((a, b) => b - a).slice(0, n).reverse())
//}

//v-2
function largest(n,xs){
  console.log(xs.length-n);
  return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}

console.log(largest(2, [7,6,5,4,3,2,1])) // [6,7]