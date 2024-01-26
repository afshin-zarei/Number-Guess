const randomNumber = Math.ceil(Math.random() * 100);
let numberOfGuess = 0;

const validateNumber = (value) => {
   if (isNaN(value)) {
      return "Please enter in valid number";
   } else if (value < 1 || value > 100) {
      return "Please enter number between 1 to 100";
   }
};

const checkGuss = (guss) => {
   numberOfGuess++;
   console.log(numberOfGuess)
   if (guss === randomNumber) {
      console.log("You guessed correctly.");
   } else if (guss < randomNumber) {
      console.log("Too low! Try again.");
      play();
   } else {
      console.log("Too high! Try again.");
      play();
   }
};

const play = () => {
   const number = prompt("Enter a number betwen 1 of 100");
   console.log(number);
   if (number === null) return;

   if (numberOfGuess >= 10) {
      console.log("Game Over!");
      return;
   }

   const validition = validateNumber(number);
   if (validition) {
      console.log(validition);
      return play();
   }

   checkGuss(+number);
};
play();
