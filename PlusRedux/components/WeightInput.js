import React, { useState } from 'react';
import { StyleSheet, Modal, Dimensions } from 'react-native';
import { Block, Text, Input, Button } from 'galio-framework';
const { width } = Dimensions.get('screen');

const WeightInput = props => {
	
	const [enteredWeight, setEnteredWeight] = useState('');

	const WeightInputHandler = enteredText => {
		setEnteredWeight(enteredText);
	};

	return (
		<Modal transparent={true} style={styles.modalStyling} visible={props.visible} animationType="slide">
			<Block style={styles.inputContainer}>
				<Input
					placeholder="Your Current Weight"
					style={styles.input}
					onChangeText={WeightInputHandler}
					value={enteredWeight}
					keyboardType="number-pad"
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
		marginTop: 100,
		borderColor: 'black',
		borderWidth: 5,
		backgroundColor:'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
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
