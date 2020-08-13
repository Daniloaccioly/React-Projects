import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from './Icon';
import { withTheme } from 'styled-components';
import Settings from './Settings';
import { ChangeSettings } from '../store/actions/actions';
import { useDispatch } from 'react-redux';

const SettingsButton = props =>  {

	const dispatch = useDispatch();
	const [SettingsMode, setSettingsMode] = useState(false); // Make Settings visible/invisible

	const addSettingsHandler = (SwitchGender, SwitchMeasurement, SwitchTheme) => {
		//onPress of Save and Exit
		setSettingsMode(false);
		dispatch(ChangeSettings(GenderPL = SwitchGender, MeasurePL = SwitchMeasurement, ThemePL = SwitchTheme))
	};
	
	return (
	<TouchableOpacity
		onPress={() => setSettingsMode(true)}>
		<Icon
			family="MaterialCommunityIcons"
			size={28}
			name="cogs"
			color={props.theme.COLORS.ICON}
		/>
            <Settings 
			visible={SettingsMode} 
                  onSettings={addSettingsHandler} 
            />
	</TouchableOpacity>
	);
}

export default withTheme(SettingsButton);