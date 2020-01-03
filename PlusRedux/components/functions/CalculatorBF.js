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