let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let result = document.querySelector(".result");
let resetBtn = document.querySelector(".reset");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let inputBtn = document.querySelector(".inputButton");
let inputText = document.querySelector("#bonusText");

let interval;
let counter = 0;
startBtn.addEventListener("click", function () {
  interval = setInterval(() => {
    counter++;
    result.innerText = counter;
  }, 1000);
  this.setAttribute("disabled", "true");
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
  startBtn.removeAttribute("disabled");
});

resetBtn.addEventListener("click", function () {
  result.innerText = 0;
  counter = 0;
  clearInterval(interval);
});

incrementBtn.addEventListener("click", function () {
  counter += 1;
  result.innerText = counter;
  //   this.setAttribute("disabled", "true");
});
decrementBtn.addEventListener("click", function () {
  counter -= 1;
  result.innerText = counter;
  //   this.setAttribute("disabled", "true");
});

// inputBtn.addEventListener("click", function () {
    
//   });
