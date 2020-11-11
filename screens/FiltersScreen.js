import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';

import HeaderButton from '../components/HeaderButton';

const FilterSwitch = (props) => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				value={props.value}
				onValueChange={props.onChange}
				trackColor={{ true: Colors.primaryColor }}
				thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
			/>
		</View>
	);
};

const FiltersScreen = (props) => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters</Text>
			<FilterSwitch
				label="Gluten-free"
				value={isGlutenFree}
				onChange={(newValue) => setIsGlutenFree(newValue)}
			/>

			<FilterSwitch
				label="Lactose-free"
				value={isLactoseFree}
				onChange={(newValue) => setIsLactoseFree(newValue)}
			/>

			<FilterSwitch
				label="Vegan"
				value={isVegan}
				onChange={(newValue) => setIsVegan(newValue)}
			/>

			<FilterSwitch
				label="Vegetarian"
				value={isVegetarian}
				onChange={(newValue) => setIsVegetarian(newValue)}
			/>
		</View>
	);
};

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Filter Meals',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
	},

	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center',
	},

	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 15,
	},
});

export default FiltersScreen;
