import * as cardView from '../views/cardView';
import * as gameCtrl from './gameController';
import { elements } from '../views/base';

export const atrBtnClicked = (atr, p1, p2, p3, gp) => {
  // 1. Set selective to false
  if (p1.cards.length > 0 && p2.cards.length > 0) {
    // 2. Set player stats
    gameCtrl.winnerPlays(atr, p1, p2, p3);
  }; 

  if (p2.cards.length === 0) {
    gp = false;
    cardView.cleanField(elements.bannerContent);
    const winner = gameCtrl.lastRound(p1, p2, p3);
    cardView.showAllCards(elements.bannerContent, winner);
  } 
};

export const navBtn = (btnOpt, p1, p2, p3, arr, gp) => {
  if (btnOpt === "play-game") {
    // 1. Reset Player Cards
    p1.cards = [];
    p2.cards = [];
    init();
  } else if (btnOpt === "next-card") {
    if(gp) {
      gameCtrl.nextCards(p1, p2, p3, arr);
      if (p1.cards.length === 0) {
        gp = false;
        cardView.cleanField(elements.bannerContent);
        const winner = gameCtrl.lastRound(p1, p2, p3);
        cardView.showAllCards(elements.bannerContent, winner);
      } 
    }
  }
};