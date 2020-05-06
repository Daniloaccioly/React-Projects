import React from 'react';
import { StyleSheet, Modal } from 'react-native';
import LightTheme from '../constants/Light';

const Timer = props => {
	
	return (
		<Modal transparent={true} style={styles.modalStyling} visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
			</View>
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
		backgroundColor: LightTheme.COLORS.WHITE,
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

export default Timer;
