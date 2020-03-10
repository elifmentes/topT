import card from './models/Card';
import player from './models/Player';
import category from './models/Category';
import * as categoryView from './views/categoryView';

export const categories = [new category(0, "Avengers", "./img/avengers.jpg", "strength", "skill", "size", "wisecracks", "mystique", "rating")];

// Avengers game cards
export const allCards = {
	"Avengers": [new card("Iron Man", 30, 9, 10, 5, 20, 10, "./img/ironMan.png"), new card("Dr. Strange", 15, 7, 8, 2, 80, 8, "./img/drStrange.png"),
new card("Captain America", 28, 10, 10, 2, 25, 9, "./img/captainAmerica.png"), new card("Ant-Man", 10, 10, 1, 1, 25, 7, "./img/antMan.png"),
new card("Hulk", 50, 2, 5, 1, 20, 9, "./img/hulk.png"), new card("Thor", 30, 3, 11, 1, 75, 9, "./img/thor.png")]
};

export const categoryCards = (category) => {
	return allCards[`${category}`];
};

export const attributesOp = ["strength", "skill", "size", "wisecracks", "mystique", "rating"];

export const players = [new player(0, []), new player(1, []), new player(2, [])];

export const addCategory = (array, name, atr1, atr2, atr3, atr4, atr5, atr6, num) => {
	const index = array.length;

	array.push(new category(index, categoryView.upper(name), categoryView.upper(atr1), categoryView.upper(atr2), categoryView.upper(atr3), categoryView.upper(atr4), categoryView.upper(atr5), categoryView.upper(atr6), num));
}

export const addCatToCards = (obj, cat) => {
	let name = cat.title;
	obj[name] = [];
	console.log(obj);
}

