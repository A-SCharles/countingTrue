const values = document.getElementById("values");
const nextNo = document.getElementById("next");
numbers.focus();
let arr = [];

const btnaddFalse = document.getElementById("false");
btnaddFalse.addEventListener("click", () => {
    // Adds False to array
    arr.push('False')
    values.innerHTML = arr
});

const btnaddTrue = document.getElementById("true");
btnaddTrue.addEventListener("click", () => {
  // Adds True to array
  arr.push("True");
  values.innerHTML = arr;
});

// adds numbers to array on enter
numbers.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnadd.click();
  }
});

const btnCalc = document.getElementById("calculate");
btnCalc.addEventListener("click", () => {

});

const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", () => {
  values.innerHTML = "";
  nextNo.innerHTML = "";
  arr = [];
});

//copyright
let year = new Date().getFullYear();
document.getElementById("copyright").innerHTML =
  "&copyAbdus-Samad Charles " + year;
document.getElementById("copyright").innerHTML =
  "&copyAbdus-Samad Charles " + year;

// [1,4,7,2,5,9,3];
