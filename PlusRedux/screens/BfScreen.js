import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, ScrollView, AsyncStorage, alert } from 'react-native';
import { Block, theme } from 'galio-framework';
import { InitValue } from '../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Measuresinput from '../components/MeasuresInput';
import * as S from '../styles';

const { width } = Dimensions.get('screen');

const BfScreen = props => {
	const code = useSelector(state => state.default.reduxCode);
	const [isAddMode, setIsAddMode] = useState(false); // Make MeasuresInput visible/invisible
	const [measureused, setmeasureused] = useState([]);
	const [Height, setHeight] = useState();
	const [visualHeight, setvisualHeight] = useState();
	const [Neck, setNeck] = useState();
	const [visualNeck, setvisualNeck] = useState();
	const [Hip, setHip] = useState();
	const [visualHip, setvisualHip] = useState();
	const [Waist, setWaist] = useState();
	const [visualWaist, setvisualWaist] = useState();
	const [Final, setFinal] = useState();


	const addMeasuresHandler = (enteredNeck, enteredHip, enteredWaist, enteredHeightFeet, enteredHeightInches, Measure) =>
	{
		if (enteredHeightFeet !== '' && enteredHeightInches !== '' && enteredNeck !== '' && enteredWaist !== '' && enteredHip !== '')
		{
			setIsAddMode(false);
			if (Measure == 'true'){
				valueNeck=  parseFloat(enteredNeck, 10);
				valueHip=  parseFloat(enteredHip, 10);
				valueWaist=  parseFloat( enteredWaist, 10);
				valueHeightFeet=  parseFloat(enteredHeightFeet, 10);
				valueHeightInches=  parseFloat(enteredHeightInches, 10);

				setHeight((((valueHeightFeet*12) + valueHeightInches)*2.54).toFixed(0));
				setNeck((valueNeck*2.54).toFixed(0));
				setHip((valueHip*2.54).toFixed(0));
				setWaist((valueWaist*2.54).toFixed(0));
				getFinal(Height, Neck, Waist, Hip);

				console.log(valueHeightFeet, valueHeightInches, Height);

				AsyncStorage.setItem('@height', Height);
				AsyncStorage.setItem('@neck', Neck);
				AsyncStorage.setItem('@hip', Hip);
				AsyncStorage.setItem('@weist', Waist);
			}
			if (Measure == 'false'){
				setHeight(enteredHeightFeet + enteredHeightInches);
				setNeck(enteredNeck);
				setHip(enteredHip);
				setWaist(enteredWaist);
				getFinal(Height, enteredNeck, enteredWaist, enteredHip);
				AsyncStorage.setItem('@height', enteredHeightFeet + enteredHeightInches);
				AsyncStorage.setItem('@neck', enteredNeck);
				AsyncStorage.setItem('@hip', enteredHip);
				AsyncStorage.setItem('@weist', enteredWaist);
			}	

		} else
			alert( 'Invalid entry Data', 'New  input cannot be empty');
	};

	async function getData() {
		try {
			heightv = await AsyncStorage.getItem('@height');
			neckv = await AsyncStorage.getItem('@neck');
			hipv = await AsyncStorage.getItem('@hip');
			waistv = await AsyncStorage.getItem('@weist');
			finalv = await AsyncStorage.getItem('@final');
			measurev = await AsyncStorage.getItem('@measure');
			genderv = await AsyncStorage.getItem('@gender');

			if (heightv === null) {
				storeData((arg1 = '@height'), (arg2 = ''), (arg3 = 'Height'));
			}

			if (neckv === null) {
				storeData((arg1 = '@neck'), (arg2 = ''), (arg3 = 'Neck'));
			}

			if (hipv === null) {
				storeData((arg1 = '@hip'), (arg2 = ''), (arg3 = 'Hip'));
			}

			if (waistv === null) {
				storeData((arg1 = '@waist'), (arg2 = ''), (arg3 = 'Waist'));
			}
		} catch (error) {
			console.log('BfScreen.js: Error retrieving data ' + error);
		} finally {
			setHeight(heightv);
			setNeck(neckv);
			setHip(hipv);
			setWaist(waistv);
			setFinal(finalv);
			dispatch(InitValue(genderv, measurev));
		}
	}

	storeData = async (arg1, arg2, arg3) => {
		try {
			await AsyncStorage.setItem(arg1, arg2);
			this.setState({
				arg3: await AsyncStorage.getItem(arg1)
			});
		} catch (e) {
			alert(e);
		}
	};

	function converter(heightn, neckn, hipn, waistn, measures) {
		if (measures == 'false') {
			converted = heightn / 100;
			setvisualHeight(converted.toFixed(2));
			setvisualNeck(neckn.toFixed(0));
			setvisualHip(hipn.toFixed(0));
			setvisualWaist(waistn.toFixed(0));
			setmeasureused([' meters', ' cms']);
		}
		if (measures == 'true') {
			converted = heightn * 0.3937007874; //centimeters to inches
			inches = converted % 12
			feet = (converted - inches)/12
			set = (feet.toFixed(0) +'\' ' + inches.toFixed(0) +"\''")
			setvisualHeight(set);
			convertedn = neckn * 0.3937007874;
			setvisualNeck(convertedn.toFixed(0));
			convertedh = hipn * 0.3937007874;
			setvisualHip(convertedh.toFixed(0));
			convertedw = waistn * 0.3937007874;
			setvisualWaist(convertedw.toFixed(0));
			setmeasureused(['', ' inches']);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		getFinal(Height, Neck, Waist, Hip);
	}, [code, isAddMode]);

	const dispatch = useDispatch();

	const getFinal = (Height, Neck, Waist, Hip) => {
		let heightn = parseFloat(Height, 10);
		let neckn = parseFloat(Neck, 10);
		let waistn = parseFloat(Waist, 10);
		let hipn = parseFloat(Hip, 10);
		let fin = 0;
		switch (code) {

			case 0:
				console.log('Female Imperial');
				converter(heightn, neckn, hipn, waistn, (measures = 'true'));
				fin = 495 /(1.29579 - 0.35004 * Math.log10(waistn + hipn - neckn) + 0.221 * Math.log10(heightn)) - 450;
				fin = fin.toFixed(1);
				break;
			case 1:
				console.log('Male Imperial');
				converter(heightn, neckn, hipn, waistn, (measures = 'true'));
				fin = 495 / (1.0324 - 0.19077 * Math.log10(waistn - neckn) + 0.15456 * Math.log10(heightn)) - 450;
				fin = fin.toFixed(1);
				break;
			case 10:
				console.log('Female Metric');
				converter(heightn, neckn, hipn, waistn, (measures = 'false'));
				fin = 495 /(1.29579 - 0.35004 * Math.log10(waistn + hipn - neckn) + 0.221 * Math.log10(heightn)) - 450;
				fin = fin.toFixed(1);
				break;
			case 11:
				console.log('Male Metric');
				converter(heightn, neckn, hipn, waistn, (measures = 'false'));
				fin = 495 / (1.0324 - 0.19077 * Math.log10(waistn - neckn) + 0.15456 * Math.log10(heightn)) - 450;
				fin = fin.toFixed(1);
				break;
		}

		try {
			AsyncStorage.setItem('@final', fin.toString());
		} catch (error) {
			console.log('Action GETCALC: Error retrieving data ' + error);
		} finally {
			setFinal(fin);
			console.log('Final do getFinal', code);
		}
	};

	return (
		<S.MainView>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.articles}
			>
				<Block flex>
					<Block style={styles.input}>
						<S.TitleLeft>Height: </S.TitleLeft>
						<S.TitleRight>
							{visualHeight + measureused[0]}
						</S.TitleRight>
					</Block>
					<Block style={styles.input}>
						<S.TitleLeft>Neck: </S.TitleLeft>
						<S.TitleRight>
							{visualNeck + measureused[1]}
						</S.TitleRight>
					</Block>
					<Block style={styles.input}>
						<S.TitleLeft>Hip: </S.TitleLeft>
						<S.TitleRight>
							{visualHip + measureused[1]}
						</S.TitleRight>
					</Block>
					<Block style={styles.input}>
						<S.TitleLeft>Waist: </S.TitleLeft>
						<S.TitleRight>
							{visualWaist + measureused[1]}
						</S.TitleRight>
					</Block>
					<Block style={styles.input}>
						<S.TitleLeft
							style={{fontSize: 28}}
						>
							Body Fat:{' '}
						</S.TitleLeft>
						<S.TitleRight
							style={{ fontSize: 28 }}
						>
							{Final}%
						</S.TitleRight>
					</Block>
				</Block>
				<Block style={styles.text}>
					<S.UpdateButton
						onPress={() => setIsAddMode(true)}>
						<S.UpdateTitle>Update</S.UpdateTitle>
					</S.UpdateButton>
					<Measuresinput
						visible={isAddMode}
						onAddMeasures={addMeasuresHandler}
					/>
				</Block>
			</ScrollView>
		</S.MainView>
	);
};

const styles = StyleSheet.create({
	articles: {
		width: width - theme.SIZES.BASE * 2,
		paddingVertical: theme.SIZES.BASE
	},
	input: {
		flexDirection: 'row',
		alignContent: 'space-around',
		padding: 1
	},
	text: {
		flexDirection: 'row',
		flex: 1,
		alignContent: 'flex-end',
		textAlign: 'right',
		alignSelf: 'center',
		padding: 1
	}
});

export default BfScreen;