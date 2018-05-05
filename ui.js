import $ from 'jquery';
import store from './store';
import { addRecipe } from './actions/recipes';

function updateUI() {
    const { recipes } = store.getState();
    const { ingredients } = store.getState();
    // const renderRecipe = (recipe) => `<li>${ recipe.name } </li>`;

    $(".recipes > ul").html(recipes.map( recipe => {
        return `<li> ${ recipe.name }</li>`;
    }));

    $(".ingredients > ul").html(ingredients.map( ingredient => {
        return `<li> ${ ingredient.name }</li>`;
    }));


}

function handleAdd() {
    const $recipeName = $('.recipes > input');

    store.dispatch(addRecipe($recipeName.val()));

    $recipeName.val('');
}

export default function loadUI() {

    $('#app').append(`

        <div class='recipes'>
            <h2>Recipes: </h2>
            <ul></ul>
            <input type='text' />
            <button>Add</button>
        </div>

        <div class='ingredients'>
            <h2> Ingredients</h2>
            <ul></ul>
        </div>

    `);

    store.subscribe(updateUI);

    $(document).on('click', '.recipes > button', handleAdd);

    updateUI();

};
