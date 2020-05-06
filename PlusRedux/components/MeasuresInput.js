import React, { useState, useEffect } from 'react';
import {
	View,
	StyleSheet,
	Modal,
	AsyncStorage,
	TextInput
} from 'react-native';
import { Block } from 'galio-framework';
import { useSelector } from 'react-redux';
import * as S from '../styles';

const MeasuresInput = props => {
	const Measure = useSelector(state => state.default.reduxMeasure);
	const [measureused, setmeasureused] = useState([]);
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
			if ((Measure == 'false')) {
				setmeasureused(['.', '']);
				sobra = (heightvalue/100) % 1
				setenteredHeightFeet(((heightvalue/100) - sobra).toFixed(0));
				setenteredHeightInches((heightvalue%100).toFixed(0));
				setEnteredNeck(neckinit);
				setEnteredHip(hipinit);
				setEnteredWaist(waistinit);
			}
			if ((Measure =='true')) {
				heightvalue = heightvalue * 0.3937007874;
				inches = heightvalue % 12;
				setenteredHeightFeet(((heightvalue - inches)/12).toFixed(0));
				setenteredHeightInches(inches.toFixed(0));
				setmeasureused(['\'', "\""]);
				neckinit = parseFloat(neckinit, 10);
				hipinit = parseFloat(hipinit, 10);
				waistinit = parseFloat(waistinit, 10);
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
			<S.MainContainer>
				<Block style={styles.inputline}>
					<S.TitleLeft>Height: </S.TitleLeft>
					<View style= {{flex: 1, flexDirection: 'row' }}>
						<TextInput
							value={enteredHeightFeet}
							maxLength={3}
							style={styles.imperial}
							onChangeText={InputHandlerHeightFeet}
							keyboardType="number-pad"
						/>
						<S.Imperial>{measureused[0]}</S.Imperial>
						<TextInput
							value={enteredHeightInches}
							maxLength={3}
							style={styles.imperial}
							onChangeText={InputHandlerHeightInches}
							keyboardType="number-pad"
						/>
						<S.Imperial>{measureused[1]}</S.Imperial>
					</View>
				</Block>
				<Block style={styles.inputline}>
					<S.TitleLeft>Neck: </S.TitleLeft>
					<TextInput
						value={enteredNeck}
						placeholder="New Value"
						maxLength={5}
						style={styles.input}
						onChangeText={InputHandlerNeck}
						keyboardType="number-pad"
					/>
				</Block>
				<Block style={styles.inputline}>
					<S.TitleLeft>Hip: </S.TitleLeft>
					<TextInput
						value={enteredHip}
						placeholder="New Value"
						maxLength={5}
						style={styles.input}
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
					<S.TitleLeft>Waist: </S.TitleLeft>
					<TextInput
						value={enteredWaist}
						placeholder="New Value"
						maxLength={5}
						style={styles.input}
						onChangeText={InputHandlerWaist}
						keyboardType="number-pad"
					/>
				</Block>
				<S.UpdateButton
					onPress={props.onAddMeasures.bind(
						this,
						enteredNeck,
						enteredHip,
						enteredWaist,
						enteredHeightFeet,
						enteredHeightInches,
						Measure
					)}>
					<S.UpdateTitle>Update</S.UpdateTitle>
				</S.UpdateButton>
			</S.MainContainer>
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
		backgroundColor: 'transparent',
		borderBottomWidth: 1,
		borderRightWidth: 1
	},
	imperial: {
		flex: 2,
		backgroundColor: 'white',
		width: 10,
		flexDirection: 'row',
		fontSize: 24,
		alignSelf: 'center',
		padding: 1
	},
});

export default MeasuresInput;
