import React, { useEffect } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { TouchableOpacity, Text, Platform, TouchableNativeFeedback } from 'react-native';
import { argonTheme } from '../constants';
import GridTile from '../components/GridTile';
import { MODEL } from '../data/dummy-data';

const FirstScreen = props => {

	const renderGridItem = itemData => {

		let TouchableCmp = TouchableOpacity;
		if (Platform.OS === 'android' && Platform.Version >= 21) {
			TouchableCmp = TouchableNativeFeedback;
		}
		return (
			<GridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					console.log(itemData.item.index)
					props.navigation.navigate({
						routeName: 'HiitScreen',
						params: {
							Id: itemData.item.id,
						},
					});
				}}
			/>
		);
	};

	
	return (
		/* Exemplo de como mesclar  n styles */
		<View
			style={{
				...styles.container,
				...{
					flexDirection: 'row'
				}
			}}>
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
	containergrid: {
		borderWidth: 3,
		borderBottomWidth: 0,
		borderColor: argonTheme.COLORS.PRIMARY,
		padding: 5,
		height: 90,
		flexDirection: 'row',
		backgroundColor: argonTheme.COLORS.BACKGROUND,
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

export default FirstScreen;
