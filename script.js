console.log("Script Running");


const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);


let blue_position = 1;
let pink_position = 1;
let brown_position = 1;




// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");
const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");
const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");
const winner = document.querySelector("#winner");
// OnClick Functions Here
const advanceBlue = () => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
};
const advancePink = () => {
  pink_position += 1;
  changePosition(pinkHorse,pink_position);
};
const advancebrown = () => {
  brown_position += 1;
  changePosition(brownHorse,brown_position);
};




// Check for a winner
const checkWinner1 = (position, color) => {
  position = blue_position;
  color = "blue";
 if (position > 4){
  winner.textContent = `the ${color} horse won!`;
 }
}
const checkWinner2 = (position, color) => {
  position = pink_position;
  color = "pink";
 if (position > 4){
  winner.textContent = `the ${color} horse won!`;
 }
}
const checkWinner3 = (position, color) => {
  position = brown_position;
  color = "brown";
 if (position > 4){
  winner.textContent = `the ${color} horse won!`;
 }
}






// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advancebrown);
blueButton.addEventListener("click", checkWinner1);
pinkButton.addEventListener("click", checkWinner2);
brownButton.addEventListener("click", checkWinner3);
