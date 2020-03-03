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
	    <label for="category-title">Category Title:</label><br>
  	    <input type="text" id="category-title" title="Title"><br>
  	    <label for="category-image">Category Image:</label><br>
  	    <input type="text" id="category-image" name="image"><br>
  	    <label for="category-number">Card Number:</label><br>
  	    <input type="text" id="category-number" name="number"><br>
  	    <input type="submit" value="Submit">
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
