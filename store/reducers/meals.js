import * as actionTypes from '../actions/actionTypes';
import { MEALS } from '../../data/dummy-data';

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favMeals: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TOGGLE_FAVORITE:
			const existingIndex = state.favMeals.findIndex(
				(meal) => meal.id === action.mealId
			);

			if (existingIndex >= 0) {
				const updatedFavMeals = [...state.favMeals];
				updatedFavMeals.splice(existingIndex, 1);
				return {
					...state,
					favMeals: updatedFavMeals,
				};
			} else {
				const meal = state.meals.find((m) => m.id === action.mealId);
				return {
					...state,
					favMeals: state.favMeals.concat(meal),
				};
			}

		default:
			return state;
	}
};

export default reducer;
