const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

// Your code below
const result = grades.filter((grades) => {
    return grades < 3;
});
const result_1 = grades.filter((grades) => {
    return grades >= 3;
});

console.log(result); 
console.log(result_1); 


