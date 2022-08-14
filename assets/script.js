// Assignment code here
var generateBtn = document.querySelector("#generate"); // Don't Touch!

var characterLength = 8;
var choiceArray = [];

var specialCharArray = ["!", "@", "#", "$","%", "&", "*", "?"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["1","2","3","4","5","6","7","8","9","0"];

function generatePassword() {

  var userChoice = window.prompt("Please choose a password length between 8 and 128");

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

  return "Generated password will go here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // Don't Touch!
