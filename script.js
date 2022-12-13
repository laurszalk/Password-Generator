// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generate ID, which is the button
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!@#$%^&*()";

//1. prompt the user for password length
//what characters? uppercase, lowercase, numeric, special characters

function generatePassword() {
  function askLength() {
    /* var passwordLength = prompt("Please enter a number between 8 and 128");
    if (passwordLength >= 8 && passwordLength <= 128) {
      return passwordLength;
    } else {
      alert("Not valid. Please pick a number between 1 and 128.");
      return askLength();
    } */
    var passwordLength = -1;
    var firstRan = false;
    while (passwordLength < 8 || passwordLength > 128) {
      if (!firstRan) {
        firstRan = true;
      } else {
        alert("Error. The number must be between 8 and 128.");
      }
      passwordLength = prompt("Please enter a number between 8 and 128.");
    }
    return passwordLength;
  }
  var passLength = askLength();
  console.log(passLength);

  var lowercaseChoice = confirm(
    "Do you want to include lowercase letters in your pasword?"
  );
  var uppercaseChoice = confirm(
    "Do you want to include uppercase letters in your pasword?"
  );
  var numberChoice = confirm("Do you want to include numbers in your pasword?"); //numberChoice
  var charsChoice = confirm(
    "Do you want to include special characters in your pasword?"
  );
  console.log(lowercaseChoice, uppercaseChoice, numberChoice, charsChoice);
  possibleChoices = "";
  if (lowercaseChoice === true) {
    possibleChoices += lowercase;
  }
  if (uppercaseChoice === true) {
    possibleChoices += Uppercase;
  }
  if (numberChoice === true) {
    possibleChoices += numbers;
  }
  if (charsChoice === true) {
    possibleChoices += specialChars;
  }
  console.log(possibleChoices);
  var newPassword = "";
  var newVariable = possibleChoices.split("");
  console.log(newVariable);
  for (var i = 0; i < passLength; i++) {
    newPassword =
      newPassword + newVariable[Math.floor(Math.random() * newVariable.length)];
    console.log(newPassword);
  }

  return newPassword;
}

//2. validate the input
//3. generate the password
//4. display generated password on the page
//return "Generated password will go here";

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //need to declare this function
  var passwordText = document.querySelector("#password"); //the ID password, the text you type in the card

  passwordText.value = password; //takes the value from generated password and displays onto the screen
}

// Add event listener to generate button
//when the user clicks the generate button it calls writePassword function
generateBtn.addEventListener("click", writePassword);
