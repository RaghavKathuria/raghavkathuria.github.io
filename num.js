var bttn =document.querySelector("button");
bttn.onclick = function(){

var b=Math.floor(Math.random()*101);

for(var i=1;i<=10;i++){


var a=Number(prompt("enter your guess between 1-100"));
if(a==""){
alert("Please enter a no")
}
else if(a<b){
alert("your no. is too low");
}
else if(a>b){
alert("your no. is too high");
}
else if(a===b){
alert("you got it right");
break;
}

}
}

