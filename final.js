var submit= document.querySelector("#button");
submit.onclick = function(){
var name= document.querySelector("#name");
var email= document.querySelector("#email");
if(name.value==""){
alert("Enter your name");
}
if(email.value==""){
alert("Enter your email address");
}
else {
alert("Your information has been sent successfully");
}
}
