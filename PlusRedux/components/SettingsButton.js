import React, { useState } from 'react';
import {
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import Icon from './Icon';
import argonTheme from '../constants/Theme';
import Settings from './Settings';
import { ChangeSettings } from '../store/actions/actions';
import { useDispatch } from 'react-redux';

const SettingsButton = ({ isWhite, style }) =>  {

	const dispatch = useDispatch();
	const [isSettingsMode, setSettingsMode] = useState(false); // Make Settings visible/invisible

	const addSettingsHandler = (Gender, Measurement) => {
		//onPress of Save and Exit
		setSettingsMode(false);
		dispatch(ChangeSettings((reduxGender = Gender, reduxMeasure = Measurement)));
		console.log(Measurement);
	};

	return (

	<TouchableOpacity
		style={[styles.button, style]}
		onPress={() => setSettingsMode(true)}
	>
		<Icon
			family="MaterialCommunityIcons"
			size={28}
			name="cogs"
			color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
		/>
            <Settings 
                  visible={isSettingsMode} 
                  onSettings={addSettingsHandler} 
            />
	</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		padding: 12,
		position: 'relative'
	},
});

export default SettingsButton;
