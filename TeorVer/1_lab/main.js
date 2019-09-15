let button = document.getElementById("button");
let resultElem = document.getElementsByClassName("result")[0];
let trueElem = document.getElementsByClassName("true")[0];
let falseElem = document.getElementsByClassName("false")[0];
let result;
let falseAmount;
let amount = parseInt(sessionStorage.getItem("amount"));
let form = document.getElementById("rangeForm").value = amount;
let output = document.getElementById("out");
let counter = 0;
let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'K', 'L', 'N', 'O', 'P'];

button.onclick = function(){
            amount = document.getElementById("rangeForm").value;
            sessionStorage.setItem('amount', amount);
            location.reload();
        }

output.innerHTML = amount;


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

for (let i = 0; i < amount; i++) {
  shuffle(arr);
  var firstTeam = arr.slice(0, 6);
  var secondTeam = arr.slice(6, 12);
  if ((firstTeam.includes('A')) && (firstTeam.includes('B')) && (secondTeam.includes('C'))) {
    counter++;
  } else if ((secondTeam.includes('A')) && (secondTeam.includes('B')) && (firstTeam.includes('C'))) {
    counter++;
  }
}
result = counter / amount;
falseAmount = amount - counter;
resultElem.innerHTML = result;
trueElem.innerHTML = counter;
falseElem.innerHTML = falseAmount;
trueElem.innerHTML = counter;


//shuffle(arr);
