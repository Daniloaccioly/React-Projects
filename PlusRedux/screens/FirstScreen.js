import React from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import GridTile from '../components/GridTile';
import { MODEL } from '../data/dummy-data';
import * as S from '../styles';

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
		<S.FirstView>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={MODEL}
				renderItem={renderGridItem}
				numColumns={1}
			/>
		</S.FirstView>
	);
};

export default FirstScreen;
