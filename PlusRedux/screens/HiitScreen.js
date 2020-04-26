import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { argonTheme } from '../constants/index';
import { MODEL } from '../data/dummy-data';
const { height } = Dimensions.get('screen');

const HiitScreen = props => {
	const trainingID = props.navigation.getParam('Id');
	const selectedTraining = MODEL.find(item => item.id === trainingID )
	const [open, setOpen] = useState(false);

	const listHeight = open ? ((height/2) -60): 0;

	const AddToRoutine = props => {
		console.log('AddTo Routine')
	}

	const renderEX = itemData => {
		return (
			<View style={{ 
				margin: 5,
				alignItems: 'center',
			 }}>
			{itemData.item !== 'AddButtom' ? (
			<Text	
				style={{ 
					backgroundColor: argonTheme.COLORS.BACKGROUND,
					flex: 1, 
					fontSize: 22, 
					textAlign: 'center', 
					height: 50, }}>		
			{itemData.item}</Text>
			) : (
			<TouchableOpacity
				onPress={AddToRoutine}
				style={{
					height: 50, 
					width: 50,
					borderRadius: 90,
					borderColor: 'black',
					borderWidth: 4,
					backgroundColor: argonTheme.COLORS.PRIMARY,
					}}>
					<Text
						style={{ 
							flex: 1, 
							fontSize: 28,
							textAlign: 'center',
							 }}>
						+
					</Text>
			 </TouchableOpacity>
			)}
			</View>
		)
	}

	return (
		<View
			style={styles.container}
		>
                  <Text  style={{
				...styles.title,
				...{
					textAlign: 'left',
					fontFamily: argonTheme.FONTS.PRIMARY,
					fontSize: 32,
					color: selectedTraining.color,
				}
			}}>
				{selectedTraining.title} 
			</Text>
			<Text style={{
				...styles.title,
				...{
					textAlign:'right',
					borderBottomWidth: 5,
					borderColor: selectedTraining.color,
				}
			}}>
				 Tabatas:  </Text>
			<View style={{ flex: 3, flexDirection: 'row', }}>
				<View style={{ flex: 1  }}>
					<Text style={styles.title}> Exercise </Text>
					<Text style={styles.title}>Interval </Text>
					<Text style={styles.title}> Rest </Text>
				</View>	
				<View style={{ flex: 1 }}>
					<Text style={styles.title}> {selectedTraining.exTime} </Text>
					<Text style={styles.title}> {selectedTraining.intTime} </Text>
					<Text style={styles.title}> {selectedTraining.Rest} </Text>
				</View>
			</View>
			<View style={{ flex: 10, backgroundColor: argonTheme.COLORS.BACKGROUND, }}>
				<TouchableOpacity
					onPress={() => setOpen(prev => !prev)}
					style={{ }}>
					<Text
						style={{ 
							height: 50, 
							fontSize: 22,
							textAlign: 'center',
							backgroundColor:argonTheme.COLORS.BACKGROUND, }}>
						Open Accordion
					</Text>
			 </TouchableOpacity>
			 <View style={{height: listHeight }}>
						<FlatList
							keyExtractor={(item, index) => item}
							data={selectedTraining.ListExercises}
							renderItem={renderEX}
							numColumns={1}/>
					</View>
			</View>	
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRightWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: argonTheme.COLORS.BACKGROUND,
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	title: {
		flex: 1,
		fontSize: 22,
		fontFamily: argonTheme.FONTS.SECONDARY,
		color: 'white',
		textAlign: 'center',
		borderColor:  'white',
		color:  'black',
	}
});

export default HiitScreen;