import React from 'react';
import { TouchableOpacity, View, Platform, TouchableNativeFeedback } from 'react-native';
import { LightTheme } from '../constants/index';
import * as S from '../styles';

const GridTile = props => {

	let TouchableCmp = TouchableOpacity;
	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}
	return (
		<S.GridContainer>
			<S.GridTitle >
				{props.title}
			</S.GridTitle>
			<TouchableCmp
				onPress={ props.onSelect }
				style={{ flex: 1 }}>
				<View
					style={{
						flex: 1,
						borderColor:  LightTheme.COLORS.PRIMARY,
						borderWidth: 3,
						backgroundColor: props.color
					}}
				></View>
			</TouchableCmp>
		</S.GridContainer>
	);
};

export default GridTile;
