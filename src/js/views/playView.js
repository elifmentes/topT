import { elements } from './base';

export const showGameBar = () => {
  const markup =
    `<div class="game-bar">
      <div class="left-items">
        <div class="start-next">
          <img src="img/play.png" alt="Play!" class="btn start-game" id="play-btn">
          <img src="img/next.png" alt="Continue!" class="btn continue" id="continue-btn">
        </div>
      </div>
      <div class="right-items">
        <img src="img/settings.png" alt="Settings" class="btn settings" id="settings-btn">
      </div>
    </div>`;
  document.getElementById(elements.content).insertAdjacentHTML('beforeend', markup);
}

export const cleanField = () => {
  document.getElementById(elements.bannerMain).innerHTML = "";
}

export const setAtr = atr => {
  let htmlAtr = `<p id="${atr}">${atr.charAt(0).toUpperCase() + atr.slice(1)}:</p><p class="${atr}-value">%${atr}%</p>`;
  return htmlAtr;
};
