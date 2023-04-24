// Dice game

let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
let randomDiceImage = "dice" + randomNumber1 + ".png"; 
let randomImagesSource = "/Images/" + randomDiceImage; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImagesSource2 = "/Images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! ";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}




