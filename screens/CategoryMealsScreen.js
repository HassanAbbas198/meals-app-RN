import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';

import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
	const id = props.navigation.getParam('categoryId');

	// alternative to connect and mapStateToProps
	const availableMeals = useSelector((state) => state.meals.filteredMeals);

	const displayedMeals = availableMeals.filter(
		(meal) => meal.categoryIds.indexOf(id) >= 0
	);

	return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const id = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === id);

	return {
		headerTitle: selectedCategory.title,
	};
};

export default CategoryMealsScreen;
