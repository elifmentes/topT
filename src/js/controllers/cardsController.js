import * as cardView from '../views/cardView';
import { elements } from '../views/base';

export const cardsCtrl = {
  // 1. Shuffle Cards
  shuffle: function(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    return arr;
  },
  // 2. Deal Cards
  dealCards: function(arr, player1, player2) {
    let cards1, cards2;
    cardView.cleanField(elements.bannerContent);

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