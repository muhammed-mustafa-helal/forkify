import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import PaginationView from './views/paginationView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenetrator-runtime';
import paginationView from './views/paginationView';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    resultsView.renderSpinner();
    const id = window.cation.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0- Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

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
    resultsView.render(model.getSearchResultsPage());

    //render the intial pagination buttons
    paginationView.render(model, state.search);
  } catch (err) {
    console.err(err);
  }
};

const controlPagination = function (goToPage) {
  //render NEW  results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //render NEW pagination buttons
  paginationView.render(model, state.search);
};

const controlServings = function (newServings) {
  //Update the recipe servings (in state)
  model.updateServings(newServings);

  //update the recipe view
  recipeView.update(model, state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
