
let age = getUserInput("How old are you?");
let retireAge = getUserInput("At what age do you want to retire?");



function getUserInput(promptMsg){
    let userInput = +prompt(promptMsg);
    while(isUserInputInvalid (userInput))
    {
        alert("The input is not correct. Please try again")
        userInput = +prompt (promptMsg);
    }
  return userInput;
}

function isUserInputInvalid(userInput){
    if(userInput < 0 || isNaN(userInput)){
      return true;
    }
    return false;
  }

const date = new Date();
let currentYear = date.getFullYear();
let birthYear = currentYear - age;
let retireYear= birthYear + retireAge;
let yearsLeft= retireYear - currentYear;

if (yearsLeft > 0 ){
    console.log(`You have ${yearsLeft} until you can retire.
    It's ${currentYear}, so you can retire at ${retireYear}`)    
}
else{
    console.log(`You are already retired!!`)
}

  

  


