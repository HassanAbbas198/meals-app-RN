import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealsScreen = (props) => {
	const id = props.navigation.getParam('categoryId');

	const selectedCategory = CATEGORIES.find((cat) => cat.id === id);

	return (
		<View style={styles.screen}>
			<Text>{selectedCategory.title}</Text>
			<Button
				title="Go to meal details"
				onPress={() => {
					props.navigation.navigate({
						routeName: 'MealDetails',
					});
				}}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const id = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === id);

	return {
		headerTitle: selectedCategory.title,
		headerStyle: {
			backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
		},
		headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
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
