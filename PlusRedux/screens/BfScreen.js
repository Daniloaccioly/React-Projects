import React from 'react';
import {
	StyleSheet,
	Dimensions,
	ScrollView,
	AsyncStorage,
	alert
} from 'react-native';
import { Block, theme, Text, Input, Button } from 'galio-framework';
import { argonTheme } from '../constants/index';

const { width } = Dimensions.get('screen');

class BfScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heightv: '177',
			neckv: '40',
			hipv: '100',
			weistv: '90',
			finalv: '0'
		};
	}

	async componentDidMount() {
		try {
			this.setState({
				height: await AsyncStorage.getItem('@height'),
				neck: await AsyncStorage.getItem('@neck'),
				hip: await AsyncStorage.getItem('@hip'),
				weist: await AsyncStorage.getItem('@weist'),
				final: await AsyncStorage.getItem('@final')
			});

			if (this.state.height === null) {
				this.storeData(
					(arg1 = '@height'),
					(arg2 = this.state.heightv),
					(arg3 = 'height')
				);
			}	

			if (this.state.neck === null) {
				this.storeData(
					(arg1 = '@neck'),
					(arg2 = this.state.neckv),
					(arg3 = 'neck')
				);
			}

			if (this.state.hip === null) {
				this.storeData(
					(arg1 = '@hip'),
					(arg2 = this.state.hipv),
					(arg3 = 'hip')
				);
			}

			if (this.state.neck === null) {
				this.storeData(
					(arg1 = '@weist'),
					(arg2 = this.state.weistv),
					(arg3 = 'weist')
				);
			}
		} catch (error) {
			console.log('BfScreen.js: Error retrieving data ' + error);
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

	final = async () => {
		this.setState({
			height: await AsyncStorage.getItem('@height'),
			neck: await AsyncStorage.getItem('@neck'),
			hip: await AsyncStorage.getItem('@hip'),
			weist: await AsyncStorage.getItem('@weist')
		});
		if (this.state.neck !== null && this.state.height !== null && this.state.weist !== null) {
			let heightn = parseFloat(this.state.height, 10)
			let neckn = parseFloat(this.state.neck, 10)
			let weistn = parseFloat(this.state.weist, 10)
			let fin = 495 / (1.0324 - .19077 * Math.log10(weistn - neckn) + .15456 *Math.log10(heightn)) - 450
			fin= fin.toFixed(1)
			try {	
				await AsyncStorage.setItem(
					'@final',
					fin.toString()
				);
				this.setState({
					final: await AsyncStorage.getItem('@final')
				});
			} catch (error) {
				console.log('BfScreen.js: Error retrieving data ' + error);
			}
		}
	};

	renderArticles = () => {
		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.articles}
			>
				<Block flex>
					<Block style={styles.input}>
						<Text style={styles.text}>Height: </Text>
						<Input
							color="black"
							placeholder={this.state.height}
							placeholderTextColor={'#8898AA'}
							keyboardType="number-pad"
						/>
					</Block>
					<Block style={styles.input}>
						<Text style={styles.text}>Neck: </Text>
						<Input
							color="black"
							placeholder={this.state.neck}
							placeholderTextColor={'#8898AA'}
							keyboardType="number-pad"
						/>
					</Block>
					<Block style={styles.input}>
						<Text style={styles.text}>Hip: </Text>
						<Input
							color="black"
							placeholder={this.state.hip}
							placeholderTextColor={'#8898AA'}
							keyboardType="number-pad"
						/>
					</Block>
					<Block style={styles.input}>
						<Text style={styles.text}>Weist: </Text>
						<Input
							color="black"
							placeholder={this.state.weist}
							placeholderTextColor={'#8898AA'}
							keyboardType="number-pad"
						/>
					</Block>
					<Block style={styles.input}>
						<Text
							style={{
								...styles.text,
								...{
									fontSize: 28
								}
							}}
						>
							Body Fat:{' '}
						</Text>
						<Text
							style={{
								...styles.text,
								...{
									fontSize: 28,
									textAlign: 'left'
								}
							}}
						>
							{this.state.final}%
						</Text>
					</Block>
				</Block>
				<Block style={styles.text}>
					<Button
						style={styles.input}
						round
						size="small"
						onPress={this.final}
					>
						Calc
					</Button>
				</Block>
			</ScrollView>
		);
	};

	render() {
		return (
			<Block flex center style={styles.home}>
				{this.renderArticles()}
			</Block>
		);
	}
}

const styles = StyleSheet.create({
	home: {
		width: width
	},
	articles: {
		width: width - theme.SIZES.BASE * 2,
		paddingVertical: theme.SIZES.BASE
	},
	input: {
		flexDirection: 'row',
		alignContent: 'space-around',
		padding: 1
		//borderColor:'black',
		//borderWidth:2
	},
	text: {
		//h1:true,
		flex: 1,
		fontSize: 24,
		alignContent: 'flex-end',
		textAlign: 'right',
		alignSelf: 'center',
		padding: 1
	}
});

export default BfScreen;