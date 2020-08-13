import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, AsyncStorage, alert } from 'react-native';
import { LightTheme } from '../constants/index';
import Weightinput from '../components/WeightInput'; // export default without braces {}, export normal with braces {}
import WeightChart from '../components/Chart';
import * as S from '../styles';

const Weight = props => {

	const [Weight, setWeight] = useState('');
	const [isAddMode, setIsAddMode] = useState(false); // Make WeightInput visible/invisible

	const addWeightHandler = enteredWeight => {
		if (enteredWeight !== ''){	
			setWeight(enteredWeight);
			setIsAddMode(false);
			AsyncStorage.setItem('@weight', enteredWeight);
		} else alert('Invalid entry Data', 'Your weight cannot empty');
	};

	async function getWeightValue() {
		let value = '';
		try {
			value = await AsyncStorage.getItem('@weight');
		} catch {
			Console.log('Erro');
		} finally {
			setWeight(value);
	}}

	useEffect(() => {
		getWeightValue();
	}, []);

	return (
		<S.MainView style= {{borderRightWidth: 0}}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<WeightChart/>
				<View style={styles.input}>
					<S.TitleLeft>Weight: </S.TitleLeft>
					<S.TitleRight>{Weight}</S.TitleRight>
				</View>
				<View style={styles.text}>
					<S.UpdateButton
						onPress={() => setIsAddMode(true)}
					>
						<S.UpdateTitle>Weight Update</S.UpdateTitle>
					</S.UpdateButton>
					<Weightinput
						visible={isAddMode}
						onAddWeight={addWeightHandler}
					/>
				</View>
			</ScrollView>
		</S.MainView>
	);
};

const styles = StyleSheet.create({

	input: {
		flexDirection: 'row',
		alignContent: 'space-around',
		padding: 1
	},
	text: {
		flex: 1,
		fontSize: 24,
		fontFamily: LightTheme.FONTS.PRIMARY,
		alignContent: 'flex-end',
		textAlign: 'right',
		alignSelf: 'center',
		padding: 1
	},
});

export default Weight;
