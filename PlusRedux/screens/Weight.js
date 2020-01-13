import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { Block, theme, Text, Input, Button } from 'galio-framework';
import { useSelector, useDispatch } from 'react-redux';
import { argonTheme } from '../constants/index';
import Settings from '../components/Settings';
import Weightinput from '../components/WeightInput'; // export default without braces {}, export normal with braces {}

const { width } = Dimensions.get('screen');

const Weight = props => {

	const addWeightHandler = enteredWeight => {
		setWeight(enteredWeight);
		setIsAddMode(false);
		AsyncStorage.setItem('@weight', enteredWeight);
	};

	const [Weight, setWeight] = useState('');
	const [isAddMode, setIsAddMode] = useState(false); // Make WeightInput visible/invisible
	const [isSettingsMode, setSettingsMode] = useState(false); // Make Settings visible/invisible
	//const ;

	async function getWeightValue() {
		let value = '';
		try {
			value = await AsyncStorage.getItem('@weight');
		} catch {
			Console.log('Erro');
		} finally {
			setWeight(value);
		}
	}

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
				<Settings
					visible={isSettingsMode}
					onSettings={addWeightHandler}
				/>
			</Block>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	home: {
		width: width
	},
	articles: {
		width: width - theme.SIZES.BASE * 2,
		paddingVertical: theme.SIZES.BASE
	},
	input: {
		flexDirection: 'row',
		alignContent: 'space-around',
		padding: 1
		//borderColor:'black',
		//borderWidth:2
	},
	text: {
		//h1:true,
		flex: 1,
		fontSize: 24,
		alignContent: 'flex-end',
		textAlign: 'right',
		alignSelf: 'center',
		padding: 1
	}
});

export default Weight;
