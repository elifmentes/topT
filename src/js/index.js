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

// Submit button 
cont.addEventListener('click', e => {
  const smt = e.target.closest('.submit-btn');
  if(smt) {
    const catTitle = document.querySelector('.cat__title');
    const catAtr1 = document.querySelector('.cat__atr1');
    const catAtr2 = document.querySelector('.cat__atr2');
    const catAtr3 = document.querySelector('.cat__atr3');
    const catAtr4 = document.querySelector('.cat__atr4');
    const catAtr5 = document.querySelector('.cat__atr5');
    const catAtr6 = document.querySelector('.cat__atr6');
    const catNum = parseInt(document.querySelector('.cat__num').value);

    if (catNum >= 6 && catCtrl.catAtrs(catTitle.value) && catCtrl.catAtrs(catAtr1.value) && catCtrl.catAtrs(catAtr2.value) && catCtrl.catAtrs(catAtr3.value) && catCtrl.catAtrs(catAtr4.value) && catCtrl.catAtrs(catAtr5.value) && catCtrl.catAtrs(catAtr6.value)) {
      models.addCategory(models.categories, catTitle.value, catAtr1.value, catAtr2.value, catAtr3.value, catAtr4.value, catAtr5.value, catAtr6.value, catNum);

      const newCategory = categoryView.theInput(models.categories);
      models.addCatToCards(models.allCards, newCategory);
      categoryView.values(newCategory);
    } else {
      alert('please enter a number min 6');
      catCtrl.customize();
    }
  }
})

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

