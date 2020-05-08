import React from 'react';
import {  useSelector } from 'react-redux';
import { TextInput } from 'react-native';


const ThemeGeter = props => {

      const ReduxTheme = useSelector(state => state.default.Theme);
	
	return (
            <TextInput
                  style = {{height: 0, width: 0}}
                  value={ReduxTheme}
                  onChangeText={props.onHere( ReduxTheme )}
            ></TextInput>
	);
};

export default ThemeGeter;
