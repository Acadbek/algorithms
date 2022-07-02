function buildString(...template){
  console.log(`I like ${template.join(', ')}!`);
}
buildString('Cheese','Milk')

// I like Cheese, Milk, Chocolate!