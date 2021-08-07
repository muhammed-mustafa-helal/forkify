import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenetrator-runtime';

if (module.hot) {
  module.hot.accept(); 

const controlRecipes = async function () {
  try {
    resultsView.renderSpinner();
    const id = window.cation.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1- Loading recipe
    await model.loadRecipe(id);

    // 2- Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    receipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    //get search query
    const query = searchView.getQuery();
    if (!query) return;

    //load search results
    await model.loadSearchResults(query);

    //render search results
    console.log(model.state.search.results);
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.err(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
