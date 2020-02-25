var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");


var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");



if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=("<img class='flag' src='https://image.flaticon.com/icons/svg/395/395841.svg'> Player 1 Won!");
}
else if ( randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML=("Player 2 Won! <img class='flag' src='https://image.flaticon.com/icons/svg/395/395841.svg'>");
}
else{
  document.querySelector("h1").innerHTML=("Its a Draw!");
}
