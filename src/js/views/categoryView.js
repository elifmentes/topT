import * as cardView from './cardView';
import * as models from '../seeds';
import { elements } from './base';

const categoryCard = category => {
	const markup = `
		   <a class="category-card" href="#" data-goto="${category.title}">
		   	<div class = "card-image" style = "background-image: url('../img/topTrumpsMini.png')">
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

const categoryForm = {
	mainForm: function() {
		const markup = `
		  <form>
		    <div class="card">
		      <div class="card-content">
		        <div class="card-top">
		      <div class = "card-image" style = "background-image: url('img/topTrumpsMini.png')"></div>
		      <div class="top-content">
		        <label for="cat__title">Category Title:</label><br>
		        <input type="text" id="cat__title" class="category__title" title="Title" placeholder="Avengers"><br>
		      </div>
		        </div>

		        <div class="card-bottom">
		      <div class="card-attributes">
		        <div class="card-attributes-left card-atrbs">
		          <input type="text" id="atr__1" name="atr1" placeholder="Attribute 1"><br>
		          <input type="text" id="atr__2" name="atr2" placeholder="Attribute 2"><br>
		          <input type="text" id="atr__3" name="atr3" placeholder="Attribute 3"><br>
		        </div>

		        <div class="card-attributes-right card-atrbs">
		          <input type="text" id="atr__4" name="atr4" placeholder="Attribute 4"><br>
		          <input type="text" id="atr__5" name="atr5" placeholder="Attribute 5"><br>
		          <input type="text" id="atr__6" name="atr6" placeholder="Attribute 6"><br>
		        </div>
		      </div>
		        </div>
		      </div>
		    </div>

		    <label for="cat__num">How Many Cards?</label><br>
		    <input type="text" id="cat__num" class="category__num" title="Title" placeholder="Minimum 6"><br>


	  	    <button type="submit" value="Submit" class="submit">Submit!</button>

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
			      <div class = "card-image" style = "background-image: url('img/topTrumps.png')"></div>
			      <div class="top-content">
			 		<h5 class="card-title">${category.title}</h5>
			      </div>
			    </div>
			    <div class="card-bottom">
			      <div class="card-attributes">
			        <div class="card-attributes-left card-atrbs">
			          <div class="card-attribute">
			            <h5 class="atr">${category.atr1}</h5>
			            <input type="text" id="val__1" title="Value 1" placeholder="">
			          </div>
			          <div class="card-attribute">
			            <h5 class="atr">${category.atr2}</h5>
			            <input type="text" id="val__2"  title="Value 2" placeholder="">
			          </div>
			          <div class="card-attribute">
			            <h5 class="atr">${category.atr3}</h5>
			            <input type="text" id="val__3"  title="Value 3" placeholder="">
			          </div>
			        </div>
			        <div class="card-attributes-right card-atrbs">
			          <div class="card-attribute">
			            <h5 class="atr">${category.atr4}</h5>
			            <input type="text" id="val__4"  title="Value 4" placeholder="">
			          </div>
			          <div class="card-attribute">
			            <h5 class="atr">${category.atr5}</h5>
			            <input type="text" id="val__5"  title="Value 5" placeholder="">
			          </div>
			          <div class="card-attribute">
			            <h5 class="atr">${category.atr6}</h5>
			            <input type="text" id="val__6"  title="Value 6" placeholder="">
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

	  	    <button type="submit" value="Submit" class="submit">Submit!</button>

		  </form>
		`;
	return markup;
	}
};

export const showForm = () => {
	let html = categoryForm.mainForm();
	elements.ctgr.innerHTML = "";
	elements.ctgr.innerHTML = html;
};

export const getInput = () => {
	const cat = {
		title: (document.getElementById('cat__title')).value,
		num: (document.getElementById('cat__num')).value,
		atr1: (document.getElementById('atr__1')).value,
		atr2: (document.getElementById('atr__2')).value,
		atr3: (document.getElementById('atr__3')).value,
		atr4: (document.getElementById('atr__4')).value,
		atr5: (document.getElementById('atr__5')).value,
		atr6: (document.getElementById('atr__6')).value
	};
	
	return cat;
};

export const getValues = () => {
	const category = models.categories[categories.length - 1];
	for(let i = 0; i < category.num; i ++) {
		
	}
};
