import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-buttonex';
import ColorSelector from '../components/ColorSelector';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const BfScreen = props => {

	let xibiu =  useSelector(state => state.colors)
	
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
				Bf Screen</Text>
			<Button
                        color={useSelector(state => state.colors)}
                        bordered
				noBackground
				title="Main Menu"
				onPress={() => {
					props.navigation.setParams({ otherParam: xibiu });
					console.log(props.navigation.getParam('otherParam'));
				}}
			></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderLeftWidth: 1,
		borderRightWidth: 1,
		paddingBottom: 10,
		paddingHorizontal:10,
		flex: 1,
		backgroundColor: ColorSelector.PrimaryColor,
		alignItems: 'stretch',
		justifyContent: 'center'
	},

	title: {
		flex: 1,
		fontSize: 46,
		textAlign: 'center',
	}
});

export default BfScreen;
