import card from './models/Card';
import player from './models/Player';
import { elements } from './views/base';
import * as cardView from './views/cardView';
import * as gameCtrl from './controllers/gameController';

// Pick game card category
// Play with your friend
// Play with multiple friends
// Play with your own top trumps cards

// game variables
let selective, gamePlaying; 

// define game cards
const allCards = [new card("Iron Man", 30, 9, 10, 5, 20, 10, "./img/ironMan.png"), new card("Dr. Strange", 15, 7, 8, 2, 80, 8, "./img/drStrange.png"),
new card("Captain America", 28, 10, 10, 2, 25, 9, "./img/captainAmerica.png"), new card("Ant-Man", 10, 10, 1, 1, 25, 7, "./img/antMan.png"),
new card("Hulk", 50, 2, 5, 1, 20, 9, "./img/hulk.png"), new card("Thor", 30, 3, 11, 1, 75, 9, "./img/thor.png")];

// define players
const players = [new player(0, []), new player(1, []), new player(3, [])];

// player shortcuts
const p1 = players[0];
const p2 = players[1];
const tie = players[2];

// cards controller
const cardsCtrl = {
  // 1. Shuffle Cards
  shuffle: function(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  // 2. Deal Cards
  dealCards: function(arr, player1, player2) {
    let cards1, cards2;

    this.shuffle(arr);

    cards1 = player1.cards;
    cards2 = player2.cards;

    const half = arr.length / 2;
    for(let i = 0; i < half; i++) {
      cards1.push(arr[i])
    }

    for(let i = half; i < arr.length; i++) {
      cards2.push(arr[i])
    }
  }
};

// cards controller
// navbar buttons
// game controller
// activating the buttons on game play

const atrBtn = (a, b) => {
  if(a) {
    gameCtrl.controlCards(b, p1, p2, tie);

    // 3. render both player cards without buttons 
    cardView.setPlayers(elements.bannerContent, p1, p2, selective, tie);
  }
};

const navBtn = (a, b, c) => {
  if (a && b === "play-game") {
    init();
  } else if (a && b === "next-card" && c === false) {
    gameCtrl.passingCard(p1, p2, tie, selective);
  }
};

elements.bannerContent.addEventListener('click', e => {
  const btn = e.target.closest('.atr-btn');
  console.log(btn);

  const atr = btn.dataset.goto;

  // get the attribute button that the player clicked
  atrBtn(btn, atr);

  // If selective is false navbar next button is active

  // If selective is true card buttons are active

  // 1. while playing, game playing is true

  // 2. track of player's cards

  // 3. if there is a tie send two cards to middle pile

  // 4. game over when a player's cards are 0
});

elements.bannerContent.addEventListener('click', e => {
  const nav = e.target.closest('.btn-green-nav');
  const clicked = nav.dataset.goto;
  console.log(clicked);

  // get the attribute button that the player clicked
  navBtn(nav, clicked, selective);

  // If selective is false navbar next button is active

  // If selective is true card buttons are active

  // 1. while playing, game playing is true

  // 2. track of player's cards

  // 3. if there is a tie send two cards to middle pile

  // 4. game over when a player's cards are 0
});

// Initialization

function init() {
  // 1. Set gamePlaying true
  gamePlaying = true;

  // 2. Set selective to true
  selective = true;

  // 3. Clean the banner & add the player divs
  cardView.cleanField(elements.bannerContent);

  // 4. Shuffle and deal cards
  cardsCtrl.dealCards(allCards, p1, p2);
  console.log(allCards);
  console.log(p1);
  console.log(p2);

  cardView.setPlayers(elements.bannerContent, p1, p2, selective, tie);
  // 5. Start playing
  // gamePlay();
};


document.getElementById(elements.newGame).addEventListener('click', e => {
    init();
});
