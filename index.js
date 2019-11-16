var count1 = 1;
var count2 = 1;
var player1name;
var player2name;

function Dice() {
  if (document.getElementsByClassName("player1name")[0].innerHTML != "Player 1")
  {
    var randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6 + 1);

  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

  var image1 = document.getElementsByClassName("img1")[0];


  image1.setAttribute("src", randomImageSource1);

  var randomNumber2 = Math.random();
  randomNumber2 = Math.floor(randomNumber2 * 6 + 1);

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  var image2 = document.getElementsByClassName("img2")[0];

  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = player1name + " Wins";
    document.getElementsByClassName("player1count")[0].innerHTML = count1;
    count1++;
  } else if (randomNumber1 == randomNumber2)
    document.querySelector('h1').innerHTML = "Tie";
  else {
    document.querySelector('h1').innerHTML = player2name + " Wins";
    document.getElementsByClassName("player2count")[0].innerHTML = count2;
    count2++;

  }
}
else {
    alert("Update Names First!!");
  }
}

function updatenames() {
  player1name = document.getElementById("player1name").value;
  player2name = document.getElementById("player2name").value;
  if (player1name !== "" && player2name!= "")
  {
  document.getElementsByClassName("player1name")[0].innerHTML = player1name;
  document.getElementsByClassName("player2name")[0].innerHTML = player2name;
}
else
alert("write some names");
}
function Reset()
{
  count1=1;
  count2=1;
  document.getElementsByClassName("player1count")[0].innerHTML = count1-1;
  document.getElementsByClassName("player2count")[0].innerHTML = count2-1;
  document.querySelector('h1').innerHTML = "Reseted";
}
