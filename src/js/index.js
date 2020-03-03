import { elements } from './views/base';
import * as cardView from './views/cardView';
import * as categoryView from './views/categoryView';
import * as gameCtrl from './controllers/gameController';
import * as btnCtrl from './controllers/buttonsController';
import * as catCtrl from './controllers/categoryController';
import * as cardCtrl from './controllers/cardsController';
import * as models from './seeds';

// game variables
let selective, gamePlaying, cards;

const cont = elements.bannerContent;
// shortcuts
const p1 = models.players[0];
const p2 = models.players[1];
const tie = models.players[2];
const attributesOp = models.attributesOp;
const categories = models.categories;
const cardsCtrl = cardCtrl.cardsCtrl;

// PICK CARD BUTTONS
cont.addEventListener('click', e => {
  const btn = e.target.closest('.main-btns');
  if(btn) {
    catCtrl.whichMButton(btn);
  }
});

// CATEGORY BUTTONS
cont.addEventListener('click', e => {
  const btn = e.target.closest('.category-card');
  if(btn) {
    const category = btn.dataset.goto.toLowerCase();
    cards = models.categoryCards(category);
    init();
  }
});

// SUBMIT NEW CATEGORY
elements.ctgr.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.currentTarget);
  const res = categoryView.getInput();
  models.newCategory(res);
  categoryView.getValues();
})

// ATTRIBUTE BUTTONS
cont.addEventListener('click', e => {
  const btn = e.target.closest('.atr-btn');
  if(btn) {
    const atr = btn.dataset.goto;
    btnCtrl.atrBtnClicked(atr, p1, p2, tie, gamePlaying);
  }
});

// NAVBAR BUTTONS
cont.addEventListener('click', e => {
  const nav = e.target.closest('.btn-green-nav');
  if(nav) {
    const navName = nav.dataset.goto;
    btnCtrl.navBtn(navName, p1, p2, tie, attributesOp, gamePlaying);
  }
});

// Initialization
function init() {
  // 1. Set gamePlaying true
  gamePlaying = true;
  p1.turn = "firstRound";
  p1.tieStat = "Winner";
  p2.turn = "firstRound";

  // 2. Clean the banner & add the player divs
  cardView.cleanField(cont);

  // 3. Shuffle and deal cards
  cardsCtrl.dealCards(cards, p1, p2);

  // 4. Render player
  cardView.renderPlayers.selective(p1, p2);

  console.log(p1.cards);
  console.log(p2.cards);
};

