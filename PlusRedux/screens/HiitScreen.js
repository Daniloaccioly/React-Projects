import React, { useState } from 'react';
import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { withTheme } from 'styled-components';
import { LightTheme } from '../constants/index';
import { MODEL } from '../data/dummy-data';
import Timer from '../components/Timer';
import Icon from '../components/Icon';
import * as S from '../styles';
const { height } = Dimensions.get('screen');

const HiitScreen = props => {
	const [isVisible, setisVisible] = useState(false);
	const trainingID = props.navigation.getParam('Id');
	const selectedTraining = MODEL.find(item => item.id === trainingID )
	const [open, setOpen] = useState(false);
	const listHeight = open ? ((height/2) -60): 0;

	const quitTimer = props => {
		//reset data... eventually
		setisVisible(false);
		};

	const AddToRoutine = props => {
		console.log('Add Button pressed, HiitScreen')
	}

	const renderEX = itemData => {
		return (
			<View 
				style={{ 
					margin: 5,
					alignItems: 'center',
			}}>
			{itemData.item !== 'AddButtom' ? (
			<S.UpdateTitle	
				style={{ 
					height: 50,
					fontSize: 22, 
					}}>		
			{itemData.item}</S.UpdateTitle>
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
						style={{ flex: 1, fontSize: 28, textAlign: 'center'}}>
						+
					</Text>
			 </TouchableOpacity>
			)}
			</View>
		)
	}

	return (
		<S.MainView style = {{paddingVertical: 10, paddingHorizontal: 10, }}>
			<Timer
				number={selectedTraining}
				visible={isVisible}
				onChange={quitTimer}
			/>
			<View style={{ flexDirection: 'row', }}>
                 		<S.TitleRight>
					{selectedTraining.title} 
				</S.TitleRight>
				<S.UpdateButton>
					<S.UpdateTitle 
						style={{fontSize: 28,}}
						onPress={() => setisVisible(true)}>
						Start 
					</S.UpdateTitle>
				</S.UpdateButton>
			</View>
			<S.TitleRight> Tabatas:  1 </S.TitleRight>
			<View style={{ flex: 3, flexDirection: 'row', }}>
				<View style={{ flex: 1 }}>
					<S.UpdateTitle style={{ fontSize: 22 }}> Exercise </S.UpdateTitle>
					<S.UpdateTitle style={{ fontSize: 22 }}> Interval </S.UpdateTitle>
					<S.UpdateTitle style={{ fontSize: 22 }}> Rest </S.UpdateTitle>
				</View>	
				<View style={{ flex: 1 }}>
					<S.UpdateTitle style={{ fontSize: 22 }}> {selectedTraining.exTime} </S.UpdateTitle>
					<S.UpdateTitle style={{ fontSize: 22 }}> {selectedTraining.intTime} </S.UpdateTitle>
					<S.UpdateTitle style={{ fontSize: 22 }}> {selectedTraining.Rest} </S.UpdateTitle>
				</View>
			</View>
			<S.MainAccordion>
				<TouchableOpacity
					onPress={() => setOpen(prev => !prev)}
					style={{ height: 35, flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 2, borderColor: 'aqua'}}>
					<S.UpdateTitle
						style={{ 
							flex: 1,
							fontSize: 22,
							//textAlign: 'center',
							}}>
						Open Accordion
					</S.UpdateTitle>
					<Icon
                                          size={22}
							name= {open ? 'chevron-up' : 'chevron-down'}
                                          family="MaterialCommunityIcons"
                                          color= 'red'
                                    />
			 </TouchableOpacity>
				 <View style={{height: listHeight }}>
					<FlatList
						keyExtractor={(item, index) => item}
							data={selectedTraining.ListExercises}
							renderItem={renderEX}
						numColumns={1}/>
				</View>
			</S.MainAccordion>
		</S.MainView>
	);
};

HiitScreen.navigationOptions = navigationData => {
	const title = navigationData.navigation.getParam('title');

	const selected = MODEL.find(item => item.title === title);
    
	return {
		headerStyle: {	
			backgroundColor: navigationData.navigation.getParam('bgcolor')
		},
		headerTintColor: navigationData.navigation.getParam('textcolor'),
	 	headerTitle: selected.title
	};
};

export default withTheme(HiitScreen);