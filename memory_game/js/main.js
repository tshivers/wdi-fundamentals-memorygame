var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen")
// verified this function works

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king")
// verified this function works

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match");
} else {
  alert ("Sorry, try again.");
  // verified this function works
}
