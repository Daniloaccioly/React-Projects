import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, AsyncStorage, Switch, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ChangeTheme } from '../store/actions/actions';
import { withTheme } from 'styled-components';
import * as S from '../styles';

const Settings = props => {
	//Gender
	const [SwitchGender, setSwitchGender] = useState();
	//Measures
	const [SwitchMeasurement, setSwitchMeasurement] = useState();
	//Theme
	const [SwitchTheme, setSwitchTheme] = useState();

	async function getGenderValue() {
		try {
			vgender = await AsyncStorage.getItem('@gender');
		} catch {
			Console.log('getSettingsValues Error');
		} finally {
			switch (vgender) {
				case null:
					setSwitchGender(false);
					break;
				case 'false':
					setSwitchGender(false);
					break;
				case 'true':
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
					setSwitchMeasurement(false);
					break;
				case 'false':
					setSwitchMeasurement(false);
					break;
				case 'true':
					setSwitchMeasurement(true);
					break;
				default:
					break;
			}
		}
	}

	async function getThemeValue() {
		try {
			vtheme = await AsyncStorage.getItem('@theme');
		} catch {
			Console.log('getSettingsValues Error');
		} finally {
			switch (vtheme) {
				case null:
					setSwitchTheme(false);
					break;
				case 'false':
					setSwitchTheme(false);
					break;
				case 'true':
					setSwitchTheme(true);
					dispatch(ChangeTheme(text = 'true'));
					break;
				default:
					break;
			}
		}
	}

	useEffect(() => {
		getThemeValue();
		getMeasureValue();
		getGenderValue();
	}, []); //array de variavéis que quando alteradas rodam o useEffect novamente

	const dispatch = useDispatch();

	const HandleSwitchTheme =( value ) => {
		setSwitchTheme(value);
		console.log ('Dispatch', value, SwitchTheme);
		//dispatch pro Redux
		dispatch(ChangeTheme(text = value));
	}

	return (
		<Modal
			transparent={true}
			visible={props.visible}
			animationType="slide"
		>
			<S.MainContainer>
				<View style={styles.switchContainer}>
					<Switch
						thumbColor=	{SwitchGender ? '#F9C6D9' : '#DAFBF7' }
						trackColor={{
							true: props.theme.COLORS.BABYPINK,
							false: props.theme.COLORS.BABYBLUE
						}}
						style={styles.switch}
						value={SwitchGender}
						onValueChange={value => setSwitchGender(value)}
					/>
					<S.UpdateTitle style={styles.text}>
						{SwitchGender ? 'Female' : 'Male' }
					</S.UpdateTitle>
				</View>
				<View style={styles.switchContainer}>
					<Switch
						thumbColor={'#3366CC'}
						trackColor={{
							true: '#408CD9',
							false: '#4DB3E6'
						}}
						style={styles.switch}
						value={SwitchMeasurement}
						onValueChange={value => setSwitchMeasurement(value)}
					/>
					<S.UpdateTitle style={styles.text}>
					{SwitchMeasurement ? 'Imperial' : 'Metric' }
					</S.UpdateTitle>
				</View>
				<View style={styles.switchContainer}>
					<Switch
						thumbColor={'#555'}
						trackColor={{
							true: '#ddd',
							false: '#000'
						}}
						style={styles.switch}
						value={SwitchTheme}
						onValueChange={HandleSwitchTheme}
					/>
					<S.UpdateTitle style={styles.text}>
						{SwitchTheme ? 'Dark' : 'Light'}
					</S.UpdateTitle>
				</View>
				<View style = {{ marginTop:'15%' }}>
					<S.UpdateButton 
						onPress={props.onSettings.bind(
							this,
							SwitchGender,
							SwitchMeasurement,
							SwitchTheme
						)}
					>
						<S.UpdateTitle>
							Save and Exit
						</S.UpdateTitle>
					</S.UpdateButton>
				</View>
			</S.MainContainer>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalStyling: {
		flex: 1,
		borderWidth: 8
	},
	switchContainer: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	switch: {
		flex: 1
	},
	text: {
		fontSize: 24,
		alignContent: 'flex-start',
		textAlign: 'left',
		paddingLeft: 10,
	}
});

export default withTheme(Settings);