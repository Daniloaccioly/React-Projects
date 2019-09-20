import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Button from 'react-native-buttonex';
import ColorSelector from '../components/ColorSelector';
import GridTile from '../components/GridTile';
import { MODEL } from '../Data/dummy-data';

const FirstScreen = props => {
	const renderGridItem = itemData => {
		return (
			<GridTile
				title={itemData.item.title}
				color={itemData.item.color}
			/>
		);
	};

	return (
		/* Exemplo de como mesclar  n styles */
		<View
			style={{
				...styles.container,
				...{
					backgroundColor: ColorSelector.PrimaryColor,
					flexDirection: 'row'
				}
			}}
		>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={MODEL}
				renderItem={renderGridItem}
				numColumns={1}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRightWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 10,
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	title: {
		flex: 1,
		fontSize: 46,
		backgroundColor: ColorSelector.PrimaryColor,
		textDecorationColor: 'pink',
		textAlign: 'center',
	}
});

export default FirstScreen;
