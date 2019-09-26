import React, { useState } from 'react';
import Button from 'react-native-buttonex';
import ColorSelector from '../components/ColorSelector';
import {
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableNativeFeedback
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeColor, CHANGECOLOR } from '../Actions/actions';

const GridTile = props => {

	const dispatch = useDispatch();

	const colorHandler = () => {
		dispatch(ChangeColor(CHANGECOLOR, text=props.color));
	};

	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}
	return (
		<View
			style={{
				...styles.container,
				...{
					borderColor: useSelector(state => state.colors)
				}
			}}
		>
			<Text
				style={{
					...styles.title,
					...{
						borderColor:  useSelector(state => state.colors),
						color:  useSelector(state => state.colors)
					}
				}}
			>
				{props.title}
			</Text>
			<TouchableCmp
				onPress={() => {
					colorHandler();
					//console.log(otherParam);
				}}
				style={{ flex: 1 }}
			>
				<View
					style={{
						flex: 1,
						borderColor:  useSelector(state => state.colors),
						borderWidth: 3,
						backgroundColor: props.color
					}}
				></View>
			</TouchableCmp>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: ColorSelector.SecondaryColor,
		padding: 5,
		height: 90,
		flexDirection: 'row',
		backgroundColor: ColorSelector.PrimaryColor,
		alignItems: 'stretch',
		justifyContent: 'center'
	},

	title: {
		flex: 4,
		fontSize: 22,
		color: ColorSelector.SecondaryColor,
		textAlign: 'left',
	}
});

export default GridTile;
