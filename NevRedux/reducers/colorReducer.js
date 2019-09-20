import ColorSelector from '../components/ColorSelector';
import { CHANGECOLOR } from '../Actions/actions';

const initialColor = 'lightgreen';

const colorReducer = (state = initialColor, action) => {
	switch (action.type) {
		case CHANGECOLOR:
                   return text

		default:
			return state;
	}
};

export default colorReducer;
