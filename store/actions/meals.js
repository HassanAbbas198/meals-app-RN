import * as actionTypes from './actionTypes';

export const toggleFavorite = (mealId) => {
	return {
		type: actionTypes.TOGGLE_FAVORITE,
		mealId,
	};
};

export const setFilters = (filterSettings) => {
	return {
		type: actionTypes.SET_FILTERS,
		filters: filterSettings,
	};
};
