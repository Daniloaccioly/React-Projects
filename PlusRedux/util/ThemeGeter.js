import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import {  useSelector } from 'react-redux';
import { TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { ChangeTheme } from '../store/actions/actions';


const ThemeGeter = props => {

      const ReduxTheme = useSelector(state => state.default.Theme);
      const dispatch = useDispatch();

      async function getTheme() {
		try {
			theme = await AsyncStorage.getItem('@theme');
		} catch (error) {
			console.log('ThemeGeter: Error retrieving theme ' + error);
		} finally {
			console.log('Valor que vem do AsyncStorage: ',theme)
			if (ReduxTheme == theme){
				//pass
			}else dispatch(ChangeTheme(text =theme));
		}
	}

	useEffect(() => {
		getTheme();
	}, []);
	
	return (
            <TextInput
                  style = {{height: 0, width: 0}}
                  value={ReduxTheme}
                  onChangeText={props.onHere( ReduxTheme )}
            ></TextInput>
	);
};

export default ThemeGeter;
