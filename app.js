import store from './store';
import loadUI from './ui';
import { fetchRecipes } from './actions/recipes';
import { fetchIngredients } from './actions/ingredients';


loadUI();

store.dispatch(fetchRecipes());
