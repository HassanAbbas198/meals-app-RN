import { MEALS } from '../../data/dummy-data';

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favMeals: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;