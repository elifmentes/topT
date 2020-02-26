import * as cardView from '../views/cardView';

const tieSituation = (arr, player) => {
  if (arr.length > 0) {
    const card = arr.splice(0, arr.length);
    card.forEach(c => {
      player.push(c);
    })
  }
};

const tiePrevWinner = (player1, player2, player3) => {
  if(player1.tieStat === "Winner") {
    tieSituation(player3.cards, player1.cards);
    return player1;
  } else if(player2.tieStat === "Winner") {
    tieSituation(player3.cards, player2.cards);
    return player2;
  }
}


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

  // Option 1. when player1's selected value is greater than the player2's 
  if(p1FirstCard > p2FirstCard) {
    p1.stat = "Winner";
    p2.stat = "Loser";

    p1.tieStat = p1.stat;
    p2.tieStat = p2.stat;

    // Set players length for the rendering the card
    cardView.renderPlayers.notSelective(p1, p2, p3);

    // Pass top cards
    
    passCard(p2, p1);
    passCard(p1, p1);

    // If tie is not empty push tie cards
    tieSituation(p3.cards, p1.cards);

    p1.turn = "P1 plays";
    p2.turn = "click next";
    p3.stat = "";

  // Option 2. when player2's selected value is greater than the player1's
  } else if (p2FirstCard > p1FirstCard) {

    p1.stat = "Loser";
    p2.stat = "Winner";
    p3.stat = "";

    p1.tieStat = p1.stat;
    p2.tieStat = p2.stat;

    // Set players length for the rendering the card
    // length(p2, p1);
    cardView.renderPlayers.notSelective(p1, p2, p3);

    // Pass top cards
    
    passCard(p1, p2);
    passCard(p2, p2);

    // If tie is not empty push tie cards
    tieSituation(p3.cards, p2.cards);

    p2.turn = "P2 plays";
    p1.turn = "P1 doesn't play";

  } else if (p2FirstCard === p1FirstCard) {
    // Option 3. when player1's selected value is equal to player2's
  	p3.stat = "Tie";
    p1.stat = "";
    p2.stat = "";

    p2.turn = "click next";
    p1.turn = "click next";

    cardView.renderPlayers.notSelective(p1, p2, p3);

    // Pass top cards to tie pile
    passCard(p1, p3);
    passCard(p2, p3);
  };

  console.log("Player 1: ");
  console.log(p1);
  console.log("Player 2: ");
  console.log(p2);
  console.log("Tie: ");
  console.log(p3);
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
  } else if (player3.stat === "Tie") {
    let winner = tiePrevWinner(player1, player2, player3);
    winner.id === player1.id ? cardView.renderPlayers.selective(player1, player2) : opponentPlays(player1, player2, player3, arr);
    // console.log(winner);
  } else if (player1.turn === "click next" && player2.turn === "click next") {
      cardView.renderPlayers.opponentWin(player1, player2);
  }

  console.log("Player1: " + player1.stat);
  console.log("Player2: " + player2.stat)
};

export const lastRound = (player1, player2, player3) => {
    if(player1.cards.length === 0) {
      return player2;
    } else if(player2.cards.length === 0) {
      return player1;
    } 

    console.log("Game Over");
};
