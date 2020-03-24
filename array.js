const array = [1, 2, 3, 4];
console.log(array);

array[4] = 5;
console.log(array);

const array2 = [...array];
console.log(array2);

array[5] = 6;
console.log(array);
console.log(array2);