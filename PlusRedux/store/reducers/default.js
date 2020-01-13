import {CHANGECOLOR, CHANGEGENDER} from '../actions/actions';

const initialState = {
	initialColor: 'lightgreen',
	system: 'metric',
	gender: 'male',
	modalVisible: false
}

const defaultReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGECOLOR:
			 return text

		case CHANGEGENDER:
			return {gender: state.gender= 'female'}

		default:
			return state;
	}
};

export default defaultReducer;