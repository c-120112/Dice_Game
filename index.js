var randomNum1 = Math.random();

randomNum1 = randomNum1 * 6;
randomNum1 = Math.floor(randomNum1)+1;

var randimg1 = "images/dice" + randomNum1 +".png";
document.getElementById("img1").setAttribute("src", randimg1);


var randomNum2 = Math.random();

randomNum2 = randomNum2 * 6;
randomNum2 = Math.floor(randomNum2)+1;

var randimg2 = "images/dice" + randomNum2 +".png";
document.getElementById("img2").setAttribute("src", randimg2);

if (randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (randomNum1 === randomNum2) {
  document.querySelector("h1").innerHTML = "Draw!"
}
else{
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
