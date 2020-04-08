import React, { useState } from 'react';
import { StyleSheet, Modal, TextInput } from 'react-native';
import { Block, Text, Input, Button } from 'galio-framework';
import argonTheme from '../constants/Theme';

const WeightInput = props => {
	
	const [enteredWeight, setEnteredWeight] = useState('');

	const WeightInputHandler = enteredText => {
		let formated = enteredText.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') ;
		setEnteredWeight(formated);
	};

	return (
		<Modal transparent={true} style={styles.modalStyling} visible={props.visible} animationType="slide">
			<Block style={styles.inputContainer}>
				<TextInput
					placeholder="Your Current Weight"
					style={styles.input}
					placeholdertextcolor= {argonTheme.COLORS.BLACK}
					onChangeText={WeightInputHandler}
					value={enteredWeight}
					keyboardType="number-pad"
					onSubmitEditing={props.onAddWeight.bind(this, enteredWeight)}
				/>
				<Button 
					style={styles.button} 
					onPress={props.onAddWeight.bind(this, enteredWeight)}>
				<Text color="white">Add Value</Text>
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
		alignItems: 'center',
		borderColor:'black',
		borderWidth: 20,
	},
	inputContainer: {
		flex: .5,
		borderRadius: 45,
		shadowRadius: 25,
		margin: 30,
		marginTop: 50,
		borderColor: 'black',
		borderWidth: 5,
		backgroundColor: argonTheme.COLORS.WHITE,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		fontSize: 28,
		height: 55,
		width: '80%',
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10
	},
	button: {
		width: '40%',
		flexDirection: 'row',
		alignContent: 'space-around',
		margin: 30,
	},
});

export default WeightInput;
