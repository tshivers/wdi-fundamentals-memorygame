// Create an array to store all cards
var cards = [
 {
   rank: "queen",
   suit: "hearts",
   cardImage: "images/queen-of-hearts.png"
 },
 {
   rank: "queen",
   suit: "diamonds",
   cardImage: "images/queen-of-diamonds.png"
 },
 {
   rank: "king",
   suit: "hearts",
   cardImage: "images/king-of-hearts.png"
 },
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];

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
console.log("User flipped " + cards[cardId].rank);

// Add card to array of cards in play
cardsInPlay.push(cards[cardId].rank);

// Display image for card flipped in console.log
console.log(cards[cardId].cardImage)

// Display suit for card flipped in console.log
console.log(cards[cardId].suit)

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
