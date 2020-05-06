import {CHANGETHEME, CHANGECOLOR, CHANGESETTINGS, INITVALUE} from '../actions/actions';
import { AsyncStorage } from 'react-native';

const initialState = {
	initialColor: 'lightgreen',	
	Theme: 'Light',
	reduxMeasure: 'false',
	reduxGender: 'false',
	reduxCode: 0,
}

const defaultReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGECOLOR:
			 return {...state,
				initialColor: text}

		case CHANGETHEME:
			 return {...state,
				Theme: text}

		//female imperial 0
		//female metric 10
		//male imperial 1
		//male metric 11
		case CHANGESETTINGS:
			let code = 0;
			if (GenderPL == false){
				code = code + 1;
				if (MeasurePL == false){
					code = code + 10;
				}
			} if (GenderPL == true){
				if (MeasurePL == false){
					code = code + 10;
				}
			}
			AsyncStorage.setItem('@gender', JSON.stringify(GenderPL));
			AsyncStorage.setItem('@measure', JSON.stringify(MeasurePL));
			AsyncStorage.setItem('@theme', JSON.stringify(ThemePL));
			console.log('CHANGESETTINGS: ', code);
				return {
					...state,
					reduxMeasure: JSON.stringify( MeasurePL),
					reduxGender: JSON.stringify(GenderPL),
					reduxCode: code,
				}

		case INITVALUE:
			let cod = 0;
			if (genderv == 'false'){
				cod = cod + 1;
				if (measurev == 'false'){
					cod = cod + 10;
				}
			} if (genderv == 'true'){
				if (measurev == 'false'){
					cod = cod + 10;
				}
			}
			console.log('INITVALUE: ', genderv, measurev, cod);
			return {
				...state,
				reduxMeasure: measurev,
				reduxGender: genderv,
				reduxCode: cod,
			}

		default:
			return state;
	}
};


export default defaultReducer;