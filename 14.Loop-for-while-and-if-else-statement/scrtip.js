// // 1.Convert Age to Days

function Yearof(age) {
  return age * 365;
}
console.log(Yearof(65));
console.log(Yearof(0));
console.log(Yearof(20));

// 1.Loop text
let myName = "Front-end Developer";
for (let i = 0; i < myName.length; i++) {
  console.log(myName[i]);
}


// 3.Sum of even numbers(e.g: 2,4,6...) in 10.
let d =1;
for (let x = 0; x < 10; x++) {
  if (x % 2 == 0) 
  d+=x;
}
console.log(d);

// 4.Multiply the odd numbers(e.g: 1,3,5...) in 17.
let c =1;
for (let i = 0; i < 17; i++) {
  if (i % 2 == 1) 
  c*=i;
}
console.log(c);

// 4.Multiply numbers between 10 and 18
let b = 1;
for (let i = 10; i<=18; i++){
  //  console.log(`${i} x ${i} = ${i*i}`)
  b*=i;
}
console.log(b);

// 5.Sum numbers between 17 and 30. Except 19, 20.
let a=1;
for (let i = 17; i <= 30; i++) {
  if (i == 19 || i == 20) {
    continue;
  }
  // console.log(i);
  a+=i;
}
console.log(a);

// 6.Sum of even numbers and assign this result a variable.
// Sum of odd numbers and assign this result a variable.
let odd =1;
for (let x = 0; x < 10; x++) {
  if (x % 2 != 0) 
  odd+=x;
}
console.log(odd);

let even =1;
for (let x = 0; x < 10; x++) {
  if (x % 2 == 0) 
  even+=x;
}
console.log(even);

let k = odd-even;
console.log(k);

// 7.Find of even numbers(e.g: 2,4,6...) in 16. And every number to the power of 2.
// Use for loop, 16 is enter this list
let seven =1;
while (let x = 1; x <=16; x++) {
  if (x % 2 == 0){
  console.log(`${x}, ${x**2}`);
else{
  console.log(seven)
}