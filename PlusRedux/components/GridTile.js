import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';
import { argonTheme } from '../constants';

const GridTile = props => {

	let TouchableCmp = TouchableOpacity;
	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				{props.title}
			</Text>
			<TouchableCmp
				onPress={
					props.onSelect
				}
				style={{ flex: 1 }}>
				<View
					style={{
						flex: 1,
						borderColor:  argonTheme.COLORS.PRIMARY,
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
		borderColor: 'white',
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
		borderColor:  'white',
		color:  'black',
	}
});

export default GridTile;
