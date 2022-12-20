let inputEmailEle = document.getElementById("inputEmail");
let emailErrorMsgEle = document.getElementById("emailErrorMsg");
inputEmailEle.addEventListener("blur",function(event){
    emailErrorMsgEle.textContent="Required*";
});
inputEmailEle.addEventListener("focus",function(event){
    emailErrorMsgEle.textContent="";
});

let inputUsernameEle = document.getElementById("inputUsername");
let usernameErrorMsgEle = document.getElementById("usernameErrorMsg");
inputUsernameEle.addEventListener("blur",function(event){
    usernameErrorMsgEle.textContent="Required*";
});
inputUsernameEle.addEventListener("focus",function(event){
    usernameErrorMsgEle.textContent="";
});


let inputNameEle = document.getElementById("inputName");
let nameErrorMsgEle = document.getElementById("nameErrorMsg");
inputNameEle.addEventListener("blur",function(event){
        console.log("blur event triggred");
        nameErrorMsgEle.textContent = "Required*";
});
inputNameEle.addEventListener("focus",function(event){
    nameErrorMsgEle.textContent = "";  
});

let inputPasswordEle = document.getElementById("inputPassword");
let passwordErrorMsgEle = document.getElementById("passwordErrorMsg");
inputPasswordEle.addEventListener("blur",function(event){
    passwordErrorMsgEle.textContent="Required*";
});
inputPasswordEle.addEventListener("focus",function(event){
    passwordErrorMsgEle.textContent="";
});

let reEnterPasswordEle = document.getElementById("reEnterPassword");
let repassErrorMsgEle = document.getElementById("repassErrorMsg");
reEnterPasswordEle.addEventListener("blur",function(event){
    repassErrorMsgEle.textContent="Required*";
});
reEnterPasswordEle.addEventListener("focus",function(event){
    repassErrorMsgEle.textContent="";
});
