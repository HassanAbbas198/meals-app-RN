import React, { useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../store/actions/index';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = (props) => {
	return (
		<View style={styles.ListItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
};

const MealDetailsScreen = (props) => {
	const mealId = props.navigation.getParam('mealId');

	const availableMeals = useSelector((state) => state.meals.meals);
	const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

	const favoriteMeals = useSelector((state) => state.meals.favMeals);
	const isfav = favoriteMeals.some((m) => m.id === mealId);

	const dispatch = useDispatch();

	const toggleFavHandler = useCallback(() => {
		dispatch(actions.toggleFavorite(mealId));
	}, [dispatch, mealId]);

	const { navigation } = props;
	useEffect(() => {
		navigation.setParams({
			toggleFav: toggleFavHandler,
		});
	}, [toggleFavHandler]);

	useEffect(() => {
		navigation.setParams({
			isFav: isfav,
		});
	}, [isfav]);

	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<DefaultText>{selectedMeal.duration}m</DefaultText>
				<DefaultText>{selectedMeal.complexity}</DefaultText>
				<DefaultText>{selectedMeal.affordability}</DefaultText>
			</View>

			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map((ing) => (
				<ListItem key={ing}>{ing}</ListItem>
			))}

			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map((step) => (
				<ListItem key={step}>{step}</ListItem>
			))}
		</ScrollView>
	);
};

MealDetailsScreen.navigationOptions = (navigationData) => {
	const mealTitle = navigationData.navigation.getParam('mealTitle');
	const toggleFav = navigationData.navigation.getParam('toggleFav');
	const isFavorite = navigationData.navigation.getParam('isFav');

	return {
		headerTitle: mealTitle,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Fav"
					iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
					onPress={toggleFav}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},

	details: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 15,
	},

	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'center',
	},

	ListItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10,
	},
});

export default MealDetailsScreen;
