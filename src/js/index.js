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
const cont = elements.bannerContent;

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
  shuffle: function(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // 2. Deal Cards
  dealCards: function(arr, player1, player2) {
    let cards1, cards2;
    cardView.cleanField(cont);

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

const atrBtnClicked = (attribute, player1, player2, player3) => {
  // 1. Set selective to false
  selective = false;
  // 2. Set player stats
  gameCtrl.controlCards(attribute, player1, player2, player3);
  // 3. Pass cards
  // gameCtrl.passingCard(player1, player2, player3);
  // 4. Render both player cards without buttons 
  cardView.setPlayers.notSelective(cont, player1, player2, player3);
  
};

const navBtn = (btnOpt, player1, player2, player3) => {
  if (btnOpt === "play-game") {
    // 1. Reset Player Cards
    player1.cards = [];
    player2.cards = [];
    init();
  } else if (btnOpt === "next-card") {
    gameCtrl.passingCard(player1, player2, player3);
    cardView.setPlayers.selective(cont, player1, player2, player3);
    console.log(p1.cards);
    console.log(p2.cards);
    console.log(tie.cards);
  }
};

cont.addEventListener('click', e => {
  const btn = e.target.closest('.card-attribute');
  if(btn) {
    const atr = btn.dataset.goto;
    atrBtnClicked(atr, p1, p2, tie, selective);
    console.log(p1.cards);
    console.log(p2.cards);
    console.log(tie.cards)
  }
});

cont.addEventListener('click', e => {
  const nav = e.target.closest('.btn-green-nav');
  if(nav) {
    const navName = nav.dataset.goto;
    navBtn(navName, p1, p2, tie);
  }
});

// Initialization

function init() {
  // 1. Set gamePlaying true
  gamePlaying = true;

  // 2. Set selective to true
  selective = true;

  // 3. Clean the banner & add the player divs
  cardView.cleanField(cont);

  // 4. Shuffle and deal cards
  cardsCtrl.dealCards(allCards, p1, p2);

  console.log(allCards);
  console.log(p1);
  console.log(p2);

  cardView.setPlayers.selective(cont, p1, p2);
  // 5. Start playing
  // gamePlay();
};


document.getElementById(elements.newGame).addEventListener('click', e => {
    init();
});
