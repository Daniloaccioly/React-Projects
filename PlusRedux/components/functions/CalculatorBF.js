import React from 'react';
import { AsyncStorage, alert } from 'react-native';

//input
class CalculatorData extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			wei: 96,
			height:178,
			neck:40,
			biceps:32,
			weist:90,
			final:100,
		};
	}

	async componentDidMount() {
		try {
			this.setState({
				wei: await AsyncStorage.getItem('@weight'),
				//get height
				//get neck
				//get biceps
				//get weist
				final: await AsyncStorage.getItem('@final'),
			});
		} catch (e) {
			alert(e);
		}
	}

	//input done, figure how to use those values now

	calc = async () => {
		try {
			await AsyncStorage.setItem('@final', this.state.wei + this.state.wei);
			this.setState({ 
				final: await AsyncStorage.getItem('@final')});
		} catch (e) {
			alert(e);
		}
	};
}

//*******MALE METRIC SYSTEM***********
// Gender 		Male
// Weight 		59 		kg
// Height 		168		cm
// Measurements:
// Waist (at navel) 		81 		cm
// Neck (at narrowest) 		30 		cm
// Body Fat 		495 / (1.0324 - .19077 * log10(Navel - Neck) + .15456 * log10(Height)) - 450
// 21% = 495 / (1.0324 - .19077 * log10(81cm - 30cm) + .15456 * log10(168cm)) - 450
// Fat Mass 		Body Fat % * Weight
// 12 kg = 21% * 59 kg
// Lean Mass 		Weight - Fat Mass
// 47 kg = 59 kg - 12 kg
// Body Fat Category 		Acceptable = 18%-25%

//******FEMALE METRIC SYSTEM*********
// Gender 		Female
// Weight 		59 		kg
// Height 		168		cm
// Measurements:
// Waist (at narrowest) 		74 		cm
// Hip (at widest) 		97 		cm
// Neck (at narrowest) 		30 		cm
// Body Fat 		495 / (1.29579 - .35004 * log10(Waist + Hip - Neck) + .22100 * log10(Height)) - 450
// 28% = 495 / (1.29579 - .35004 * log10(74cm + 97cm - 30cm) + .22100 * log10(168cm)) - 450
// Fat Mass 		Body Fat % * Weight
// 17 kg = 28% * 59 kg
// Lean Mass 		Weight - Fat Mass
// 42 kg = 59 kg - 17 kg
// Body Fat Category 		Acceptable = 25%-31%

//******** MALE US SYSTEM***********
// Gender 		Male
// Weight 		130 		lbs
// Height 		5 ft 6 in
// Measurements:
// Waist (at navel) 		32 		in
// Neck (at narrowest) 		12 		in
// Body Fat 		495 / (1.0324 - .19077 * log10(Navel - Neck) + .15456 * log10(Height)) - 450
// 21% = 495 / (1.0324 - .19077 * log10(32in * 2.54cm/in - 12in * 2.54cm/in) + .15456 * log10(66in * 2.54cm/in)) - 450
// Fat Mass 		Body Fat % * Weight
// 27 lbs = 21% * 130 lbs
// Lean Mass 		Weight - Fat Mass
// 103 lbs = 130 lbs - 27 lbs
// Body Fat Category 		Acceptable = 18%-25%

//*******FEMALE US SYSTEM********		
// Gender 		Female
// Weight 		130 		lbs
// Height 		5 ft 6 in
// Measurements:
// Waist (at narrowest) 		29 		in
// Hip (at widest) 		38 		in
// Neck (at narrowest) 		12 		in
// Body Fat 		495 / (1.29579 - .35004 * log10(Waist + Hip - Neck) + .22100 * log10(Height)) - 450
// 28% = 495 / (1.29579 - .35004 * log10(29in * 2.54cm/in + 38in * 2.54cm/in - 12in * 2.54cm/in) + .22100 * log10(66in * 2.54cm/in)) - 450
// Fat Mass 		Body Fat % * Weight
// 36 lbs = 28% * 130 lbs
// Lean Mass 		Weight - Fat Mass
// 94 lbs = 130 lbs - 36 lbs
// Body Fat Category 		Acceptable = 25%-31%

export  const calc = async ( wei ) => {
	return async () => {
		try {
			await AsyncStorage.setItem('@final', this.state.wei + this.state.weightvalue);
			this.setState({ 
				final: await AsyncStorage.getItem('@final')});
			} catch (e) {
			alert(e);
		}
	}
}