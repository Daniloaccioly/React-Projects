import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from 'react-native-buttonex';
import ColorSelector from '../components/ColorSelector';
import { useSelector } from 'react-redux';

const WeightScreen = props => {
	return (
		<View style={{
			...styles.container,
			...{
				borderColor: useSelector(state => state.colors)
				} 
			}}
		>
			<Text style={{
				...styles.title,
				...{
					color: useSelector(state => state.colors)
					}
				}}
			>
				Weight Screen</Text>
			<Button
				color={useSelector(state => state.colors)}
				bordered
				noBackground
				title="Main Menu"
				onPress={() => {
					props.navigation.navigate({
						routeName: 'First'
					});
				}}
			></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderLeftWidth: 1,
		borderColor: ColorSelector.SecondaryColor,
		paddingBottom: 10,
		paddingHorizontal:10,
		flex: 1,
		backgroundColor: ColorSelector.PrimaryColor,
		alignItems: 'stretch',
		justifyContent: 'center',
	},

	title: {
		flex: 1,
		fontSize: 46,
		color: ColorSelector.SecondaryColor,
		textAlign: 'center',
	}
});

export default WeightScreen;
