// Assignment Code

var upperCase = 'ABCDEF';
var lowerCase = 'abcdef';
var numbers = '1234';
var special = '!@#$';

var passwordLength;

var chosenCharacters = '';

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
//get password characters and length

function getCharacters(){
  var legnthPrompt = window.prompt('How many characters do you want?')

  passwordLength = parseInt(legnthPrompt)
  console.log(passwordLength);

  if(passwordLength <8 || passwordLength >128){
    alert('Password must be...')
    return false;
  }

  var uppercasePrompt = window.confirm('Do you want capitals?');

  if(uppercasePrompt) {
    chosenCharacters += upperCase;

  }

  var lowerCasePrompt = window.confirm('Do you want lower case?');

  if(lowerCasePrompt) {
    chosenCharacters += lowerCase;
    
  }
  var numbersPrompt = window.confirm('Do you want numbers?');
  if(numbersPrompt) {
    chosenCharacters += numbers;
    
  }
  var specialPrompt = window.confirm('Do you want special characters?');
  if(specialPrompt) {
    chosenCharacters += special;
    
  }
  return true
}

function generatePassword(){
  password = '';
  console.log(chosenCharacters)
 while(password.length < passwordLength){
  password += chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]
 }
 return password
}

// Write password to the #password input
function writePassword() { 
  console.log("writting")
  var isValid = getCharacters()
  if(isValid){

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


