var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice" + randomNumber1 + ".png";
var randomImgSrc1="images/" + randomDiceImage1;
var randomDiceImage2="dice" + randomNumber2 + ".png";
var randomImgSrc2="images/" + randomDiceImage2;
document.querySelector(".img1").setAttribute("src", randomImgSrc1);
document.querySelector(".img2").setAttribute("src", randomImgSrc2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
