import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { LightTheme } from '../constants/index';
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
					backgroundColor: LightTheme.COLORS.BACKGROUND,
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
					backgroundColor: LightTheme.COLORS.PRIMARY,
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
			<View style={{ flexDirection: 'row', }}>
                 		<Text  style={{
					...styles.title,
					...{
						textAlign: 'left',
						fontFamily: LightTheme.FONTS.PRIMARY,
						fontSize: 32,
						color: selectedTraining.color,
					}
				}}>
					{selectedTraining.title} 
				</Text>
				<TouchableOpacity style={{ flex: 0.5, backgroundColor: 'red', borderRadius: 25,}}>
					<Text style={{
						...styles.title,
						...{
							color: LightTheme.COLORS.BACKGROUND,
							fontFamily: LightTheme.FONTS.PRIMARY,
							fontSize: 28,
							}
						}}>
						Start </Text>
				</TouchableOpacity>
			</View>
			<Text style={{
				...styles.title,
				...{
					textAlign:'left',
					borderBottomWidth: 5,
					borderColor: selectedTraining.color,
				}
			}}>
				 Tabatas:  1</Text>
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
			<View style={{ flex: 10, backgroundColor: LightTheme.COLORS.BACKGROUND, }}>
				<TouchableOpacity
					onPress={() => setOpen(prev => !prev)}
					style={{ }}>
					<Text
						style={{ 
							height: 50, 
							fontSize: 22,
							textAlign: 'center',
							backgroundColor:LightTheme.COLORS.BACKGROUND, }}>
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
		backgroundColor: LightTheme.COLORS.BACKGROUND,
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	title: {
		flex: 1,
		fontSize: 22,
		fontFamily: LightTheme.FONTS.SECONDARY,
		color: 'white',
		textAlign: 'center',
		borderColor:  'white',
		color:  'black',
	}
});

export default HiitScreen;