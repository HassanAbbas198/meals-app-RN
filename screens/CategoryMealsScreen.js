import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The Category meals screen</Text>
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
