/*
 * action types, identifiers
 */

export const CHANGECOLOR = 'CHANGECOLOR';
export const CHANGESETTINGS = 'CHANGESETTINGS';
export const INITVALUE = 'INITVALUE';

/*
 * action creators
 */

export function ChangeColor() {
	return {
		type: CHANGECOLOR,
		text
	};
}

export function ChangeSettings(GenderPL, MeasurePL) {
	return {
		type: CHANGESETTINGS,
		GenderPL,
		MeasurePL,
	};
}

export const InitValue = (genderv, measurev) =>{
	return {
		type: INITVALUE,
		genderv,
		measurev,
	};
};