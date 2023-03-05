String.prototype.camelCase = function(){
  return this.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

let as = 'asd asdasd asdasd'.camelCase()
console.log(as);