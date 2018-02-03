// Create an array to store all cards
var cards = ['queen', 'queen', 'king', 'king'];

// Create an array to store cards in play
var cardsInPlay = [];

//Create a function to check for a match
var checkForMatch = function () {
  // Check to see if two cards match and alert user
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

}
};

// Create a function to show the user flipped a card
var flipCard = function (cardId) {

// Display the card the user flipped over in console.log
console.log("User flipped " + cards[cardId]);

// Add card to array of cards in play
cardsInPlay.push(cards[cardId]);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
  // If so, call checkForMatch function
  checkForMatch();
  }
};

// Call flipCard function passing in 0 as the argument
flipCard(0);
// Call flipCardfunction passing in 2 as the argument
flipCard(2);
