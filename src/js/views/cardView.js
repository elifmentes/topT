import { elements } from './base';

export const getInput = () => {};

// const addPlayMode = () => {
//   let markup = `<div id='play-mode'></div>`
//   document.querySelector(elements.content).innerHTML = markup;
// }

export const renderCardwButtons = player => {
  // addPlayMode();
  const html =
    `<div class="card">
      <div class="card-content">
        <div class="card-top text-center">
          <div class="card-image" style="background-image: url('${player.cards[1].image}')"></div>
            <div class="top-content">
              <h5 class="card-title">${player.cards[1].title}</h5>
          </div>
        </div>
        <div class= "card-attributes">
          <div class="card-attributes-left">
            <a href="#" class="card-attribute">
              <h5 class="strength-atr">Strength:</h5>
              <h5 class="strength-button">${player.cards[1].strength}</h5>
            </a>
            <a href="#" class="card-attribute">
               <h5 class="skill-atr">Skill:</h5>
              <h5 class="skill-button">${player.cards[1].skill}</h5>
            </a>
            <a href="#" class="card-attribute">
              <h5 class="size-atr">Size:</h5>
              <h5 class="size-button">${player.cards[1].size}</h5>
            </a>
          </div>
          <div class="card-attributes-right">
            <a href="#" class="card-attribute">
              <h5 class="wisecracks-atr">Wisecracks:</h5>
              <h5 class="wisecracks-button">${player.cards[1].wisecracks}</h5>
            </a>
            <a href="#" class="card-attribute">
              <h5 class="mystique-atr">Mystique:</h5>
              <h5 class="mystique-button">${player.cards[1].mystique}</h5>
            </a>
            <a href="#" class="card-attribute">
              <h5 class="rating-atr">Rating:</h5>
              <h5 class="rating-button">${player.cards[1].rating}</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  let playMode = document.getElementById(elements.playMode);
  playMode.insertAdjacentHTML('beforeend', html);
};

export const renderCardsButtons = player => {
  // addPlayMode();
  const html =
  `<div class="card">
    <div class="card-content">
      <div class="card-top text-center">
        <div class="card-image" style="background-image: url('${player.cards[1].image}')"></div>
          <div class="top-content">
            <h5 class="card-title">${player.cards[1].title}</h5>
        </div>
      </div>

      <div class= "card-attributes">
        <div class="card-attributes-left">
          <div class="card-attribute card-strength">
            <h5 class="strength-atr">Strength:</h5>
            <h5 class="strength-button">${player.cards[1].strength}</h5>
          </div>
          <div class="card-attribute card-skill">
            <h5 class="skill-atr">Skill:</h5>
            <h5 class="skill-button">${player.cards[1].skill}</h5>
          </div>
          <div class=" card-attribute card-size">
            <h5 class="size-atr">Size:</h5>
            <h5 class="size-button">${player.cards[1].size}</h5>
          </div>
        </div>

        <div class="card-attributes-right">
          <div class="card-attribute card-wisecracks">
            <h5 class="wisecracks-atr">Wisecracks:</h5>
            <h5 class="wisecracks-button">${player.cards[1].wisecracks}</h5>
          </div>
          <div class="card-attribute card-mystique">
            <h5 class="mystique-atr">Mystique:</h5>
            <h5 class="mystique-button">${player.cards[1].mystique}</h5>
          </div>
          <div class="card-attribute card-rating">
            <h5 class="rating-atr">Rating:</h5>
            <h5 class="rating-button">${player.cards[1].rating}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>`;
  let playMode = document.getElementById(elements.playMode);
  playMode.insertAdjacentHTML('beforeend', html);
};

export const cardCover = player => {
  let html = `<div class="card"><img id="backCard" src="img/topTrumps.png"></div>`;
  let playMode = document.getElementById(elements.playMode);
  playMode.insertAdjacentHTML('beforeend', html);
};


