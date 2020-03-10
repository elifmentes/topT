import * as cardView from '../views/cardView';
import * as categoryView from '../views/categoryView';
import * as models from '../seeds';
import { elements } from '../views/base';

export const whichMButton = (btn) => {
	if (btn.dataset.goto === "category-pick") {
	  elements.title.innerHTML = "CATEGORIES";
	  cardView.cleanField(elements.ctgr);
  	  categoryView.showCategories(models.categories);

	} else if (btn.dataset.goto === "category-custom") {
	  console.log(btn);
	  elements.title.innerHTML = "";
	  cardView.cleanField(elements.ctgr);
	  categoryView.showForm();
	}
}

// export const consoleCategories = (arr) => {
// 	arr.forEach(e => {
// 		console.log(e);
// 	})
// }