import { async } from 'regenerator-runtime/';
import { API_URL } from './config';
import { getJSOn } from './helper';
import recipeView from './views/recipeView';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    console.error(`${err} 😎😎😎`);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
