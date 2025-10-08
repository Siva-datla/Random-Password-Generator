let len = 12;
let includeLowecase = true;
let includeUppercase = true;
let includeNumbers =true;
let includeSymbols = true;

function generatePassword(len,includeLowecase,includeUppercase,includeNumbers,includeSymbols){

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = lowerCaseChars.toUpperCase();
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()-_=+";

    let allowedChars = "";
    let password = "";

    allowedChars+= includeLowecase? lowerCaseChars:"";
    allowedChars+= includeUppercase? upperCaseChars:"";
    allowedChars+= includeNumbers?numbers:"";
    allowedChars+= includeSymbols?symbols:"";

    if(len<=0){
        return "password lenght must be > 0";
    }

    for(let i=0;i<len;i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password+= allowedChars[randomIndex];
    }

    return password;

}

function handleGenerate(){
  len = parseInt(document.getElementById("length").value);
  includeLowecase = document.getElementById("lowercase").checked;
  includeUppercase = document.getElementById("uppercase").checked;
  includeNumbers = document.getElementById("numbers").checked;
  includeSymbols = document.getElementById("symbols").checked;

  const pwd = generatePassword(len, includeLowecase, includeUppercase, includeNumbers, includeSymbols);
  document.getElementById("res").value = pwd;
}

