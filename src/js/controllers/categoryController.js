import * as cardView from '../views/cardView';
import * as categoryView from '../views/categoryView';
import * as models from '../seeds';
import { elements } from '../views/base';


export const catAtrs = atr => {
	if (atr) {
		return true;
	} else {
		alert('fill the fields')
	}
}

const pickCat = () => {
  elements.title.innerHTML = "CATEGORIES";
  cardView.cleanField(elements.ctgr);
  categoryView.showCategories(models.categories);
}

export const customize = () => {
  elements.title.innerHTML = "";
  cardView.cleanField(elements.ctgr);
  categoryView.showForm();
}

export const whichMButton = (btn) => {
  console.log(btn);
  if (btn.dataset.goto === "category-pick") {
  	pickCat();
  } else if (btn.dataset.goto === "category-custom") {
	customize(); 
  }
}