// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //generate ID, which is the button

//1. prompt the user for password criteria

//what characters? uppercase, lowercase, numeric, special characters
//var chars =
//"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
      passwordLength = prompt("Please enter a number between 8 and 128");
    }
    return passwordLength;
  } //ask Length
  var passLength = askLength();
  return passLength;

  function askLowercase() {}
}

//password length between 8 and 128

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
