import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);

window.store = store;

export default store;
