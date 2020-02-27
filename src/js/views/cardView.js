import { elements } from './base';

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

const markupCard = {
  withBtn: function(card) {
    const html = 
    `<div class="card-attributes-left card-atrbs">
      <a href="#" class="card-attribute atr-btn" data-goto="strength">
        <h5 class="strength-atr atr">Strength: </h5>
        <h5 class="strength-button">${card.strength}</h5>
      </a>
      <a href="#" class="card-attribute atr-btn" data-goto="skill">
        <h5 class="skill-atr atr">Skill: </h5>
        <h5 class="skill-button">${card.skill}</h5>
      </a>
      <a href="#" class="card-attribute atr-btn" data-goto="size">
        <h5 class="size-atr atr">Size: </h5>
        <h5 class="size-button">${card.size}</h5>
      </a>
    </div>
    <div class="card-attributes-right card-atrbs">
      <a href="#" class="card-attribute atr-btn" data-goto="wisecracks">
        <h5 class="wisecracks-atr atr">Wisecracks: </h5>
        <h5 class="wisecracks-button">${card.wisecracks}</h5>
      </a>
      <a href="#" class="card-attribute atr-btn" data-goto="mystique">
        <h5 class="mystique-atr atr">Mystique: </h5>
        <h5 class="mystique-button">${card.mystique}</h5>
      </a>
      <a href="#" class="card-attribute atr-btn" data-goto="rating">
        <h5 class="rating-atr atr">Rating: </h5>
        <h5 class="rating-button">${card.rating}</h5>
      </a>
    </div>`;
  return html;
  },
  withoutBtn: function(card) {
    const html = 
    `<div class="card-attributes-left card-atrbs">
      <div class="card-attribute">
        <h5 class="strength-atr atr">Strength: </h5>
        <h5 class="strength-button">${card.strength}</h5>
      </div>
      <div class="card-attribute">
        <h5 class="skill-atr atr">Skill: </h5>
        <h5 class="skill-button">${card.skill}</h5>
      </div>
      <div class="card-attribute">
        <h5 class="size-atr atr">Size: </h5>
        <h5 class="size-button">${card.size}</h5>
      </div>
    </div>
    <div class="card-attributes-right card-atrbs">
      <div class="card-attribute">
        <h5 class="wisecracks-atr atr">Wisecracks: </h5>
        <h5 class="wisecracks-button">${card.wisecracks}</h5>
      </div>
      <div class="card-attribute">
        <h5 class="mystique-atr atr">Mystique: </h5>
        <h5 class="mystique-button">${card.mystique}</h5>
      </div>
      <div class="card-attribute">
        <h5 class="rating-atr atr">Rating: </h5>
        <h5 class="rating-button">${card.rating}</h5>
      </div>
    </div>`;
  return html;
  },
  cover: function() {
    const html = `<div class="card"><div class = "card-content"><img id="backCard" src="img/topTrumps.png"></div></div>`;
    return html;
  },
  playerScore: function(player) {
    return player.cards.length;
  },
  cardFull: function(card, html) {
    const mark = 
    `<div class="card">
      <div class="card-content">
      <div class="card-top">
        <div class = "card-image" style = "background-image: url('${card.image}')"></div>
        <div class="top-content">
          <h5 class="card-title">${card.title}</h5>
        </div>
      </div>
      <div class="card-bottom">
        <div class="card-attributes">${html}</div>
      </div>
      </div>
    </div>`;
    return mark;
  }
};

const tieMark = (p1, p2) => {
  let html;
  if (p2.stat === "tie") {
    html = "";
  } else if (p1.turn === "plays") {
    html = "Won";
  } else if (p1.turn === "waits") {
    html = "Lost";
  }
  return html;
}

export const renderPlayers = {
  selective: function(player1, player2) {
    const html = markupCard.withBtn(player1.cards[0]);
    elements.bannerContent.innerHTML =  
    `<div class="game-mode">
      <div class="player">
        <div class="player-title title">
          <h4>You</h4>
        </div>
        ${markupCard.cardFull(player1.cards[0], html)}
        <div class="score">
          <h4>${markupCard.playerScore(player1)} Cards</h4>
        </div>
      </div>
      <div class="opponent">
        <div class="opponent-title title">
          <h4>Your Opponent</h4>
        </div>
        ${markupCard.cover()}
        <div class="score">
          <h4>${markupCard.playerScore(player2)} Cards</h4>
        </div>
      </div>
    </div>
    ${markupNav}`;
  },
  notSelective: function (p1Card, p2Card, player1, player2, player3) {
    const html1 = markupCard.withoutBtn(p1Card);
    const html2 = markupCard.withoutBtn(p2Card);

    elements.bannerContent.innerHTML =  
    `<div class="game-stat">
      <h4>${player3.stat ? player3.stat : ""}</h4>
    </div>
    <div class="game-mode">
      <div class="player">
        <div class="player-title title">
          <h4>You</h4>
          <h4>${tieMark(player1, player3)}</h4>
        </div>
        ${markupCard.cardFull(p1Card, html1)}
        <div class="score">
          <h4>${markupCard.playerScore(player1)} Cards</h4>
        </div>
      </div>
      <div class="opponent">
        <div class="opponent-title title">
          <h4>Your Opponent</h4>
          <h4>${tieMark(player2, player3)}</h4>
        </div>
        ${markupCard.cardFull(p2Card, html2)}
        <div class="score">
          <h4>${markupCard.playerScore(player2)} Cards</h4>
        </div>
      </div>
    </div>
    ${markupNav}`;
  },
  opponentWin: function(player1, player2) {
    const html = markupCard.withoutBtn(player1.cards[0]);
    elements.bannerContent.innerHTML =  
    `<div class="game-mode">
      <div class="player">
        <div class="player-title title">
          <h4>You</h4>
        </div>
        ${markupCard.cardFull(player1.cards[0], html)}
        <div class="score">
          <h4>${markupCard.playerScore(player1)} Cards</h4>
        </div>
      </div>
      <div class="opponent">
        <div class="opponent-title title">
          <h4>Your Opponent</h4>
        </div>
        ${markupCard.cover()}
        <div class="score">
          <h4>${markupCard.playerScore(player2)} Cards</h4>
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
    let html = markupCard.withoutBtn(card);

    let markup = `<li>${markupCard.cardFull(card, html)}</li>`;
    document.querySelector('.list-cards').insertAdjacentHTML('beforeend', markup);
  });
}


