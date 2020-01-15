import card from './models/Card';
import { elements } from './views/base'
import * as cardView from './views/cardView'

let middlePile = [];
let strength, skill, size, button, attr, HTMLs, player1, player2, gamePlaying, attributes;

function setAtr(atr) {
  let htmlAtr = `<p id="${atr}">${atr.charAt(0).toUpperCase() + atr.slice(1)}:</p><p class="${atr}-value">%${atr}%</p>`;
  return htmlAtr;
};

player1 = {
    containerId: 'card-player1',
    cards: []
};

player2 = {
    containerId: 'card-player2',
    cards: []
};

attributes = {
  attr1: 0,
  attr2: 0
}

const allCards = [new card("Iron Man", 30, 9, 10, 5, 20, 10, "./img/ironMan.png"), new card("Dr. Strange", 15, 7, 8, 2, 80, 8, "./img/drStrange.png"),
new card("Captain America", 28, 10, 10, 2, 25, 9, "./img/captainAmerica.png"), new card("Ant-Man", 10, 10, 1, 1, 25, 7, "./img/antMan.png"),
new card("Hulk", 50, 2, 5, 1, 20, 9, "./img/hulk.png"), new card("Thor", 30, 3, 11, 1, 75, 9, "./img/thor.png")];

// init();

// GAME CONTROLLER

// 1. Shuffle cards function

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//  2. Deal cards function
function dealCards(arr, player1, player2) {
  let cards1, cards2;

  shuffle(arr);

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

// ----------------------------------------------------

function showCards(player) {
  document.getElementById(elements.content).innerHTML = cardView.showCard(player);
}

// function playerEdit(container, player) {
//   let getPlayer, htmlPlayer;
//   getPlayer = document.getElementById(container);
//   htmlPlayer = htmlReplacement(player);
//   getPlayer.insertAdjacentHTML('beforeend', htmlPlayer);
// }

function cleanField(a) {
  document.getElementById(a).innerHTML = "";
}

// // Show player's top card
// function showPlayer(player) {
//   let htmlPlayer, container;

//   if (player === player1 && player1.html === HTMLs.html){
//     player1.html = HTMLs.htmlButtons + HTMLs.htmlLength;
//   }

//   if (player === player2) {
//     let imgCont = document.getElementById('backCard');
//     imgCont.parentNode.removeChild(imgCont);
//   }

//   container = player.containerId;

//   playerEdit(container, player);
// }


// function removeButtons(player) {
//   let getPlayer, htmlPlayer, container;

//   player.html = HTMLs.html;
//   container = player.containerId;
//   cleanField(container);
//   playerEdit(container, player);
// }

// function addButtons(player) {
//   player.html = HTMLs.html;
//   showPlayer(player);
// }

// function hidePlayers(player1, player2) {
//   cleanField(player1.containerId);
//   cleanField(player2.containerId);
// }

// // --------------------------------------------

// function whichButton(val1, val2) {
//   attributes.attr1 = val1;
//   attributes.attr2 = val2;
//   return attributes;
// }

// let array1 = player1.cards;
// let array2 = player2.cards;

// function resultBetween(player1, player2) {
//   showPlayer(player2);
//   removeButtons(player1);
// }

// // --------------------------------------------

// function buttons(button, attribute, player1, player2) {
//   document.querySelector(button).addEventListener('click', function() {
//     let one = player1.cards[0][attribute];
//     let two = player2.cards[0][attribute];

//     let newValues = whichButton(one, two);
//     resultBetween(player1, player2);
// })};

// // function buttonsActive() {
// //   buttons(DOMstrings.strengthBtn, 'strength', player1, player2);
// //   buttons(DOMstrings.skillBtn, 'skill', player1, player2);
// //   buttons(DOMstrings.sizeBtn, 'size', player1, player2);
// //   buttons(DOMstrings.wisecracksBtn, 'wisecracks', player1, player2);
// //   buttons(DOMstrings.mystiqueBtn, 'mystique', player1, player2);
// //   buttons(DOMstrings.ratingBtn, 'rating', player1, player2);
// // }

// function giveTheCard(arr1, arr2) {
//   const cardToGo = arr2.splice(0, 1);
//   arr1.push(cardToGo[0]);
// }

// function moveTheFirstCard(player) {
//   let firstCard = player.cards.splice(0, 1);
//   player.cards.push(firstCard[0]);
// }

// // --------------------------------------------

// let tieContainer;
// tieContainer = document.getElementById('tie-container');

// function showTieCards(arr) {
//   cleanField('tie-container');
//   let cardTitle, cardImage, cardStrength, cardSkill, cardSize, cardWisecracks, cardMystique, cardRating, cardHTML;
//   arr.forEach(function(card) {
//     cardTitle = card.title;
//     cardImage = card.image;
//     cardStrength = card.strength;
//     cardSkill = card.skill;
//     cardSize = card.size;
//     cardWisecracks = card.wisecracks;
//     cardMystique = card.mystique;
//     cardRating = card.rating;

//     cardHTML = HTMLs.htmlTie;
//     cardHTML = replacements(cardHTML, cardTitle, cardImage, cardStrength, cardSkill, cardSize, cardWisecracks, cardMystique, cardRating);
//     tieContainer.insertAdjacentHTML('beforeend', cardHTML);
//   });

//   arrContainerSize = HTMLs.htmlTieLength;
//   arrContainerSize = arrContainerSize.replace('%number%', arr.length);
//   tieContainer.insertAdjacentHTML('beforeend', arrContainerSize);
//   return tieContainer;
// }

// function tie(arr1, arr2, arr) {
//   if (attributes.attr1 === attributes.attr2) {
//     giveTheCard(arr, arr1);
//     giveTheCard(arr, arr2);
//     showTieCards(arr);
//   }
// }

// function passTieCards(arr1, arr) {
//   arr.forEach(function(card) {
//     arr1.push(card);
//   })
//   arr.splice(0, arr.length);
//   cleanField('tie-container');
// }

// // --------------------------------------------

// function nextCard(arr1, arr2, arr) {
//   if(attributes.attr1 > attributes.attr2) {
//     moveTheFirstCard(player1);
//     giveTheCard(arr1, arr2);
//     if(arr.length > 0){
//       passTieCards(arr1, arr);
//     }
//   } else if(attributes.attr2 > attributes.attr1) {
//     moveTheFirstCard(player2);
//     giveTheCard(arr2, arr1);
//     if(arr.length > 0){
//       passTieCards(arr2, arr);
//     }
//   } else {
//     tie(arr1, arr2, arr);
//   }
// }

// // --------------------------------------------

// function playGame(player1, player2) {
//   if(gamePlaying) {
//     buttonsActive();
//     document.getElementById(DOMstrings.continueButton).addEventListener('click', function() {
//       nextCard(array1, array2, middlePile);
//       hidePlayers(player1, player2);
//       showPlayer(player1);
//       // cleanField(player2.containerId);
//       showCards(player2);
//       buttonsActive();

//       console.log(gamePlaying);
//       console.log('Attributes: ', attributes.attr1, attributes.attr2);
//       console.log('Player1 Cards: ', player1.cards);
//       console.log('Player1 Cards.length: ', player1.cards.length);
//       console.log('Player2 Cards: ', player2.cards);
//       console.log('Player2 Cards.length: ', player2.cards.length);

//       if(player1.cards.length === allCards.length || player2.cards.length === allCards.length) {
//         removeButtons(player1);

//         let continueBtn = document.getElementById(DOMstrings.continueButton);
//         continueBtn.parentNode.removeChild(continueBtn);

//         gamePlaying = false;
//       }
//     })
//   }
// };


// document.getElementById(DOMstrings.newGame).addEventListener('click', function() {
//   cleanField(player1.containerId);
//   cleanField(player2.containerId);
//   init();
// });

// document.getElementById(DOMstrings.newGame).addEventListener('click', function() {
//   cleanField(player1.containerId);
//   showPlayer(player1);
//   playGame(player1, player2);
//   let startBtn = document.getElementById(DOMstrings.newGame);
//   startBtn.parentNode.removeChild(startBtn);
// });

document.getElementById(elements.newGame).addEventListener('click', init);

function init() {
  // 1. Shuffle Cards
  player1.cards = [];
  player2.cards = [];

  // 1a. Clean main page
  cleanField(elements.content);

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

















