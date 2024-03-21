var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdicceimage="dice"+randomnumber1+".png";
var randomimagesource="images/"+randomdicceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomnumber2=Math.floor(Math.random()*6+1);
var randomdiceimage2="dice"+randomnumber2+".png";
var randomimagesource2="images/"+randomdiceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
