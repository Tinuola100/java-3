//no.1

prompt("His name");
prompt("Her name");
var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;

if(lovescore > 75){
alert("Your lovescore is " + lovescore + "%. IT'S A MATCH!!");

}

if(lovescore > 30 && lovescore <= 75 ){
   alert("Your lovescore is "  + lovescore + "%.You both love yourselves like oil and water. ");
}

if(lovescore <= 30){
  // alert("Your lovescore is "  + lovescore + "%. NOT COMPATIBLE");

}

else{
  alert("Your love is " + lovescore + "%.");
}

//no2

var firstinput = prompt("Input your name");
var secondinput = prompt("Input your partner name");

function loveCalculator (Mary, John) {
var lovecalc = (Math.random() * 75) + 1;
var result = Math.floor(lovecalc);

return("you got the game, " + firstinput + " your love compatibility with " + secondinput + " is " + result + "% ");

 }
loveCalculator(firstinput, secondinput)