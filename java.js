
var rd1=(Math.floor(Math.random() * 6)+1);
var rd2=(Math.floor(Math.random() * 6)+1);
document.querySelector(".img1").setAttribute("src","images/dice"+rd1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+rd2+".png");

if (rd1>rd2)
{
document.querySelector("h1").innerHTML=("Player1 Wins");

}

else if (rd2>rd1){
  document.querySelector("h1").innerHTML=("Player2 Wins");
}
else{
  document.querySelector("h1").innerHTML=("Its a Draw");

}
