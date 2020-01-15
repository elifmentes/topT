import { elements } from './base';

export const getInput = () => {};

const renderCardwButtons = card => {
  const html =
  `<div class="card">
    <div class="card-content">
      <div class="card-top text-center">
        <div class="card-image" style="background-image: url('${card.image}')"></div>
          <div class="top-content">
            <h5 class="card-title">${card.title}</h5>
        </div>
      </div>
      <div class= "card-attributes">
        <div class="card-attributes-left">
          <a href="#" class="card-attribute card-strength">
            <h5 class="strength-atr">Strength:</h5>
            <h5 class="strength-button">${card.strength}</h5>
          </a>
          <a href="#" class="card-attribute card-skill">
             <h5 class="skill-atr">Skill:</h5>
            <h5 class="skill-button">${card.skill}</h5>
          </a>
          <a href="#" class=" card-attribute card-size">
            <h5 class="size-atr">Size:</h5>
            <h5 class="size-button">${card.size}</h5>
          </a>
        </div>
        <div class="card-attributes-right">
          <a href="#" class="card-attribute card-wisecracks">
            <h5 class="wisecracks-atr">Wisecracks:</h5>
            <h5 class="wisecracks-button">${card.wisecracks}</h5>
          </a>
          <a href="#" class="card-attribute card-mystique">
            <h5 class="mystique-atr">Mystique:</h5>
            <h5 class="mystique-button">${card.mystique}</h5>
          </a>
          <a href="#" class="card-attribute card-rating">
            <h5 class="rating-atr">Rating:</h5>
            <h5 class="rating-button">${card.rating}</h5>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`
  return html;
};

const renderCardsButtons = card => {
  const html =
  `<div class="card">
    <div class="card-content">
      <div class="card-top text-center">
        <div class="card-image" style="background-image: url('${card.image}')"></div>
          <div class="top-content">
            <h5 class="card-title">${card.title}</h5>
        </div>
      </div>

      <div class= "card-attributes">
        <div class="card-attributes-left">
          <div class="card-attribute card-strength">
            <h5 class="strength-atr">Strength:</h5>
            <h5 class="strength-button">${card.strength}</h5>
          </div>
          <div class="card-attribute card-skill">
            <h5 class="skill-atr">Skill:</h5>
            <h5 class="skill-button">${card.skill}</h5>
          </div>
          <div class=" card-attribute card-size">
            <h5 class="size-atr">Size:</h5>
            <h5 class="size-button">${card.size}</h5>
          </div>
        </div>

        <div class="card-attributes-right">
          <div class="card-attribute card-wisecracks">
            <h5 class="wisecracks-atr">Wisecracks:</h5>
            <h5 class="wisecracks-button">${card.wisecracks}</h5>
          </div>
          <div class="card-attribute card-mystique">
            <h5 class="mystique-atr">Mystique:</h5>
            <h5 class="mystique-button">${card.mystique}</h5>
          </div>
          <div class="card-attribute card-rating">
            <h5 class="rating-atr">Rating:</h5>
            <h5 class="rating-button">${card.rating}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  return html;
};

export const showCard = player => {
  let html;
  if (player.containerId === "card-player1") {
    html = renderCardwButtons(player.cards[1]);
  } else {
    html = renderCardsButtons(player.cards[1]);
  };
  return html;
};

export const cardCover = () => {
  const html = `<div class="card"><img id="backCard" src="img/topTrumps.png"></div>`;
  return html;
}

