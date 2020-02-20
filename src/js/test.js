const testFunction = () => {
  console.log("ALFAAAAA");
};

export { testFunction };

<div class="player">
      <div class = "card">
           <div class = "card-content">
             <div class = "card-top">
               <div class = "card-image" style = "background-image: url('${player.cards[0].image}')"></div>
               <div class = "top-content">
                 <h5 class = "card-title"></h5>
               </div>
             </div>
             <div class = "card-bottom">
               <!-- ${playCard(player.cards[0])} -->
             </div>
           </div>
         </div>
    </div>

    <div class="opponent">
      <div class="card">
        <div class = "card-content">
          <img id="backCard" src="img/topTrumps.png">
        </div>
      </div>
    </div>
