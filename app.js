import store from './store';
import loadUI from './ui';
import { fetchRecipes } from './actions/recipes';


loadUI();

store.dispatch(fetchRecipes());
