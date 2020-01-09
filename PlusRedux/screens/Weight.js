import React, { useState } from 'react';
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

class Weight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			wei: 0
		};
	}

	async componentDidMount() {
		try {
			this.setState({
				weight: await AsyncStorage.getItem('@weight')
			});
		} catch (error) {
			console.log('Weight.js: Error retrieving data ' + error);
		}
	}

	storeWeight = async () => {
		try {
			await AsyncStorage.setItem('@weight', this.state.wei);
			this.setState({
				weight: await AsyncStorage.getItem('@weight')
			});
		} catch (error) {
			console.log('Weight.js: Error retrieving data ' + error);
		}
	};

	setWeight = text => {
		this.setState({ wei: text });
		setTimeout(() => {
			this.storeWeight();
		}, 1);
	};

	clearAsyncStorage = async () => {
		AsyncStorage.clear();
	};

	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<Block style={styles.input}>
					<Text style={styles.text}>Weight: </Text>
					<Input
						color="black"
						placeholder="new value"
						placeholderTextColor={
							argonTheme.COLORS.INPUT
						}
						keyboardType="number-pad"
						onChangeText={this.setWeight}
					/>
				</Block>
				<Block>
					<Text style={styles.text}>
						{this.state.weight}
					</Text>
				</Block>
				<Block style={styles.text}>
					<Button
						style={styles.input}
						round
						size="small"
						onPress={this.clearAsyncStorage}>
						<Text>Clear Async Storage</Text>
					</Button>
				</Block>
			</ScrollView>
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

export default Weight;
