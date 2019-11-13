import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { AppLoading } from 'expo';
import { Block, GalioProvider } from 'galio-framework';
import Screens from './navigation/Screens';
import { argonTheme } from './constants';
import defaultReducer from './reducers/default';

const rootReducer = combineReducers({
	default: defaultReducer
});

const store = createStore(rootReducer);

export default class App extends React.Component {

	render() {
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
}
