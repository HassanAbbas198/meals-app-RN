import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';

import DefaultText from './DefaultText';

const MealItem = (props) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.image }}
							style={styles.bgImage}
						>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{props.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<DefaultText>{props.duration}m</DefaultText>
						<DefaultText>{props.complexity}</DefaultText>
						<DefaultText>{props.affordability}</DefaultText>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 180,
		width: '100%',
		backgroundColor: '#f5f5f5',
		borderRadius: 10,
		overflow: 'hidden',
		marginVertical: 10,
	},

	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},

	titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingVertical: 3,
		paddingHorizontal: 12,
	},

	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 19,
		textAlign: 'center',
		color: 'white',
	},

	mealRow: {
		flexDirection: 'row',
	},

	mealHeader: {
		height: '85%',
	},

	mealDetail: {
		height: '15%',
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default MealItem;
