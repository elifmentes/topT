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
	  elements.title.innerHTML = "";
	  cardView.cleanField(elements.ctgr);
	  categoryView.showForm();
	}
}