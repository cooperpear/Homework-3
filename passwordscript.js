var alphaarray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var validlowercase = false;
var password = [];
var capsarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialarray = ["!", "#", "$", "%", "&", "'", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "|", "~", ";"];


$('textarea').autoResize();
function myPassword() {

    var special = confirm("would you like to use special characters?");

    var alpha = confirm("would you like to use lower case?");

    var caps = confirm("would you like to use Upper case?");

    var charnum = parseInt(prompt("How many characters would you like your password to be (8-128)"));

    //logic for password input
    var i = 0
    if (charnum < 8 || charnum > 128) {
        alert("Incorrect password length");
        return myPassword();
    }

    while (i < charnum) {
        if (alpha == true && i < charnum) {
            var index = Math.floor(Math.random() * 25)
            password.push(alphaarray[index])
            i++
        }
        if (caps == true && i < charnum) {
            var index = Math.floor(Math.random() * 25)
            password.push(capsarray[index])
            i++
        }

        if (special == true && i < charnum) {
            var index = Math.floor(Math.random() * 24)
            password.push(specialarray[index])
            i++
        }
        //add other array choices here
    }

    console.log(password);
    document.getElementById("password-display").innerText = password.slice(0).join("");
}

function copyPassword() {

    var text = document.getElementById("password-display");
    text.focus();
    text.select();
    document.execCommand("Copy");
    alert("password has been copied to clipboard");
}
