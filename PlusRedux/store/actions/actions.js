/*
 * action types
 */

export const CHANGECOLOR = 'CHANGECOLOR';
export const CHANGESETTINGS = 'CHANGESETTINGS';

/*
 * action creators
 */

export function ChangeColor() {
	return {
		type: CHANGECOLOR,
		text
	};
}
export function ChangeSettings(reduxGender, reduxMeasure) {
	return {
		type: CHANGESETTINGS,
		reduxGender,
		reduxMeasure
	};
}