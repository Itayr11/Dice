function Dice()
{

var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6+1);

 var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.getElementsByClassName("img1")[0];


image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6+1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.getElementsByClassName("img2")[0];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2)
document.querySelector('h1').innerHTML = "Player 1 Wins";
else if (randomNumber1==randomNumber2)
document.querySelector('h1').innerHTML = "Tie";
else
document.querySelector('h1').innerHTML = "Player 2 Wins";

}
