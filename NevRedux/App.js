import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navegador from './navigation/navigation';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import ColorSelector from './components/ColorSelector';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import colorReducer from './reducers/colorReducer';

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
		//Root View
		<Provider store={store}>
			<View
				style={{
					backgroundColor: ColorSelector.PrimaryColor,
					paddingTop: 30,
					flex: 1
				}}
			>
				<View style={styles.header}>
					<Text style={styles.title}>Header</Text>
				</View>
				<View style={styles.body}>
					<Navegador />
				</View>
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	body: {
		backgroundColor: '#8f1d1d',
		flex: 95,
		borderColor: ColorSelector.SecondaryColor,
		borderWidth: 3,
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25
	},

	header: {
		flex: 8,
		flexDirection: 'row',
		backgroundColor: ColorSelector.PrimaryColor,
		alignItems: 'center'
	},

	title: {
		flex: 1,
		fontSize: 46,
		color: ColorSelector.SecondaryColor,
		textAlign: 'center'
	}
});
