// Create an array to store all cards
var cards = ['queen', 'queen', 'king', 'king'];

// Create an array to store cards in play
var cardsInPlay = [];

// Create a variable cardOne for the first card the user flipped
var cardOne = cards[0];
// Add card to array for cardsInPlay
cardsInPlay.push(cardOne);
// Use console.log to display the card the user flipped
console.log("User flipped " + cardOne);

// Create a variable cardTwo for the second card the user flipped
var cardTwo = cards[2];
// Add card to array for cardsInPlay
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

// Check to see if two cards have been played
if (cardsInPlay.length === 2) {

  // Check to see if two cards match and alert users
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}
