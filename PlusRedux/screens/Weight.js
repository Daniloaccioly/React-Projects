import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView, AsyncStorage, alert } from 'react-native';
import { Block, theme, Text, Input, Button } from 'galio-framework';

const { width } = Dimensions.get('screen');

class Weight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weightvalue: 0,
		};
	}

	
	storeWeight = async () => {
		try {
			await AsyncStorage.setItem('@weight', this.state.weightvalue);
			this.state.display = await AsyncStorage.getItem('@weight');
		} catch (e) {
			alert(e);
		}
	};


	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<Block style={styles.input}>
					<Text style={styles.text}>Weight: </Text>
					<Input
						color="black"
						placeholder="placeholder"
						placeholderTextColor={'#8898AA'}
						keyboardType="number-pad"
						onChangeText={text => { this.setState({ weightvalue: text }) } }
					/>
				</Block>
				<Block style={styles.text}>
					<Button
						style={styles.input}
						round
						size="small"
						onPress={ this.storeWeight}
					>
						Gravar
					</Button>
				</Block>
				<Block>
					<Text style={styles.text}>
						{this.state.weightvalue}
					</Text>
				</Block>
				<Block>
					<Text style={styles.text}>
						{this.state.display}
					</Text>
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
