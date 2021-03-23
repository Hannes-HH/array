const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// One including the numbers doubled (multiplied by 2) (1 -> 2, 2 -> 4, etc)
// - One including the numbers divided by 2
// - One including the numbers multiplied by themselves

// Your code below
const map = numbers.map(x => x * 2);
const map1 = numbers.map(x => x / 2);
const map2 = numbers.map(x => x * x);


console.log(map); 
console.log(map1); 
console.log(map2); 


