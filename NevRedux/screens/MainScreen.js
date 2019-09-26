import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navegador from '../navigation/navigation';
import ColorSelector from '../components/ColorSelector';

const MainScreen = props =>{

	return (
		//Root View
			<View
				style={{
					backgroundColor: ColorSelector.PrimaryColor,
					paddingTop: 30,
					flex: 1
				}}
			>
				<View style={styles.header}>
					<Text style={styles.title}>Header</Text>
				</View>
				<View style={styles.body}>
					<Navegador />
				</View>
			</View>
	);
}

const styles = StyleSheet.create({
	body: {
		flex: 95,
		borderColor: ColorSelector.SecondaryColor,
		borderWidth: 3,
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25
	},

	header: {
		flex: 8,
		flexDirection: 'row',
		backgroundColor: ColorSelector.PrimaryColor,
		alignItems: 'center'
	},

	title: {
		flex: 1,
		fontSize: 46,
		color: ColorSelector.SecondaryColor,
		textAlign: 'center'
	}
});

export default MainScreen;
