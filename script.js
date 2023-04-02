// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
//initalizing variables
var passwordLength= 0;  
var includeLowercase= false;
var includeUppercase= false;
var includeNumeric= false;
var includeSpecial= false;
//Prompt user for password length criteria
while(passwordLength <8 || passwordLength > 128){
  passwordLength = prompt("Enter password length between 8 and 128 characters");
  if(passwordLength === null){return"";}
passwordLength= parseInt(passwordLength);
}
//Prompt user for Upper/lowercase, numbers, and special character options
while(!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial){
  includeLowercase= confirm("Include lowercase characters?");
  includeUppercase= confirm("Include uppercase characters?");
  includeNumeric= confirm("Include numeric characters?");
  includeSpecial= confirm("Include special characters?");
  if(!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial){
    alert("Please select atleast one character type");
  }
}
//Define arrays of character types to include in password gen
var lowercaseChars= "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars= "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var charSet= "";
//Depending on user choice add different character types into the character list(charsSet)
if(includeLowercase){charSet+= lowercaseChars;}
if(includeUppercase){charSet+= uppercaseChars;}
if(includeNumeric){charSet+= numericChars;}
if(includeSpecial){charSet+= specialChars;}
//Generate password
var password="";
for(var i= 0; i< passwordLength; i++){
  var randomIndex= Math.floor(Math.random()*charSet.length);
  password+= charSet[randomIndex];
}
//Return Password
return password;
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////GIVEN CODE//////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
