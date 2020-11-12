import * as actionTypes from './actionTypes';

export const toggleFavorite = (mealId) => {
	return {
		type: actionTypes.TOGGLE_FAVORITE,
		mealId,
	};
};
