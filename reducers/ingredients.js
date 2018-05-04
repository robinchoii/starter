import { ADD_INGREDIENT }  from '../constants/actionTypes';

const initialState = [{recipe: 'Omelete', name: 'Egg', quantity: 2}]

const ingredientsReducer = (ingredients = initialState , action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            const newIngredient = {
                recipe: action.recipe,
                name: action.name,
                quantity: action.quantity
            };

            return ingredients.concat(newIngredient);
    }

    return ingredients;
}

export default ingredientsReducer;
