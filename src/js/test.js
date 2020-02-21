const testFunction = () => {
  console.log("ALFAAAAA");
};

export { testFunction };


Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@elifmentes 
elifmentes
/
topT
Private
1
00
 Code Issues 0 Pull requests 0 Actions Projects 0 Security Insights Settings
javascript before mvc - es5

 master (#2)
@elifmentes
elifmentes committed on Dec 4, 2019
1 parent b04da15 commit 61b31f791183d35301504ac6ffe5486fd38b2c68
Showing  with 432 additions and 2 deletions.
 434  src/js/index.js 
@@ -1,3 +1,433 @@
import num from "./test";
// console.log('Hello World!')
let middlePile = [];
let strength, skill, size, button, attr, HTMLs, player1, player2, gamePlaying, attributes;

function setAtr(atr) {
  let htmlAtr = `<p id="${atr}">${atr.charAt(0).toUpperCase() + atr.slice(1)}:</p><p class="${atr}-value">%${atr}%</p>`;
  return htmlAtr;
}

HTMLs = {
  cardBackHtml: `<div class="card"><img id="backCard" src="CSS/images/topTrumps.png"></div>`,
  html: `<div class="card">
          <div class="card-top">
            <div class="card-title">
              <h5>%title%</h5>
            </div>
            <div class="card-image" style="background-image: url('%image%')">
            </div>
          </div>
          <div class= "card-attributes">
            <div class="card-attributes-left">
              <div class="card-attribute card-strength">${setAtr("strength")}</div>
              <div class="card-attribute card-skill">${setAtr("skill")}</div>
              <div class=" card-attribute card-size">${setAtr("size")}</div>
            </div>
            <div class="card-attributes-right">
              <div class="card-attribute card-wisecracks">${setAtr("wisecracks")}</div>
              <div class="card-attribute card-mystique">${setAtr("mystique")}</div>
              <div class="card-attribute card-rating">${setAtr("rating")}</div>
            </div>
          </div>
        </div>
      </div>`,
  htmlButtons: `<div class="card">
                  <div class="card-top">
                    <div class="card-title"><h5>%title%</h5></div>
                    <div class="card-image" style="background-image: url('%image%')"></div>
                  </div>
                  <div class= "card-attributes">
                    <div class="card-attributes-left">
                      <div class="card-attribute card-strength">
                        <button class="strength-button">${setAtr("strength")}</button>
                      </div>
                      <div class="card-attribute card-skill">
                        <button class="skill-button">${setAtr("skill")}</button>
                      </div>
                      <div class=" card-attribute card-size">
                        <button class="size-button">${setAtr("size")}</button>
                      </div>
                    </div>
                    <div class="card-attributes-right">
                      <div class="card-attribute card-wisecracks">
                        <button class="wisecracks-button">${setAtr("wisecracks")}</button>
                      </div>
                      <div class="card-attribute card-mystique">
                        <button class="mystique-button">${setAtr("mystique")}</button>
                      </div>
                      <div class="card-attribute card-rating">
                        <button class="rating-button">${setAtr("rating")}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`,
  htmlLength: `<h5 class="card-number">%number%</h5>`
};

player1 = {
    containerId: 'card-player1',
    html: HTMLs.html
};

player2 = {
    containerId: 'card-player2',
    html: HTMLs.html
};

attributes = {
  attr1: 0,
  attr2: 0
}

class Card {
  constructor(title, strength, skill, size, wisecracks, mystique, rating, image) {
    this.title = title;
    this.strength = strength;
    this.skill = skill;
    this.size = size;
    this.wisecracks = wisecracks;
    this.mystique = mystique;
    this.rating = rating;
    this.image = image;
  }
}

const allCards = [new Card("Iron Man", 30, 9, 10, 5, 20, 10, "CSS/images/ironMan.png"), new Card("Dr. Strange", 15, 7, 8, 2, 80, 8, "CSS/images/drStrange.png"),
new Card("Captain America", 28, 10, 10, 2, 25, 9, "CSS/images/captainAmerica.png"), new Card("Ant-Man", 10, 10, 11, 25, 7, "CSS/images/antMan.png"),
new Card("Hulk", 50, 2, 5, 1, 20, 9, "CSS/images/hulk.png"), new Card("Thor", 30, 3, 11, 1, 75, 9, "CSS/images/thor.png")];

init();

// // GAME CONTROLLER

// // 1. Shuffle cards function

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//  // 2. Deal cards function
function dealCards(arr, player1, player2) {
  let cards1, cards2;

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

// UI CONTROLLER

const DOMstrings = {
  cardTitle: '.card-title',
  cardImage: '.card-image',

  cardStrength: '.card-strength',
  cardSkill: '.card-skill',
  cardSize: '.card-size',
  cardWisecracks: '.card-wisecracks',
  cardMystique: '.card-mystique',
  cardRating: '.card-rating',

  strengthBtn: '.strength-button',
  skillBtn: '.skill-button',
  sizeBtn: '.size-button',
  wisecracksBtn: '.wisecracks-button',
  mystiqueBtn: '.mystique-button',
  ratingBtn: '.rating-button',

  continueButton: '.continue',
  newGame: '.new-game',
  startButton: '.start-game'
};

function replacements(html, title, image, strength, skill, size, wisecracks, mystique, rating) {
  html = html.replace('%title%', title);
  html = html.replace('%image%', image);
  html = html.replace('%strength%', strength);
  html = html.replace('%skill%', skill);
  html = html.replace('%size%', size);
  html = html.replace('%wisecracks%', wisecracks);
  html = html.replace('%mystique%', mystique);
  html = html.replace('%rating%', rating);
  return html;
}

function htmlReplacement(player) {
  let theCards, theCard, theHTML, newHTML, cardImage;

  theCards = player.cards;
  theCard = player.cards[0];
  theHTML = player.html;

  newHTML = replacements(theHTML, theCard.title, theCard.image, theCard.strength, theCard.skill, theCard.size, theCard.wisecracks, theCard.mystique, theCard.rating);

  newHTML = newHTML.replace('%number%', theCards.length);
  return newHTML;
}

function showCards(player) {
  let pilePlayer = document.getElementById(player.containerId);
  pilePlayer.insertAdjacentHTML('beforeend', HTMLs.cardBackHtml);
}

function playerEdit(container, player) {
  let getPlayer, htmlPlayer;
  getPlayer = document.getElementById(container);
  htmlPlayer = htmlReplacement(player);
  getPlayer.insertAdjacentHTML('beforeend', htmlPlayer);
}

function cleanField(playerId) {
  document.getElementById(playerId).innerHTML = "";
}

// // Show player's top card
function showPlayer(player) {
  let htmlPlayer, container;

  if (player === player1 && player1.html === HTMLs.html){
    player1.html = HTMLs.htmlButtons + HTMLs.htmlLength;
  }

  if (player === player2) {
    let imgCont = document.getElementById('backCard');
    imgCont.parentNode.removeChild(imgCont);
  }

  container = player.containerId;

  playerEdit(container, player);
}


function removeButtons(player) {
  let getPlayer, htmlPlayer, container;

  player.html = HTMLs.html;
  container = player.containerId;
  cleanField(container);
  playerEdit(container, player);
}

function addButtons(player) {
  player.html = HTMLs.html;
  showPlayer(player);
}

function hidePlayers(player1, player2) {
  cleanField(player1.containerId);
  cleanField(player2.containerId);
}

// --------------------------------------------

function whichButton(val1, val2) {
  attributes.attr1 = val1;
  attributes.attr2 = val2;
  return attributes;
}

let array1 = player1.cards;
let array2 = player2.cards;

function resultBetween(player1, player2) {
  showPlayer(player2);
  removeButtons(player1);
}

// --------------------------------------------

function buttons(button, attribute, player1, player2) {
  document.querySelector(button).addEventListener('click', function() {
    let one = player1.cards[0][attribute];
    let two = player2.cards[0][attribute];

    let newValues = whichButton(one, two);
    resultBetween(player1, player2);
})};

function buttonsActive() {
  buttons(DOMstrings.strengthBtn, 'strength', player1, player2);
  buttons(DOMstrings.skillBtn, 'skill', player1, player2);
  buttons(DOMstrings.sizeBtn, 'size', player1, player2);
  buttons(DOMstrings.wisecracksBtn, 'wisecracks', player1, player2);
  buttons(DOMstrings.mystiqueBtn, 'mystique', player1, player2);
  buttons(DOMstrings.ratingBtn, 'rating', player1, player2);
}

function giveTheCard(arr1, arr2) {
  const cardToGo = arr2.splice(0, 1);
  arr1.push(cardToGo[0]);
}

function moveTheFirstCard(player) {
  let firstCard = player.cards.splice(0, 1);
  player.cards.push(firstCard[0]);
}

// --------------------------------------------

let tieContainer;
tieContainer = document.getElementById('tie-container');

function showTieCards(arr) {
  cleanField('tie-container');
  let cardTitle, cardImage, cardStrength, cardSkill, cardSize, cardWisecracks, cardMystique, cardRating, cardHTML;
  arr.forEach(function(card) {
    cardTitle = card.title;
    cardImage = card.image;
    cardStrength = card.strength;
    cardSkill = card.skill;
    cardSize = card.size;
    cardWisecracks = card.wisecracks;
    cardMystique = card.mystique;
    cardRating = card.rating;

    cardHTML = HTMLs.htmlTie;
    cardHTML = replacements(cardHTML, cardTitle, cardImage, cardStrength, cardSkill, cardSize, cardWisecracks, cardMystique, cardRating);
    tieContainer.insertAdjacentHTML('beforeend', cardHTML);
  });

  arrContainerSize = HTMLs.htmlTieLength;
  arrContainerSize = arrContainerSize.replace('%number%', arr.length);
  tieContainer.insertAdjacentHTML('beforeend', arrContainerSize);
  return tieContainer;
}

function tie(arr1, arr2, arr) {
  if (attributes.attr1 === attributes.attr2) {
    giveTheCard(arr, arr1);
    giveTheCard(arr, arr2);
    showTieCards(arr);
  }
}

function passTieCards(arr1, arr) {
  arr.forEach(function(card) {
    arr1.push(card);
  })
  arr.splice(0, arr.length);
  cleanField('tie-container');
}

// --------------------------------------------

function nextCard(arr1, arr2, arr) {
  if(attributes.attr1 > attributes.attr2) {
    moveTheFirstCard(player1);
    giveTheCard(arr1, arr2);
    if(arr.length > 0){
      passTieCards(arr1, arr);
    }
  } else if(attributes.attr2 > attributes.attr1) {
    moveTheFirstCard(player2);
    giveTheCard(arr2, arr1);
    if(arr.length > 0){
      passTieCards(arr2, arr);
    }
  } else {
    tie(arr1, arr2, arr);
  }
}

// --------------------------------------------

function playGame(player1, player2) {
  if(gamePlaying) {
    buttonsActive();
    document.querySelector(DOMstrings.continueButton).addEventListener('click', function() {
      nextCard(array1, array2, middlePile);
      hidePlayers(player1, player2);
      showPlayer(player1);
      // cleanField(player2.containerId);
      showCards(player2);
      buttonsActive();

      console.log(gamePlaying);
      console.log('Attributes: ', attributes.attr1, attributes.attr2);
      console.log('Player1 Cards: ', player1.cards);
      console.log('Player1 Cards.length: ', player1.cards.length);
      console.log('Player2 Cards: ', player2.cards);
      console.log('Player2 Cards.length: ', player2.cards.length);

      if(player1.cards.length === allCards.length || player2.cards.length === allCards.length) {
        removeButtons(player1);

        let continueBtn = document.querySelector(DOMstrings.continueButton);
        continueBtn.parentNode.removeChild(continueBtn);

        gamePlaying = false;
      }
    })
  }
};


document.querySelector(DOMstrings.newGame).addEventListener('click', function() {
  cleanField(player1.containerId);
  cleanField(player2.containerId);
  init();
});

document.querySelector(DOMstrings.startButton).addEventListener('click', function() {
  cleanField(player1.containerId);
  showPlayer(player1);
  playGame(player1, player2);
  let startBtn = document.querySelector(DOMstrings.startButton);
  startBtn.parentNode.removeChild(startBtn);
});

function init() {
  // 1. Shuffle Cards

  player1.cards = [];
  player2.cards = [];

  shuffle(allCards);

  // 2. Deal Cards
  dealCards(allCards, player1, player2);

  showCards(player1);
  showCards(player2);
  console.log(allCards);
  console.log(player1.cards);
  console.log(player2.cards);

  // 3. Show Player
  // showPlayer(player1);

  attributes.attr1 = 0;
  attributes.attr2 = 0;
  gamePlaying = true;
}
