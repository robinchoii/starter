import { FETCH_RECIPES, ADD_RECIPE, SET_RECIPES } from '../constants/actionTypes';

export const addRecipe = (name) => ({
    type: ADD_RECIPE, name
});

export const fetchRecipes = () => ({
    type: FETCH_RECIPES
});

export const setRecipes = (recipes) => ({
    type: SET_RECIPES, recipes
});
