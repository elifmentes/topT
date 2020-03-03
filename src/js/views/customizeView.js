import { elements } from './base';

const markup =`
  <form>
	<label for="ctitle">Category Title:</label><br>
	<input type="text" id="ctitle" name="fname"><br>
	<label for="cimg">Upload an Image:</label><br>
	<input type="text" id="cimg" name="lname">
	<input class="submitBtn" type="submit" value="Submit">
  </form>

`;

export const addForm = (a) => {
	a.innerHTML = markup;
}