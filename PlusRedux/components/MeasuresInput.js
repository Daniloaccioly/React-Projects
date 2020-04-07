import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Modal,
	AsyncStorage,
	TextInput,
	alert
} from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import { useSelector } from 'react-redux';
import argonTheme from '../constants/Theme';

const MeasuresInput = props => {
	const Measure = useSelector(state => state.default.reduxMeasure);
	const [measureused, setmeasureused] = useState([]);
	const [enteredHeight, setEnteredHeight] = useState('');
	const [enteredHeightFeet, setenteredHeightFeet] = useState('');
	const [enteredHeightInches, setenteredHeightInches] = useState('');
	const [enteredNeck, setEnteredNeck] = useState('');
	const [enteredHip, setEnteredHip] = useState('');
	const [enteredWaist, setEnteredWaist] = useState('');

	async function initValue() {
		try {
			heightinit = await AsyncStorage.getItem('@height');
			neckinit = await AsyncStorage.getItem('@neck');
			hipinit = await AsyncStorage.getItem('@hip');
			waistinit = await AsyncStorage.getItem('@weist');
			heightvalue = parseFloat(heightinit, 10);
		} catch (error) {
			console.log(error);
		} finally {
			if ((Measure == 'Metric')) {
				setmeasureused(['.', '']);
				setEnteredHeight(heightinit);
				sobra = (heightvalue/100) % 1
				setenteredHeightFeet(((heightvalue/100) - sobra).toFixed(0));
				setenteredHeightInches((heightvalue%100).toFixed(0));
				setEnteredNeck(neckinit);
				setEnteredHip(hipinit);
				setEnteredWaist(waistinit);
			}
			if ((Measure == 'Imperial')) {
				heightvalue = heightvalue * 0.3937007874;
				inches = heightvalue % 12;
				setenteredHeightFeet(((heightvalue - inches)/12).toFixed(0));
				setenteredHeightInches(inches.toFixed(0));
				setmeasureused(['\'', "\""]);
				neckinit = parseFloat(neckinit, 10);
				hipinit = parseFloat(hipinit, 10);
				waistinit = parseFloat(waistinit, 10);
				setEnteredHeight(heightinit);
				setEnteredNeck((neckinit * 0.3937007874).toFixed(0));
				setEnteredHip((hipinit * 0.3937007874).toFixed(0));
				setEnteredWaist((waistinit * 0.3937007874).toFixed(0));
				console.log(heightvalue, inches);
			}
		}
	}

	useEffect(() => {
		initValue();
	}, [Measure]);

	const InputHandlerHeightFeet = enteredText => {
		let formated = enteredText.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
		setenteredHeightFeet(formated);
	};

	const InputHandlerHeightInches = enteredText => {
		let formated = enteredText.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
		setenteredHeightInches(formated);
	};

	const InputHandlerHeight = enteredText => {
		let formated = enteredText.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
		setEnteredHeight(formated);
	};

	const InputHandlerNeck = enteredText => {
		let formated = enteredText.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
		setEnteredNeck(formated);
	};

	const InputHandlerHip = enteredText => {
		let formated = enteredText.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
		setEnteredHip(formated);
	};

	const InputHandlerWaist = enteredText => {
		let formated = enteredText.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
		setEnteredWaist(formated);
	};

	return (
		<Modal
			transparent={true}
			style={styles.modalStyling}
			visible={props.visible}
			animationType="slide"
		>
			<Block style={styles.inputContainer}>
				<Block style={styles.inputline}>
					<Text style={styles.text}>Height: </Text>
					<TextInput
						value={enteredHeightFeet}
						maxLength={3}
						style={styles.imperial}
						placeholdertextcolor={
							argonTheme.COLORS.BLACK
						}
						onChangeText={InputHandlerHeightFeet}
						keyboardType="number-pad"
					/>
					<Text style={styles.imperial}>{measureused[0]}</Text>
					<TextInput
						value={enteredHeightInches}
						maxLength={3}
						style={styles.imperial}
						placeholdertextcolor={
							argonTheme.COLORS.BLACK
						}
						onChangeText={InputHandlerHeightInches}
						keyboardType="number-pad"
					/>
					<Text style={styles.imperial}>{measureused[1]}</Text>
				</Block>
				<Block style={styles.inputline}>
					<Text style={styles.text}>Neck: </Text>
					<TextInput
						value={enteredNeck}
						placeholder="New Value"
						maxLength={5}
						style={styles.input}
						placeholdertextcolor={
							argonTheme.COLORS.BLACK
						}
						onChangeText={InputHandlerNeck}
						keyboardType="number-pad"
					/>
				</Block>
				<Block style={styles.inputline}>
					<Text style={styles.text}>Hip: </Text>
					<TextInput
						value={enteredHip}
						placeholder="New Value"
						maxLength={5}
						style={styles.input}
						placeholdertextcolor={
							argonTheme.COLORS.BLACK
						}
						onChangeText={InputHandlerHip}
						keyboardType="number-pad"
					/>
				</Block>
				<Block
					style={{
						...styles.inputline,
						...{
							borderRadius: 5,
							shadowRadius: 25,
							borderBottomWidth: 3
						}
					}}
				>
					<Text style={styles.text}>Waist: </Text>
					<TextInput
						value={enteredWaist}
						placeholder="New Value"
						maxLength={5}
						style={styles.input}
						placeholdertextcolor={
							argonTheme.COLORS.BLACK
						}
						onChangeText={InputHandlerWaist}
						keyboardType="number-pad"
					/>
				</Block>

				<Button
					style={styles.button}
					onPress={props.onAddMeasures.bind(
						this,
						enteredNeck,
						enteredHip,
						enteredWaist,
						enteredHeightFeet,
						enteredHeightInches,
						Measure
					)}
				>
					<Text color="white">Update</Text>
				</Button>
			</Block>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalStyling: {
		flex: 1,
		backgroundColor: 'gray',
		justifyContent: 'center',
		borderColor: 'black',
		borderWidth: 20
	},
	inputContainer: {
		flex: 0.85,
		width: '85%',
		borderRadius: 45,
		shadowRadius: 25,
		borderColor: 'black',
		borderWidth: 5,
		backgroundColor: argonTheme.COLORS.WHITE,
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center'
	},
	button: {
		width: '40%',
		flexDirection: 'row',
		alignContent: 'space-around',
		margin: 30
	},
	input: {
		flexDirection: 'row',
		fontSize: 24,
		height: 42,
		width: '50%',
		backgroundColor: 'white',
		padding: 1
	},
	inputline: {
		flexDirection: 'row',
		alignSelf: 'center',
		fontSize: 24,
		height: 50,
		width: '70%',
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderRightWidth: 1
	},

	text: {
		flexDirection: 'row',
		flex: 1,
		fontSize: 24,
		alignContent: 'flex-end',
		textAlign: 'right',
		alignSelf: 'center',
		padding: 1
	},
	imperial: {
		width: '12%',
		flexDirection: 'row',
		fontSize: 24,
		//textAlign: 'right',
		alignSelf: 'center',
		padding: 1
	}
});

export default MeasuresInput;
