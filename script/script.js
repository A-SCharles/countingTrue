const values = document.getElementById("values");
const amount = document.getElementById("amount");
let arr = [];

const btnaddFalse = document.getElementById("false");
btnaddFalse.addEventListener("click", () => {
    // Adds False to array
    arr.push(false)
    values.innerHTML = arr
});

const btnaddTrue = document.getElementById("true");
btnaddTrue.addEventListener("click", () => {
  // Adds True to array
  arr.push(true);
  values.innerHTML = arr;
});

const btnCalc = document.getElementById("calculate");
btnCalc.addEventListener("click", (i, x) => {
i = arr.filter(Boolean).length

x = arr.length - i
amount.innerHTML = 'There are ' + i + ' True Values';
amount.innerHTML += ' and ' + x + ' False Values'
});

const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", () => {
  values.innerHTML = "";
  amount.innerHTML = "";
  arr = [];
});

//copyright
let year = new Date().getFullYear();
document.getElementById("copyright").innerHTML =
  "&copyAbdus-Samad Charles " + year;
document.getElementById("copyright").innerHTML =
  "&copyAbdus-Samad Charles " + year;

// [1,4,7,2,5,9,3];
