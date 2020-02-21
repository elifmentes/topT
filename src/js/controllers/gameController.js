const tieSituation = player => {
	player.stat = "Tie";
};

const passCard = (player1, player2) => {
	// pass first card from player to other player
	const card = player1.cards.splice(0, 1);
	player2.cards.push(card[0]);
}

export const controlCards = (atr, p1, p2, p3) => {
  const p1FirstCard = p1.cards[0][atr];
  const p2FirstCard = p2.cards[0][atr];

  if(p1FirstCard > p2FirstCard) {
    p1.stat = "Winner";
    p2.stat = "Loser";
  } else if (p2FirstCard > p1FirstCard) {
    p1.stat = "Loser";
    p2.stat = "Winner";
  } else if (p2FirstCard === p1FirstCard) {
  	tieSituation(p3);
  }
};

export const passingCard = (p1, p2, p3, s) => {
	// if player 1 is winner
  if (p1.stat === "Winner") {
	passCard(p2, p1);
  } else if (p1.stat === "Winner") {
    passCard(p1, p2);
  } else {
	passCard(p1, p3);
  	passCard(p2, p3);
  }
  s = true;
	// if player 2 is winner
	// if tie stat is tie
}