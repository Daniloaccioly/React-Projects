import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Text, Input } from 'galio-framework';

const { width } = Dimensions.get('screen');

class BfScreen extends React.Component {
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
		fontSize: 16,
		alignContent: 'flex-end',
		textAlign: 'right',
		alignSelf: 'center',
		padding: 1
	}
});

export default BfScreen;
