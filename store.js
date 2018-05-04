import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'

const initialState = {
    recipes: [{name: "Omelette"}],
    ingredients: [{ recipe: 'Omelette', name: 'Egg', quantity: 2}]
};

const store = createStore(rootReducer, initialState);

window.store = store;

export default store;
