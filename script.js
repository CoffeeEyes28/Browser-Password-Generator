// Assignment Code
var generateBtn = document.querySelector("#generate");

// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Special Array
var specialChar = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "<", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~" ]

var random = {
  lowerCase: lettersLower,
  upperCase: lettersUpper,
  numbers: randomNumber,
  special: randomSpecial
};


// Random Generators 
function lettersLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function lettersUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial(){
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}



// var options = [letters, numbers, special] 

// var random = Math.floor(Math.random() * options.length);


// var type = ["lowercase", "uppercase", "numbers", "special"]


// second function var with empty array, check if obj exists if not null then if statements which have statement conditions and end with for loop 

// Function generatepassword 

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
 lowerCase === lowerCase
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



var count = lowerCase + upperCase + numbers + special;

if(count === 0){
  return null;
}

 var objCheck = [{lowerCase}, {upperCase}, {numbers}, {special}].filter
 (item => Object.values(item)[0]);


generate = '';

for (var i = 0; i < length; i += count){
objCheck.forEach(type => {
var finalPass = Object.keys(type)[0];

generate += random[finalPass]();

});

}

var fullyGenerated = generate.slice(0, length);

return fullyGenerated;

 }





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

