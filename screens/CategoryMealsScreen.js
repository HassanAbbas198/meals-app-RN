import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
	const renderMealItem = (itemData) => {
		return (
			<MealItem
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelectMeal={() => {}}
			/>
		);
	};

	const id = props.navigation.getParam('categoryId');

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(id) >= 0
	);

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				renderItem={renderMealItem}
				style={{ width: '95%' }}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const id = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === id);

	return {
		headerTitle: selectedCategory.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
