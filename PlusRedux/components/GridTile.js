import React, { useState } from 'react';

import {
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableNativeFeedback
} from 'react-native';

const GridTile = props => {

	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}
	return (
		<View
			style={{
				...styles.container,
				...{
					borderColor: 'white'
				}
			}}
		>
			<Text
				style={{
					...styles.title,
					...{
						borderColor:  'white',
						color:  'black'
					}
				}}
			>
				{props.title}
			</Text>
			<TouchableCmp
				onPress={() => {
					console.log('nada');
				}}
				style={{ flex: 1 }}
			>
				<View
					style={{
						flex: 1,
						borderColor:  'white',
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
		borderColor: 'black',
		padding: 5,
		height: 90,
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'stretch',
		justifyContent: 'center'
	},

	title: {
		flex: 4,
		fontSize: 22,
		color: 'white',
		textAlign: 'left',
	}
});

export default GridTile;
