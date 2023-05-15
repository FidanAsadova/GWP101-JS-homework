let icon = document.querySelector(".fa-solid");
let home = document.getElementById("home");
// let myStyle = document.getElementsByClassName("myStyle");
let parag = document.querySelector(".parag");
let clickMenu = document.querySelector(".click-menu");
let bool = false;

icon.addEventListener("click", function () {
  bool = !bool;
  if (bool) {
    home.style.background = "black";
    parag.style.display = "none";
    clickMenu.style.display = "block";
    console.log("ssss");
  } else {
    // home.classList.add("myStyle");
    // parag.style.display = "block";
    clickMenu.style.display = "none";
  }
});
