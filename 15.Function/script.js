///////////// 1.Return the First Element in an Array.
// Create a function called "getFirstValue()" that takes an array containing only numbers and return the first element.

const arr1 = [1, 2, 3];
const arr2 = [80, 5, 100];
const arr3 = [-500, 0, 50];

const getFirstValue = function (allArray) {
  return allArray[0];
};
console.log(getFirstValue(arr1));
console.log(getFirstValue(arr2));
console.log(getFirstValue(arr3));

////////////// 2.Return the Last Element in an Array.
// Create a function called "getLastItem()" that accepts an array and returns the last item in the array.
// Don't forget to return the result.

const arr21 = [1, 2, 3];
const arr22 = ["cat", "dog", "duck"];
const arr23 = [true, false, true];

const getLastItem = function (allArray2) {
  return allArray2[2];
};
console.log(getLastItem(arr21));
console.log(getLastItem(arr22));
console.log(getLastItem(arr23));

////////////// 3.Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string (used: Function Expression).
// Don't forget to return the result.

const arr31 = ["hi", "edabit", "fgh", "abc"];
const arr32 = ["Red", "blue", "Blue", "Green"];
const arr33 = ["a", "g", "y", "d"];
const arr34 = ["Pineapple", "Orange", "Grape", "Apple"];
const str1 = "fgh";
const str2 = "blue";
const str3 = "d";
const str4 = "Pineapple";

const findIndex = function (Arr, Str) {
  for (item of Arr) {
    if ((item = Str)) {
    }
  }
  return item;
};
console.log(findIndex(arr31, str1));
console.log(findIndex(arr32, str2));
console.log(findIndex(arr33, str3));
console.log(findIndex(arr34, str4));

/////////////// 4.Return the Sum of Two Numbers.
// Create a function that called "addition()" takes two numbers as arguments and returns their sum.(used: Parameter)
// Don't forget to return the result.

function addition(x, y) {
  return x + y;
}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

/////////////// 5.Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. (used: Arrow function)
const lessThan100 = (a, b) => {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
};
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

//////////////// 6.Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys)
//  and returns the multiplication sizes of the box.
// Don't forget to return the result.

function volumeOfBox(width, length, height) {
  return width * length * height;
}
console.log(volumeOfBox(2, 5, 1));
console.log(volumeOfBox(4, 2, 2));
console.log(volumeOfBox(2, 3, 5));

///////////////// 7.Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Create a function called "points(twoPointers, threePointers)" and add two parameters to it.
function basketball(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}
console.log(basketball(1, 1));
console.log(basketball(7, 5));
console.log(basketball(38, 8));

// 8.Create a function called 'fillInfo()', which is used to change "my name" to 'Ulfat' ,'my surname' to 'Zakirli', 'my city' to 'Baku'.
// (used: for...of).

// const arr8 = [
//   {
//     name: "Ulfat",
//     surname: "Zakirli",
//     city: "Baku",
//   },
// ];
// function fillInfo(name, surname, city) {
//   name();
// }
// fillInfo(() => {
//   console.log();
// });