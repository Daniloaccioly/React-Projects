import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, ScrollView, AsyncStorage, Alert } from 'react-native';
import { Block, theme, Text, Input, Button } from 'galio-framework';
import { argonTheme } from '../constants/index';
import Weightinput from '../components/WeightInput'; // export default without braces {}, export normal with braces {}

const { width } = Dimensions.get('screen');

const Weight = props => {

	const [Weight, setWeight] = useState('');
	const [isAddMode, setIsAddMode] = useState(false); // Make WeightInput visible/invisible

	const addWeightHandler = enteredWeight => {
		if (enteredWeight !== ''){	
			setWeight(enteredWeight);
			setIsAddMode(false);
			AsyncStorage.setItem('@weight', enteredWeight);
		} else Alert.alert('Invalid entry Data', 'Your weight cannot empty');
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
		<ScrollView showsVerticalScrollIndicator={false}>
			<Block style={styles.input}>
				<Text style={styles.text}>Weight: </Text>
				<Text
					 style={{
						 ...styles.text,
						...{ 
							textAlign: 'left',
							fontFamily: argonTheme.FONTS.SECONDARY,
					}
				}}
				>{Weight}</Text>
			</Block>
			<Block style={styles.text}>
				<Button
					style={styles.input}
					round
					size="small"
					onPress={() => setIsAddMode(true)}
				>
					<Text color="white">Weight Update</Text>
				</Button>
				<Weightinput
					visible={isAddMode}
					onAddWeight={addWeightHandler}
				/>
			</Block>
		</ScrollView>
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
		fontFamily: argonTheme.FONTS.PRIMARY,
		alignContent: 'flex-end',
		textAlign: 'right',
		alignSelf: 'center',
		padding: 1
	},
});

export default Weight;
