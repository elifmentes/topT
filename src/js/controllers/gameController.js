// 1. Passing card function
const passCard = (player1, player2) => {
	// 1. pass first card from player1 to player2
	const card = player1.cards.splice(0, 1);
	player2.cards.push(card[0]);
}

// 2. Setting player
export const controlCards = (atr, p1, p2, p3) => {
  // 1. Get the attribute value of the top cards of the players
  const p1FirstCard = p1.cards[0][atr];
  const p2FirstCard = p2.cards[0][atr];

  // 2. Compare the values between players and set stats to winner or loser if they have a tie send cards to "tie player"
  if(p1FirstCard > p2FirstCard) {
    // Option 1. when player1's selected value is greater than the player2's 
    p1.stat = "Winner";
    p2.stat = "Loser";
  } else if (p2FirstCard > p1FirstCard) {
    // Option 2. when player2's selected value is greater than the player1's
    p1.stat = "Loser";
    p2.stat = "Winner";
  } else if (p2FirstCard === p1FirstCard) {
    // Option 3. when player1's selected value is equal to player2's
  	p3.stat = "Tie";
  }
};

// 3. Passing card in action
export const passingCard = (p1, p2, p3) => {
  // Option1. When player1 is the winner
  if (p1.stat === "Winner") {
    // Pass top card of player1 to the end of the pile
    passCard(p1, p1);
    // Pass top card of player2 to the end of the pile of player1
	  passCard(p2, p1);
  
  // Option2. When player2 is the winner  
  } else if (p1.stat === "Winner") {
    // Pass top card of player2 to the end of the pile
    passCard(p2, p2);
    // Pass top card of player1 to the end of the pile of player2
    passCard(p1, p2);
  
  // Option3. When there is a tie  
  } else {
    // Pass top card of player 1 to the end of the pile of player3 (tie)
	  passCard(p1, p3);

    // Pass top card of player 2 to the end of the pile of player3 (tie)
  	passCard(p2, p3);
  }
}