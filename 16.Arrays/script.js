// 1. Concatenate the following two variables and store it in a "fullStack" variable.
// console.log(fullStack) // output: ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// 2. Find the average age
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// const lng = ages.length;
// // console.log(ln);

// let sumOfAges = 0;
// ages.forEach((el) => {
//   sumOfAges += el;
//   return sumOfAges;
// });
// // console.log(sumOfAges);
// let average = sumOfAges / lng;
// console.log(average);

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

function calculateAverage(array) {
  let total = 0;
  let count = 0;

  array.forEach(function (item) {
    total += item;
    count++;
  });

  return total / count;
}
console.log(calculateAverage(ages));

// 3. Using countries array console.log following result:
// [ "0.ALB", "1.BOL", "2.CAN", "3.DEN", "4.ETH", "5.FIN", "6.GER", "7.HUN", "8.IRE", "9.JAP", "10.KEN" ]

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const shortName = countries.map(
  (items, index, arr) => `${index}.${items.slice(0, 3).toLocaleUpperCase()}`
);
console.log(shortName);

// 4. Find the sum of all indexes of 7.

let numbers = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];

const indexes = [];
numbers.forEach((elem, i) => {
  if (elem === 7) {
    indexes.push(i);
  }
  return indexes;
});
// console.log(indexes);

let sumOfIndex = 0;
indexes.forEach((el) => {
  sumOfIndex += el;
  return sumOfIndex;
});
console.log(sumOfIndex);


// 5. Using todos array find all objects that completed property is "true".
// 6. Using todos array find all objects that title property length is grater than 40.
const todos = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];

////5
const trueProperty = todos.filter((item) => item.completed === true);
console.log(trueProperty);

///6
const findTitle = todos.filter((items) => items.title, length > 40);
console.log(findTitle);
