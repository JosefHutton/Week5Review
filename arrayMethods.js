let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Below is an example of a .forEach method:

// arr.forEach((x, y, z) => console.log("I iterated"));

// Answer these questions in a separate line that's be commented out:
// 1. What do x, y and z represent?

// current value in array", x
// index of value in array", y
// array that value is in", z

// 2. What is the key difference between the .forEach method and the .map method?

// .map will always return another array. .forEach does not return anything

// Examine this method:

// let newArr = arr.map(x => x + 1);

// 3. What would we expect to print out if we did console.log(newArr);

// the array with all numbers = +1

// Create a filter method that creates an arr of only the even values from arr

let evenArr = arr.filter(function (num) {
return num % 2 === 0;
});
console.log(evenArr);
