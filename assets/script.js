// Assignment code here
var generateBtn = document.querySelector("#generate"); // Don't Touch!

var characterLength = 8;
var choiceArray = [];

// Possible characters for output
var specialCharArray = ["!", "@", "#", "$","%", "&", "*", "?"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["1","2","3","4","5","6","7","8","9","0"];

// Prompts for user
function getPrompts() {
  choiceArray =[];
 
  userChoice = window.prompt("Please choose a password length between 8 and 128");

  if (userChoice < 8 || userChoice > 128) {
    alert ("Must be between 8 and 128")
    return false;
  }

  if (confirm("Include lowercase letters?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  if (confirm("Include uppercase letters?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if (confirm("Include special characters?")) {
    choiceArray = choiceArray.concat(specialCharArray);
  }

  if (confirm("Include numbers?")) {
    choiceArray = choiceArray.concat(numberArray);
  }

  return true;
}

// Generate password based on user preferance
function generatePassword(){

  var password = "";
  for(var i = 0; i < userChoice; i++) {
    var random = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[random];
  }
  return password;
}

// Write password to the #password inputs
function writePassword() {

  var truePrompt = getPrompts();

  if (truePrompt) {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // Don't Touch!
