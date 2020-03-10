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

const categoryForm = () => {
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
		        <input type="text" class="cat" id="category-title" title="Title" placeholder="Category Title">
		      </div>
		    </div>
		    <div class="card-bottom">
		      <div class="card-attributes">
		        <div class="card-attributes-left card-atrbs">
		          <input type="text" id="category-atr1" class="atr cat-attribute" name="atr1" placeholder="Attribute 1">	        
		          <input type="text" id="category-atr2" class="atr cat-attribute atr-mid" name="atr2" placeholder="Attribute 2">
		          <input type="text" id="category-atr3"  class="atr cat-attribute" name="atr3" placeholder="Attribute 3">
		        </div>
		        <div class="card-attributes-right card-atrbs">
	              <input type="text" id="category-atr4" class="atr cat-attribute" name="atr4" placeholder="Attribute 4">
	              <input type="text" id="category-atr5" class="atr cat-attribute atr-mid" name="atr5" placeholder="Attribute 5">
	              <input type="text" id="category-atr6"  class="atr cat-attribute" name="atr6" placeholder="Attribute 6">
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		<div class="submit-area">
		  <label for="category-number">Card Number:</label><br>
		  <input type="text" id="category-number" name="number" class="cat btm num-card" placeholder="6 Cards Minimum"></br>
		  <input class="btm btm-btn" type="submit" value="Submit">
		</div>
      </form>
	`; 
	return markup;
};

export const showForm = () => {
	let html = categoryForm();
	elements.ctgr.insertAdjacentHTML('beforeend', html);
};

export const submitForm = () => {
	
}
