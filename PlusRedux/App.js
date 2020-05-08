import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { createStore, combineReducers } from 'redux';
import { AppLoading } from 'expo';
import Screens from './navigation/Screens';
import ThemeGeter from './util/ThemeGeter';
import defaultReducer from './store/reducers/default';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './constants/index';

const rootReducer = combineReducers({
	default: defaultReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
		'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
	});
};

const App = props => {
	const [SelectedTheme, setSelectedTheme] = useState();
	const [fontLoaded, setFontLoaded] = useState(false);

	async function getTheme() {
		try {
			theme = await AsyncStorage.getItem('@theme');
			if (theme === null){
				theme = 'true'
			}
		} catch (error) {
			console.log('App.js: Error retrieving theme ' + error);
		} finally {
			setSelectedTheme(theme);
		}
	}

	useEffect(() => {
		getTheme();
	}, []);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
			/>
		);
	}

	const ChangeTheme = (ReduxTheme) => {
		setSelectedTheme(ReduxTheme);
		console.log ('check ', ReduxTheme);
	};

	return (
			<Provider store={store}>
				<ThemeProvider theme= { SelectedTheme == 'false' ? LightTheme : DarkTheme }>
					<ThemeGeter
						onHere={ChangeTheme} 
					/>
					<Screens/>	
					</ThemeProvider>
				</Provider>
	);
}

export default  App;