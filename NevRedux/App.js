import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import colorReducer from './reducers/colorReducer';
import MainScreen from './screens/MainScreen';

const rootReducer = combineReducers({
	colors: colorReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
		'rubik-regular': require('./assets/fonts/Rubik-Regular.ttf'),
		'Ubuntu-R': require('./assets/fonts/Ubuntu-R.ttf')
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={err => console.log(err)}
			/>
		);
	}

	return (
		<Provider store={store}>
			<MainScreen />
		</Provider>
	);
}
