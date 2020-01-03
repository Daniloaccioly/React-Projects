import React from 'react';
import { StyleSheet, Dimensions, ScrollView, AsyncStorage, alert } from 'react-native';
import { Block, theme, Text, Input, Button } from 'galio-framework';

const { width } = Dimensions.get('screen');

class BfScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			weight: 0,
			final: 0,
		};
	}

	async componentDidMount() {
		try {
			this.setState({ 
				weight: await AsyncStorage.getItem('@weight'),
				//get height
				//get neck
				//get biceps
				//get weist
				final: await AsyncStorage.getItem('@final'),
			});
		}catch (e){
			alert(e);
		}
	}

	final = async () => {
		try {
			await AsyncStorage.setItem('@final', this.state.weight + this.state.weight);
			this.setState({ 
				final: await AsyncStorage.getItem('@final')});
		} catch (e) {
			alert(e);
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
							placeholder="placeholder"
							placeholderTextColor={'#8898AA'}
							keyboardType='number-pad'
						/>
					</Block>
					<Block style={styles.input}>
						<Text style={styles.text}>Neck: </Text>
						<Input
							color="black"
							placeholder="placeholder"
							placeholderTextColor={'#8898AA'}
							keyboardType='number-pad'
						/>
					</Block>
					<Block style={styles.input}>
						<Text style={styles.text}>Biceps: </Text>
						<Input
							color="black"
							placeholder="placeholder"
							placeholderTextColor={'#8898AA'}
							keyboardType='number-pad'
						/>
					</Block>
					<Block style={styles.input}>
						<Text style={styles.text}>Weist: </Text>
						<Input
							color="black"
							placeholder="placeholder"
							placeholderTextColor={'#8898AA'}
							keyboardType='number-pad'
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
						>BF: </Text>
						<Text style={{
								...styles.text,
								...{
									fontSize: 28,
									textAlign: 'left'
								}
							}}>00%</Text>
					</Block>
				</Block>
				<Block style={styles.text}>
					<Button
						style={styles.input}
						round
						size="small"
						onPress={ this.final}
					>
						Calc
					</Button>
				</Block>
				<Block>
					<Text style={styles.text}>
						{this.state.final}
					</Text>
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
