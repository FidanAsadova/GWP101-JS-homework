let form = document.querySelector("#form");
let bgBlack = document.querySelector("#blackBG");
let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");
let additionBtn = document.querySelector("#addition");
let substractBtn = document.querySelector("#substract");
let multiplyBtn = document.querySelector("#multiply");
let divisionBtn = document.querySelector("#division");
let resetBtn = document.querySelector("#reset");



additionBtn.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let add = +value1.value + +value2.value;
    bgBlack.innerHTML = add;
  } else {
    alert("Value is empty");
  }
});

substractBtn.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let sub = +value1.value - +value2.value;
    bgBlack.innerHTML = sub;
  } else {
    alert("Value is empty");
  }
});


multiplyBtn.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let multy = +value1.value * +value2.value;
    bgBlack.innerHTML = multy;
  } else {
    alert("Value is empty");
  }
});

///

divisionBtn.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let divis = +value1.value / +value2.value;
    bgBlack.innerHTML = divis;
  } else {
    alert("Value is empty");
  }
});


resetBtn.addEventListener("click", function () {
  value1.value = "";
  value2.value = "";
  bgBlack.innerHTML = 0;
});
