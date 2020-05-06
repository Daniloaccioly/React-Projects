import React, { useState } from 'react';
import { StyleSheet, Modal, TextInput } from 'react-native';
import LightTheme from '../constants/Light';
import * as S from '../styles';

const WeightInput = props => {
	
	const [enteredWeight, setEnteredWeight] = useState('');

	const WeightInputHandler = enteredText => {
		let formated = enteredText.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') ;
		setEnteredWeight(formated);
	};

	return (
		<Modal transparent={true} style={styles.modalStyling} visible={props.visible} animationType="slide">
			<S.MainContainer>
				<TextInput
					placeholder="Your Current Weight"
					style={styles.input}
					placeholdertextcolor= {LightTheme.COLORS.BLACK}
					onChangeText={WeightInputHandler}
					value={enteredWeight}
					keyboardType="number-pad"
					onSubmitEditing={props.onAddWeight.bind(this, enteredWeight)}
				/>
				<S.UpdateButton
					onPress={props.onAddWeight.bind(this, enteredWeight)}>
				<S.UpdateTitle>Add Value</S.UpdateTitle>
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
		alignItems: 'center',
		borderColor:'black',
		borderWidth: 20,
	},
	input: {
		fontSize: 28,
		height: 55,
		width: '50%',
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10
	},
});

export default WeightInput;
