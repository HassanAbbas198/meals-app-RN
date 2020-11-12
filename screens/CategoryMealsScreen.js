import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';

import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = (props) => {
	const id = props.navigation.getParam('categoryId');

	// alternative to connect and mapStateToProps
	const availableMeals = useSelector((state) => state.meals.filteredMeals);

	const displayedMeals = availableMeals.filter(
		(meal) => meal.categoryIds.indexOf(id) >= 0
	);

	if (displayedMeals.length === 0) {
		return (
			<View style={styles.content}>
				<DefaultText>No meals found. maybe check your filters!</DefaultText>
			</View>
		);
	}

	return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const id = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === id);

	return {
		headerTitle: selectedCategory.title,
	};
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
