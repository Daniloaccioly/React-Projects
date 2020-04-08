import {CHANGECOLOR, CHANGESETTINGS, INITVALUE} from '../actions/actions';
import { AsyncStorage } from 'react-native';

const initialState = {
	initialColor: 'lightgreen',	
	reduxMeasure: '',
	reduxGender: '',
	reduxCode: 0,
}

const defaultReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGECOLOR:
			 return text

		//female imperial 0
		//female metric 10
		//male imperial 1
		//male metric 11
		case CHANGESETTINGS:
			let code = 0;
			if (GenderPL == 'Male'){
				code = code + 1;
				if (MeasurePL == 'Metric'){
					code = code + 10;
				}
			} if (GenderPL == 'Female'){
				if (MeasurePL == 'Metric'){
					code = code + 10;
				}
			}
			AsyncStorage.setItem('@gender', GenderPL);
			AsyncStorage.setItem('@measure', MeasurePL);
			console.log('CHANGESETTINGS: ', GenderPL, MeasurePL, code);
				return {
					...state,
					reduxMeasure: MeasurePL,
					reduxGender: GenderPL,
					reduxCode: code,
				}

		case INITVALUE:
			let cod = 0;
			if (genderv == 'Male'){
				cod = cod + 1;
				if (measurev == 'Metric'){
					cod = cod + 10;
				}
			} if (genderv == 'Female'){
				if (measurev == 'Metric'){
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