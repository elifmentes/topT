import { elements } from './base';

export const getInput = () => {

};

export const cleanField = (a) => {
  a.innerHTML = "";
};

const markupNav = `<div class="navbar">
  <div class="nav-left nav">
    <a href="#" class="btn-green btn-green-nav" data-goto="play-game">
      <img src="img/play.png" alt="Play!" class="btn start-game" id="play-btn">
    </a>
    <a href="#" class="btn-green btn-green-nav" data-goto="next-card">
      <img src="img/next.png" alt="Play!" class="btn next-game" id="next-btn">
    </a>
  </div>
  <div class="nav-right nav">
    <a href="#" class="btn-green btn-green-nav" data-goto="settings-game">
      <img src="img/settings.png" alt="Play!" class="btn settings" id="settings-btn">
    </a>
  </div>
</div>`

const playCard = card => {
  const html = 
  `<div class = "card-attributes">
    <div class = "card-attributes-left card-atrbs">
      <a href = "#" class = "card-attribute atr-btn" data-goto="strength">
        <h5 class="strength-atr atr">Strength: </h5>
        <h5 class="strength-button">${card.strength}</h5>
      </a>
      <a href = "#" class = "card-attribute atr-btn card-middle" data-goto="skill">
        <h5 class="skill-atr atr">Skill: </h5>
        <h5 class="skill-button">${card.skill}</h5>
      </a>
      <a href = "#" class = "card-attribute atr-btn" data-goto="size">
        <h5 class="size-atr atr">Size: </h5>
        <h5 class="size-button">${card.size}</h5>
      </a>
    </div>
    <div class = "card-attributes-right card-atrbs">
      <a href = "#" class = "card-attribute atr-btn" data-goto="wisecracks">
        <h5 class="wisecracks-atr atr">Wisecracks: </h5>
        <h5 class="wisecracks-button">${card.wisecracks}</h5>
      </a>
      <a href = "#" class = "card-attribute atr-btn card-middle" data-goto="mystique">
        <h5 class="mystique-atr atr">Mystique: </h5>
        <h5 class="mystique-button">${card.mystique}</h5>
      </a>
      <a href = "#" class = "card-attribute atr-btn" data-goto="rating">
        <h5 class="rating-atr atr">Rating: </h5>
        <h5 class="rating-button">${card.rating}</h5>
      </a>
    </div>
  </div>`;
  return html;
};

const showCard = card => {
  const html = 
  `<div class = "card-attributes">
    <div class = "card-attributes-left card-atrbs">
      <div class="card-attribute">
        <h5 class="strength-atr atr">Strength: </h5>
        <h5 class="strength-button">${card.strength}</h5>
      </div>
      <div class="card-attribute card-middle">
        <h5 class="skill-atr atr">Skill: </h5>
        <h5 class="skill-button">${card.skill}</h5>
      </div>
      <div class="card-attribute">
        <h5 class="size-atr atr">Size: </h5>
        <h5 class="size-button">${card.size}</h5>
      </div>
    </div>
    <div class = "card-attributes-right card-atrbs">
      <div class="card-attribute">
        <h5 class="wisecracks-atr atr">Wisecracks: </h5>
        <h5 class="wisecracks-button">${card.wisecracks}</h5>
      </div>
      <div class = "card-attribute card-middle">
        <h5 class="mystique-atr atr">Mystique: </h5>
        <h5 class="mystique-button">${card.mystique}</h5>
      </div>
      <div class="card-attribute">
        <h5 class="rating-atr atr">Rating: </h5>
        <h5 class="rating-button">${card.rating}</h5>
      </div>
    </div>
  </div>`
  return html;
};

const cardCover = () => {
  const html = `<div class="card"><div class = "card-content"><img id="backCard" src="img/topTrumps.png"></div></div>`;
  return html;
};

const modCard = {
  selectable: function(card) {
    let html = `<div class = "card">
           <div class = "card-content">
             <div class = "card-top">
               <div class = "card-image" style = "background-image: url('${card.image}')"></div>
               <div class = "top-content">
                 <h5 class = "card-title">${card.title}</h5>
               </div>
             </div>
             <div class = "card-bottom">
               ${playCard(card)}
             </div>
           </div>
         </div>`;
     return html;
  },
  notSelectable: function(card) {
    let html = 
    `<div class = "card">
       <div class = "card-content">
         <div class = "card-top">
           <div class = "card-image" style = "background-image: url('${card.image}')"></div>
           <div class = "top-content">
             <h5 class = "card-title">${card.title}</h5>
           </div>
         </div>
         <div class = "card-bottom">
           ${showCard(card)}
         </div>
       </div>
     </div>`;
     return html;
  },

  playerScore: function(player) {
    return player.cards.length;
  },

  notSelectableAll: function(card) {
    let html = 
    `<div class = "card">
       <div class = "card-content">
         <div class = "card-top">
           <div class = "card-image" style = "background-image: url('${card.image}')"></div>
           <div class = "top-content">
             <h5 class = "card-title">${card.title}</h5>
           </div>
         </div>
         <div class = "card-bottom">
           ${showCard(card)}
         </div>
       </div>
     </div>`;
     return html;
  }
};


export const renderPlayers = {
  selective: function(player1, player2) {
    elements.bannerContent.innerHTML =  
    `<div class="game-mode">
      <div class="player">
        <div class="player-title title">
          <h4>You</h4>
        </div>
        ${modCard.selectable(player1.cards[0])}
        <div class="score">
          <h4>${modCard.playerScore(player1)} Cards</h4>
        </div>
      </div>
      <div class="opponent">
        <div class="opponent-title title">
          <h4>Your Opponent</h4>
        </div>
        ${cardCover()}
        <div class="score">
          <h4>${modCard.playerScore(player2)} Cards</h4>
        </div>
      </div>
    </div>
    ${markupNav}`;
  },
  notSelective: function (player1, player2, player3) {
    elements.bannerContent.innerHTML =  
    `<div class="game-stat">
      <h4>${player3.stat ? player3.stat : ""}</h4>
    </div>
    <div class="game-mode">
      <div class="player">
        <div class="player-title title">
          <h4>You</h4>
          <h4>${player1.stat ? player1.stat : ""}</h4>
        </div>
        ${modCard.notSelectable(player1.cards[0])}
        <div class="score">
          <h4>${modCard.playerScore(player1)} Cards</h4>
        </div>
      </div>
      <div class="opponent">
        <div class="opponent-title title">
          <h4>Your Opponent</h4>
          <h4>${player2.stat ? player2.stat : ""}</h4>
        </div>
        ${modCard.notSelectable(player2.cards[0])}
        <div class="score">
          <h4>${modCard.playerScore(player2)} Cards</h4>
        </div>
      </div>
    </div>
    ${markupNav}`;
  },
  opponentWin: function(player1, player2) {
    elements.bannerContent.innerHTML =  
    `<div class="game-mode">
      <div class="player">
        <div class="player-title title">
          <h4>You</h4>
        </div>
        ${modCard.notSelectable(player1.cards[0])}
        <div class="score">
          <h4>${modCard.playerScore(player1)} Cards</h4>
        </div>
      </div>
      <div class="opponent">
        <div class="opponent-title title">
          <h4>Your Opponent</h4>
        </div>
        ${cardCover()}
        <div class="score">
          <h4>${modCard.playerScore(player2)} Cards</h4>
        </div>
      </div>
    </div>
    ${markupNav}`;
  }
};

export const addGameBar = a => {
  const html = `<div class="navbar"><a href="#" class="btn-green"><img src="img/play.png" alt="Play!" class="btn start-game" id="play-btn"></a></div>`;
  a.insertAdjacentHTML('beforeend', html);
};

export const showAllCards = (a, player) => {
  console.log(player.cards);
  a.innerHTML = `
      <div class="final-mode">
        <div class="player">
          <div class="player-title title">
            <h4>${player.id === 0 ? "You Won" : "Your Opponent Won"}</h4>
          </div>
          <ul class="list-cards">
            
          </ul>
          <div class="score">
            <h4>${player.id === 0 ? "You Won" : "Your Opponent"} have all ${player.cards.length} cards</h4>
          </div>
        </div>`;

  player.cards.forEach(card => {
    let markup = `<li>${modCard.notSelectable(card)}</li>`;
    document.querySelector('.list-cards').insertAdjacentHTML('beforeend', markup);
  });
}


