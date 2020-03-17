import * as cardView from './cardView';
import * as models from '../seeds';
import { elements } from './base';

const categoryCard = category => {
	const markup = `
		   <a class="category-card" href="#" data-goto="${category.title}">
		   	<div class = "card-image" style = "background-image: url('${category.image}')">
		      <div class="category-title">
		  	    <h4>${category.title}</h4>
		      </div>
		     </div>
		  </a>
	`
	return markup;
};

export const showCategories = (categories) => {
	categories.forEach(category => {
		let html = categoryCard(category);
		elements.ctgr.insertAdjacentHTML('beforeend', html);
	});
};

const forms = {
	categoryForm: function() {
	  const markup = `
		  <form>
		    <div class="category-name-div">
		      <h2 class="cat-title">YOUR CATEGORY</h1>
		    </div>
		    <div class="card">
			  <div class="card-content">
			    <div class="card-top">
			      <div class = "card-image" style = "background-image: url('img/topTrumpMini.png')"></div>
			      <div class="top-content">
			        <label for="category-title">Category Title:</label><br>
			        <input type="text" class="cat__title cat" id="category-title" title="Title" placeholder="Category Title">
			      </div>
			    </div>
			    <div class="card-bottom">
			      <div class="card-attributes">
			        <div class="card-attributes-left card-atrbs">
			          <input type="text" id="category-atr1" class="atr cat-attribute cat__atr1" name="atr1" placeholder="Attribute 1">	        
			          <input type="text" id="category-atr2" class="atr cat-attribute atr-mid cat__atr2" name="atr2" placeholder="Attribute 2">
			          <input type="text" id="category-atr3"  class="atr cat-attribute cat__atr3" name="atr3" placeholder="Attribute 3">
			        </div>
			        <div class="card-attributes-right card-atrbs">
		              <input type="text" id="category-atr4" class="atr cat-attribute cat__atr4" name="atr4" placeholder="Attribute 4">
		              <input type="text" id="category-atr5" class="atr cat-attribute atr-mid cat__atr5" name="atr5" placeholder="Attribute 5">
		              <input type="text" id="category-atr6"  class="atr cat-attribute cat__atr6" name="atr6" placeholder="Attribute 6">
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
			<div class="submit-area">
			  <label for="category-number">Card Number:</label><br>
			  <input type="text" id="category-number" name="number" class="cat btm num-card cat__num" placeholder="6 Cards Minimum"></br>
			  <input class="submit-btn btm btm-btn" id="submit" type="submit" value="Submit">
			</div>
	      </form>
		`; 
		return markup;
	},
	valueForm: function(category) {
		const markup = `
		  <form>
		    <div class="card">
			  <div class="card-content">
			    <div class="card-top">
			      <div class = "card-image" style = "background-image: url('img/topTrumpMini.png')"></div>
			      <div class="top-content">
		            <h5 class="card-title">${category.title}</h5>
		          </div>
			    </div>
			    <div class="card-bottom">
			      <div class="card-attributes">
			        <div class="card-attributes-left card-atrbs">
			          <div class="card-attribute">
				        <h5 class="atr">${category.atr1}: </h5>
				        <input type="text" class="category-value">
				      </div>	        
			          <div class="card-attribute">
				        <h5 class="atr">${category.atr2}: </h5>
				        <input type="text" class="category-value">
				      </div>
			          <div class="card-attribute">
				        <h5 class="atr">${category.atr3}: </h5>
				        <input type="text" class="category-value">
				      </div>
			        </div>
			        <div class="card-attributes-right card-atrbs">
		              <div class="card-attribute">
				        <h5 class="atr">${category.atr4}: </h5>
				        <input type="text" class="category-value">
				      </div>
		              <div class="card-attribute">
				        <h5 class="atr">${category.atr5}: </h5>
				        <input type="text" class="category-value">
				      </div>
		              <div class="card-attribute">
				        <h5 class="atr">${category.atr6}: </h5>
				        <input type="text" class="category-value">
				      </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
	      </form>
		`; 
		return markup;
	}
};

export const numPlayers = (n) => {
	if (n < 6) {
		alert('please enter a number greater than 6');
	}
}

export const showForm = () => {
	let html = forms.categoryForm();
	elements.ctgr.insertAdjacentHTML('beforeend', html);
};

export const upper = word => {
	word = word[0].toUpperCase() + word.slice(1);
	return word;
};

export const theInput = array => {
	return array[array.length - 1];
}

export const values = a => {
	cardView.cleanField(elements.ctgr);
	const top = `<div class="category-name-div">
		      <h2 class="cat-title">${a.title.toUpperCase()}</h1>
		    </div>`;
	elements.ctgr.insertAdjacentHTML('beforebegin', top);

	const numberOfCards = parseInt(a.cardsNum);

	for(let i = 0; i < numberOfCards; i++) {
		let html = forms.valueForm(a);
		elements.cardValueDiv.insertAdjacentHTML('beforeend', html);
	}

	const bottom = `<input class="submit-btn btm btm-btn" id="submit" type="submit" value="Submit">`;
	elements.ctgr.insertAdjacentHTML('beforeend', bottom);
}