import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, AsyncStorage, Switch } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import argonTheme from '../constants/Theme';

const Settings = props => {
	const [SwitchGender, setSwitchGender] = useState();
	const [Gender, setGender] = useState();
	const [thumbColor, setThumbColor] = useState();
	const [SwitchMeasurement, setSwitchMeasurement] = useState();
	const [Measurement, setMeasurement] = useState();

	async function getGenderValue() {
		try {
			vgender = await AsyncStorage.getItem('@gender');
		} catch {
			Console.log('getSettingsValues Error');
		} finally {
			switch (vgender) {
				case null:
					setGender('Male');
					setSwitchGender(false);
					break;
				case 'Male':
					setGender('Male');
					setSwitchGender(false);
					setThumbColor('#DAFBF7');
					break;
				case 'Female':
					setGender('Female');
					setThumbColor('#F9C6D9');
					setSwitchGender(true);
					break;
				default:
					break;
			}
		}
	}

	async function getMeasureValue() {
		try {
			vmeasure = await AsyncStorage.getItem('@measure');
		} catch {
			Console.log('getSettingsValues Error');
		} finally {
			switch (vmeasure) {
				case null:
					console.log('aqui');
					setMeasurement('Metric');
					setSwitchMeasurement(false);
					break;
				case 'Metric':
					setMeasurement('Metric');
					setSwitchMeasurement(false);
					break;
				case 'Imperial':
					setMeasurement('Imperial');
					setSwitchMeasurement(true);
					break;
				default:
					break;
			}
		}
	}

	useEffect(() => {
		getMeasureValue();
		getGenderValue();
	}, []); //array de variavéis que quando alteradas rodam o useEffect novamente

	function getGender(SwitchGender) {
		let value = 'none';
		if (SwitchGender === true) {
			setGender('Female');
			setThumbColor('#F9C6D9');
		}
		if (SwitchGender === false) {
			setGender('Male');
			setThumbColor('#DAFBF7');
		}
	}

	function changeGender(newvalue) {
		setSwitchGender(newvalue);
		getGender(newvalue);
	}

	function getMeasurement(SwitchMeasurement) {
		if (SwitchMeasurement === true) setMeasurement('Imperial');
		if (SwitchMeasurement === false) setMeasurement('Metric');
	}

	function changeMeasurement(newvalue) {
		setSwitchMeasurement(newvalue);
		getMeasurement(newvalue);
	}
	return (
		<Modal
			transparent={true}
			style={styles.modalStyling}
			visible={props.visible}
			animationType="slide"
		>
			<Block style={styles.settingsContainer}>
				<Block style={styles.switchContainer}>
					<Switch
						thumbColor={thumbColor}
						trackColor={{
							true: argonTheme.COLORS.BABYPINK,
							false: argonTheme.COLORS.BABYBLUE
						}}
						style={styles.switch}
						value={SwitchGender}
						onValueChange={newvalue =>
							changeGender(newvalue)
						}
					/>
					<Text style={styles.text} color="black">
						{Gender}
					</Text>
				</Block>

				<Block style={styles.switchContainer}>
					<Switch
						thumbColor={'#3366CC'}
						trackColor={{
							true: '#408CD9',
							false: '#4DB3E6'
						}}
						style={styles.switch}
						value={SwitchMeasurement}
						onValueChange={newvalue =>
							changeMeasurement(newvalue)
						}
					/>
					<Text style={styles.text} color="black">
						{Measurement}
					</Text>
				</Block>
				<Button
					style={styles.button}
					onPress={props.onSettings.bind(
						this,
						Gender,
						Measurement
					)}
				>
					<Text h5 color="white">
						Save and Exit
					</Text>
				</Button>
			</Block>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalStyling: {
		flex: 1,
		backgroundColor: 'gray',
		borderColor: 'black',
		borderWidth: 8
	},
	//principal
	settingsContainer: {
		flex: 1,
		flexDirection: 'column',
		borderRadius: 25,
		shadowRadius: 25,
		margin: 20,
		marginTop: 50,
		marginBottom: 140,
		borderColor: 'black',
		borderWidth: 4,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	switchContainer: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	button: {
		fontSize: 28,
		borderRadius: 25,
		width: '65%',
		alignContent: 'space-around',
		marginTop: 200,
		padding: 25
	},
	switch: {
		flex: 1
	},
	text: {
		flex: 1,
		fontSize: 24,
		color: 'black',
		alignContent: 'flex-start',
		textAlign: 'left',
		alignSelf: 'center',
		padding: 1
	}
});

export default Settings;
