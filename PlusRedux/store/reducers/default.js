import {CHANGECOLOR, CHANGESETTINGS} from '../actions/actions';
import { AsyncStorage } from 'react-native';

const initialState = {
	initialColor: 'lightgreen',
	reduxMeasure: 'metric',
	reduxGender: 'Male',
}

const defaultReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGECOLOR:
			 return text

		case CHANGESETTINGS:
			AsyncStorage.setItem('@gender', reduxGender);
			AsyncStorage.setItem('@measure', reduxMeasure);
			console.log('action dispatched', reduxGender, reduxMeasure);

		default:
			return state;
	}
};


export default defaultReducer;