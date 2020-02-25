import * as cardView from '../views/cardView';

const tieSituation = (arr, player) => {
  if (arr.length > 0) {
    const card = arr.splice(0, arr.length);
    card.forEach(c => {
      player.push(c);
    })
  }
};

// 1. Passing card function
const passCard = (player1, player2) => {
	// 1. pass first card from player1 to player2
	const card = player1.cards.splice(0, 1);
	player2.cards.push(card[0]);
};

// 2. Setting player
export const compareCards = (atr, p1, p2, p3) => {
  // 1. Get the attribute value of the top cards of the players
  const p1FirstCard = p1.cards[0][atr];
  const p2FirstCard = p2.cards[0][atr];

  // 2. Compare the values between players and set stats to winner or loser if they have a tie send cards to "tie player"
  if(p1FirstCard > p2FirstCard) {
    // Option 1. when player1's selected value is greater than the player2's 
    p1.stat = "Winner";
    p2.stat = "Loser";
    cardView.renderPlayers.notSelective(p1, p2, p3);

    // Pass top card of player1 to the end of the pile
    passCard(p1, p1);
    // Pass top card of player2 to the end of the pile of player1
    passCard(p2, p1);
    // If tie is not empty push tie cards
    tieSituation(p3.cards, p1.cards);

    p1.turn = "P1 plays";
    p2.turn = "click next";

  } else if (p2FirstCard > p1FirstCard) {
    // Option 2. when player2's selected value is greater than the player1's
    p1.stat = "Loser";
    p2.stat = "Winner";
    cardView.renderPlayers.notSelective(p1, p2, p3);

    // Pass top card of player2 to the end of the pile
    passCard(p2, p2);
    // Pass top card of player1 to the end of the pile of player2
    passCard(p1, p2);
    // Opponnent picks an attribute

    // If tie is not empty push tie cards
    tieSituation(p3.cards, p2.cards);

    p2.turn = "P2 plays";
    p1.turn = "P1 doesn't play";
    

  } else if (p2FirstCard === p1FirstCard) {
    // Option 3. when player1's selected value is equal to player2's
  	p3.stat = "Tie";
    cardView.renderPlayers.notSelective(p1, p2, p3);

    // Pass top card of player 1 to the end of the pile of player3 (tie)
    passCard(p1, p3);

    // Pass top card of player 2 to the end of the pile of player3 (tie)
    passCard(p2, p3);
  }
};

const opponentPlays = (player1, player2, player3, arr) => {
  const num = Math.floor(Math.random() * 7);
  console.log(arr[num]);
  compareCards(arr[num], player1, player2, player3);
};

const activeNext = (player1, player2) => {
  player1.turn = "click next";
  player2.turn = "P2 plays";
}

export const nextCards = (player1, player2, player3, arr) => {
  if (player1.turn === "P1 doesn't play" && player2.turn === "P2 plays") {
    cardView.renderPlayers.opponentWin(player1, player2);
    activeNext(player1, player2);

  } else if (player1.turn === "P1 plays" && player2.turn === "click next") {
    cardView.renderPlayers.selective(player1, player2);
    
    player2.turn = "P2 doesn't play";
    player1.turn = "P1 plays";

  } else if (player1.turn === "click next" && player2.turn === "P2 plays") {
    opponentPlays(player1, player2, player3, arr);

  } 
};


