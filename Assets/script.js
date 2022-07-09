// Assignment Code
var generateBtn = document.querySelector("#generate");



// Special character array
var specialChar = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "<", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~" ]

// object contating all random character generator functions
var random = {
  lowerCase: lettersLower,
  upperCase: lettersUpper,
  numbers: randomNumber,
  special: randomSpecial
};



// Random character Generators 
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


// Function generatepassword 

function generatePassword(){

// length prompt
   var length = prompt("How many characters?")

  //  if canceled/nothing entered function will end
   if (length == "null" || length == null || length == ""){
    return;
  }

  // low limit
    if (length <=7) {
      alert("Character length must be at least 8!")

      return null;
   }
   
// high limit
   if (length > 128){
    alert("Character length must not exceed 128!")

    return null;
   }

  //  must be a numeric entry 
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

// obj contating prompt data
choices = {
  length: length,
  lowerCase: lowerCase,
  upperCase: upperCase,
  numbers: numbers,
  special: special
 };


// number of types
var count = lowerCase + upperCase + numbers + special;

// if no on all prompts end function
if(count === 0){
  return null;
}

// filter for obj, discards any false
 var objCheck = [{lowerCase}, {upperCase}, {numbers}, {special}].filter
 (item => Object.values(item)[0]);


//  empty string for password to generate
generate = '';

// loops through obj keys 
for (var i = 0; i < length; i += count){
objCheck.forEach(type => {
var finalPass = Object.keys(type)[0];


// produces string using for loop and random generator functions
generate += random[finalPass]();

});

}

// forces generate to only print what length was
var fullyGenerated = generate.slice(0, length);


// prints fully generated password
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

