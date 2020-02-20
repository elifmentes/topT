import card from './models/Card';
import player from './models/Player';
import { elements } from './views/base';
import * as cardView from './views/cardView';

let middlePile = [];
let selective, gamePlaying; 
const allCards = [new card("Iron Man", 30, 9, 10, 5, 20, 10, "./img/ironMan.png"), new card("Dr. Strange", 15, 7, 8, 2, 80, 8, "./img/drStrange.png"),
new card("Captain America", 28, 10, 10, 2, 25, 9, "./img/captainAmerica.png"), new card("Ant-Man", 10, 10, 1, 1, 25, 7, "./img/antMan.png"),
new card("Hulk", 50, 2, 5, 1, 20, 9, "./img/hulk.png"), new card("Thor", 30, 3, 11, 1, 75, 9, "./img/thor.png")];

const players = [new player(0, []), new player(1, [])];
const p1 = players[0];
const p2 = players[1];

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

// player controller

// cards controller

// game controller

const gameCtrl = (a) => {
  if(a) {
    a.addEventListener('click', e => {
      const btn = e.target.closest('.btn-atr');
      console.log(btn);
      console.log(btn.dataset.cardAtr);
    });
  }
};

// 1. cards controller
// 2. while playing, game playing is true
// 3. track of player's cards
// 4. if there is a tie send two cards to middle pile
// 5. game over when a player's cards are 0

// start game 

// 1. Clean the banner
// 2. Shuffle and deal cards
// 3. Set game playing to true
// 4. Show the first card of the player

function init() {
  selective = true;
  // 1. Clean the banner & add the player divs
  cardView.cleanField(elements.bannerContent);
  cardView.changeCss(elements.bannerContent);

  // 2. Shuffle and deal cards
  cardsCtrl.dealCards(allCards, p1, p2);

  // 3. Set game playing to true
  gamePlaying = true;

  // 4. Show the first cards of the players
  cardView.setPlayers(elements.bannerContent, p1, p2, selective);
  // cardView.gamePlay(p1);
 
};


document.getElementById(elements.newGame).addEventListener('click', e => {
    init();
});

