import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Colors from '../constants/Colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const defaultNavStackOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};
const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: CategoryMealsScreen,
		MealDetails: {
			screen: MealDetailsScreen,
		},
	},
	{ defaultNavigationOptions: defaultNavStackOptions }
);

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetails: MealDetailsScreen,
	},
	{ defaultNavigationOptions: defaultNavStackOptions }
);

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />
				);
			},
		},
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />;
			},
		},
	},
};

// navigationOptions configure the "nested navigator"
const MealsFavTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeColor: Colors.secondaryColor,
				shifting: true,
		  })
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					activeTintColor: Colors.secondaryColor,
				},
		  });

export default createAppContainer(MealsFavTabNavigator);
