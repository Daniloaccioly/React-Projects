import React, { useState } from 'react';
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
	const [fontLoaded, setFontLoaded] = useState(false);
	const [SelectedTheme, setSelectedTheme] = useState();

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