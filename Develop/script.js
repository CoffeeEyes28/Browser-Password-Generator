// Assignment Code



var generateBtn = document.querySelector("#generate");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "<", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~" ]

var finalPass = [];


// var options = [letters, numbers, special] 

// var random = Math.floor(Math.random() * options.length);


// var type = ["lowercase", "uppercase", "numbers", "special"]


// second function var with empty array, check if obj exists if not null then if statements which have statement conditions and end with for loop 

// Functions

function generatePassword(){
   var length = prompt("How many characters?")

   if (length == "null" || length == null || length == ""){
    return;
  }

    if (length <=7) {
      alert("Character length must be at least 8!")

      return null;
   }
   

   if (length > 128){
    alert("Character length must not exceed 128!")

    return null;
   }

  if (isNaN(+ length)) {
  alert("Input must be a number!")
  
   return null;
  
}
else{
  
}


var lowerCase = confirm("Would you like lowercase letters?")
if (lowerCase === true){
  lowerCase === true
}
 else {
  lowerCase === false 
}

var upperCase = confirm("Would you like uppercase letters?")

if (upperCase === true){
  upperCase === true
}
 else {
  upperCase === false 
}

var numbers = confirm("Do you want numbers?")

if (numbers === true ){
  numbers === true
}
else {
  numbers === false
}

var special = confirm("Do you want special characters?")

if (special === true){
  special === true
}
else {
  special === false 
}

choices = {
  length: length,
  lowerCase: lowerCase,
  upperCase: upperCase,
  numbers: numbers,
  special: special
 };


 var final = function(){
  finalPass.push(choices)

 }

 final();
   
   
  //  console.log(finalPass)
console.log(choices)
  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

