let passwordText=document.getElementById("password");

const allchars="!#$%&*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[abcdefghijklmnopqrstuvwxyz{|"
const len=20;
function generatePassword(){
    let newPassword="";
    while(newPassword.length<len){
        newPassword+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordText.value=newPassword;
    
}

let clck=document.getElementById("nbutton");
clck.addEventListener('click',generatePassword);

function cl(){
    passwordText.value="";
}
 let clera=document.getElementById("cleraa");
clera.addEventListener('click',cl);

let cop=document.getElementById("im");
cop.addEventListener('click',copyPW);
function copyPW(){
    let elem=document.getElementById("password");
    elem.select();
    document.execCommand('copy');
}