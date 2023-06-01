String.prototype.camelCase = function(){
  return this.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

'test case'.camelCase() // TestCase