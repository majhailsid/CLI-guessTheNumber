console.log("Welcome to the Guess the Number game, Ready to Play !!");
const generateNum = Number.parseInt((Math.floor(Math.random()* 100 +1)));
const chances = 100;
let tries = 0;
console.log(generateNum);

  let etrNum;
do{
   etrNum = prompt("Enter your guess : ");
  if(etrNum >= 100 || etrNum <= 0){
    console.log("Enter a Valid number from Range 1-100.");
  }else{
  if(etrNum < generateNum){
    console.log(`The number is greater than ${etrNum}!`);
  }
  else{
    if(etrNum > generateNum){
    console.log(`The number is less than ${etrNum}!`);
    }
    else{
      console.log(`Yay! The number was ${etrNum}. Congratulations you won the game !`)
    }
  }
  }
  ++tries;
  console.log(tries);
}while(etrNum != generateNum)

console.log(`You took ${tries} tries to guess the number. You score is ${chances - tries}.`)
