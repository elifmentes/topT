import * as cardView from '../views/cardView';

let winner;
// 1. Passing card function
const passCard = (p1, p2) => {
	// 1. pass first card from player1 to player2
	const card = p1.cards.splice(0, 1);
	p2.cards.push(card[0]);
};

// 2. Tie situation passing cards from tie pile to the player
const tiePassCard = (arr, p) => {
  if (arr.length > 0) {
    const card = arr.splice(0, arr.length);
    card.forEach(c => {
      p.push(c);
    })
  }
};

const tieCards = (arr, p) => {
  if (arr.length > 0) {
    tiePassCard(arr, p.cards)
  }
};

// 3. In a tie situation who was the winner in the last round
const tiePrevWinner = (p1, p2) => {
  if(p1.tieStat === "Winner") {
    return player1;
  } else if(p2.tieStat === "Winner") {
    return player2;
  }
};

// 3. Compare players who won
const compareCards = (atr, p1, p2, p3) => {
  // 1. Get the attribute value of the top cards of the players
  const p1Card = p1.cards[0][atr];
  const p2Card = p2.cards[0][atr];

  // 2. Compare the values between players and set stats to winner or loser if they have a tie send cards to "tie player"

  // Option 1. when player1's selected value is greater than the player2's 
  if(p1Card > p2Card) {
    // player 1 will play, player 2 will wait
    p1.turn = "plays";
    p2.turn = "waits";
    p3.stat = "";

    return p1;

  // Option 2. when player2's selected value is greater than the player1's
  } else if (p2Card > p1Card) {
    // player 2 will play, player 1 will wait
    p1.turn = "waits";
    p2.turn = "plays";
    p3.stat = "";
    return p2;

  // Option 3. when player1's selected value is equal to player2's
  } else if (p2Card === p1Card) {

    p3.stat = "tie";
    return p3;
  }
  // } else if(p1.turn === "firstRound" && p2.turn === "firstRound" && p3.turn === "tie") {
  //   cardView.renderPlayers.selective(p1, p2);
  //   p1.turn = "plays";
  //   p2.turn = "waits";
  // };
};

// 4. Changes depending on the winner
export const winnerPlays = (atr, p1, p2, p3) => {
  let cardP1, cardP2;
  cardP1 = p1.cards[0];
  cardP2 = p2.cards[0]; 
  // Determine the winner
  winner = compareCards(atr, p1, p2, p3);
  
  console.log(`Winner is player ${winner.id}`);

  // When the winner is the player 1
  if(winner.id === 0) {
    // player 2 gives the card to player 1 and player 1's card goes back of the pile
    passCard(p2, p1);
    passCard(p1, p1);
    tieCards(p3.cards, p1);

  // When the winner is the player 2
  } else if(winner.id === 1) {
    // player 1 gives the card to player 2 and player 2's card goes back of the pile
    passCard(p1, p2);
    passCard(p2, p2);  

    tieCards(p3.cards, p2);

  // When there is a tie
  } else if(winner.id === 2 && p1.turn !== "firstRound") {

    passCard(p1, p3);
    passCard(p2, p3);

  } else if(winner.id === 2 && p1.turn === "firstRound" && p2.turn === "firstRound") {
    passCard(p1, p3);
    passCard(p2, p3);
    p1.turn = "plays";
    p2.turn = "waits";
  };

  console.log(`Player 1: ${p1.turn}`);
  console.log(`Player 2: ${p2.turn}`);
  console.log(`Tie: ${p3.stat}`);

  p1.tieStat = p1.stat;
  p2.tieStat = p2.stat;


  cardView.renderPlayers.notSelective(cardP1, cardP2, p1, p2, p3);
}

// Opponent picks an attribute
const opponentPicksAtr = (arr) => {
  const num = Math.floor(Math.random() * 7);
  const opAtr = arr[num];
  return opAtr;
};

// Opponent plays function
const opponentPlays = (p1) => {
  p1.turn = "next";
};

const tiePlayer = (p1, p2, p3) => {
  if(p1.tieStat === "Winner") {
    cardView.renderPlayers.selective(player1, player2);

  } else if (p2.tieStat === "Winner") {
    cardView.renderPlayers.opponentWin(p1, p2);
    opponentPlays(p1);
  }
}

// Next Button configurations
export const nextCards = (p1, p2, p3, arr) => {
  // 1. When player 2 won and plays
  if (p1.turn === "next" && p2.turn === "plays") {
    // a. render cards player 1 not selective, player 2 card cover
    const opAtr = opponentPicksAtr(arr);
    winnerPlays(opAtr, p1, p2, p3);

  } else if(p1.turn === "waits" && p2.turn === "plays") {
    cardView.renderPlayers.opponentWin(p1, p2);
    opponentPlays(p1);
    
  // 2. When player 1 won and plays
  } else if (p1.turn === "plays" && p2.turn === "waits") {
    cardView.renderPlayers.selective(p1, p2);

  // 4. When tie 
  } else if (p3.stat === "Tie") {
    p1.turn = "next";
    p2.turn = "next";

  // 5.
  } else if (p1.turn === "next" && p2.turn === "next") {
      // cardView.renderPlayers.opponentWin(player1, player2);
      tiePlayer(p1, p2, p3);
  }

  console.log(`Player 1: ${p1.turn}`);
  console.log(p1.cards);
  console.log(`Player 2: ${p2.turn}`);
  console.log(p2.cards);
  console.log(`Tie: ${p3.stat}`);
  console.log(p3.cards);
};

export const lastRound = (p1, p2, p3) => {
    if(p1.cards.length === 0) {
      tieCards(p3.cards, p2);
      return p2;
    } else if(p2.cards.length === 0) {
      tieCards(p3.cards, p1);
      return p1;
    } 

    console.log("Game Over");
};
