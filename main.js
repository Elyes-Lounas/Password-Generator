let password = document.querySelector(".password");

const PW_length = document.getElementById("Password_length");

const uppercase = document.getElementById("Uppercase_letters");
const lowercase =  document.getElementById("lowercase_letters");
const numbers = document.getElementById("Numbers");
const symboles = document.getElementById("Symboles");
const generateBtn = document.querySelector(".generatebtn");

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercaseLetters = "abcdefghijklmnopqrstuwvxyz"
let numbersChar = "0123456789"
let sybmolesChar = "#$/%&(@)*!?;-"


generateBtn.addEventListener("click",showPassword) 


 function getUppercase() {
  return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
 }

 function getLowercase() {
  return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
 }

 function getNumbers() {
  return numbersChar[Math.floor(Math.random() * numbersChar.length)]
 }

 function getSymboles() {
  return sybmolesChar[Math.floor(Math.random() * sybmolesChar.length)]
 }

function showPassword() {
  let showPassword = "";
  if(PW_length.value>7 && PW_length.value<26 )
   {
      for(let i=0; i<PW_length.value; i++) {
          showPassword += getPassword()
      }
       password.innerHTML = showPassword;
   } else {
     password.innerHTML = "Please select password length"
   }
}

function getPassword() {
 let xs = [];
  if(uppercase.checked) {
    xs.push(getUppercase())
  }
  if(lowercase.checked) {
    xs.push(getLowercase())
  }
  if(numbers.checked) {
    xs.push(getNumbers())
  }
  if(symboles.checked) {
    xs.push(getSymboles())
  }
  return xs[Math.floor(Math.random() * xs.length)];
}