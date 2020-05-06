/*
 * action types, identifiers
 */

export const CHANGECOLOR = 'CHANGECOLOR';
export const CHANGETHEME = 'CHANGETHEME';
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

export function ChangeTheme() {
	return {
		type: CHANGETHEME,
		text
	};
}

export function ChangeSettings(GenderPL, MeasurePL, ThemePL) {
	return {
		type: CHANGESETTINGS,
		GenderPL,
		MeasurePL,
		ThemePL,
	};
}

export const InitValue = (genderv, measurev) =>{
	return {
		type: INITVALUE,
		genderv,
		measurev,
	};
};