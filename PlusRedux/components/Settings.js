import React, { useState } from 'react';
import { StyleSheet, Modal, Dimensions } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
const { width } = Dimensions.get('screen');

const Settings = props => {
	
	const [enteredSettings, setEnteredSettings] = useState('');

	const SettingsInputHandler = enteredText => {
		setEnteredSettings(enteredText);
	};

	return (
		<Modal transparent={true} style={styles.modalStyling} visible={props.visible} animationType="slide">
			<Block style={styles.settingsContainer}>
				<Button 
					style={styles.button} 
                              onPress={props.onSettings.bind(this, enteredSettings)}
                              >
				<Text color="white">Save and Exit</Text>
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
	settingsContainer: {
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

export default Settings;
