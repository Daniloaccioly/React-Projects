import React, { useState } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { createStore, combineReducers } from 'redux';
import { AppLoading } from 'expo';
import { Block, GalioProvider } from 'galio-framework';
import Screens from './navigation/Screens';
import { argonTheme } from './constants';
import defaultReducer from './store/reducers/default';

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

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
			/>
		);
	}

	return (
		<GalioProvider theme={argonTheme}>
			<Block flex>
				<Provider store={store}>
					<Screens />
				</Provider>
			</Block>
		</GalioProvider>
	);
}
