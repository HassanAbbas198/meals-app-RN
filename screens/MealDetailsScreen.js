import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The meal details screen</Text>
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

export default MealDetailsScreen;
