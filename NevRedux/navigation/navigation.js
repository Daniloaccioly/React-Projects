import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from '../screens/FirstScreen'
import ListScreen from '../screens/ListScreen';
import BfScreen from '../screens/BfScreen';
import WeightScreen from '../screens/WeightScreen';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import ColorSelector from '../components/ColorSelector';

const NavScreen1 = createStackNavigator(
	{
		First: FirstScreen, //First= property name, FirstScreen=React component
		ListHandler: ListScreen
	},
	//Aleluia
	(NavigationOptions = {
		headerMode: 'none'
	})
);

let Pc = ColorSelector.PrimaryColor;
const windowWidth = Dimensions.get('window').width;
const tabWidth = (windowWidth + 70) / 6;

// 2 objetos, primeiro as rotas e o segundo config(navigationOptions, tabBarOptions etc)
const Navegador = createMaterialTopTabNavigator(
	//rotas
	{
		Screen1: {
			screen: NavScreen1,
			navigationOptions: {
				tabBarIcon: () => {
					return (
						<Ionicons
							name="md-time"
							size={32}
							color={Pc}
							style={{
								width: tabWidth,
								height: 40,
								borderTopWidth: 0,
								borderRightWidth: 3,
								borderColor: 'black'
							}}
						/>
					);
				}
			}
		},

		BfCalc: {
			screen: BfScreen,
			navigationOptions: {
				tabBarIcon: () => {
					return (
						<Ionicons
							name="ios-person"
							size={32}
							color={Pc}
							style={{
								width: tabWidth,
								height: 40,
								borderTopWidth: 0,
								borderRightWidth: 3,
								borderColor: 'black'
							}}
						/>
					);
				}
			}
		},

		Weight: {
			screen: WeightScreen,
			navigationOptions: {
				tabBarIcon: () => {
					return (
						<MaterialCommunityIcons
							name="scale-bathroom"
							size={32}
							color={Pc}
							style={{
								width: 40
							}}
						/>
					);
				}
			}
		}
	},
	//configuração
	{
		initialRouteName: 'Screen1',
		lazy: false,
		tabBarOptions: {
			showLabel: false,
			showIcon: true,
			activeTintColor: ColorSelector.SecondaryColor,
			style: {
				backgroundColor: ColorSelector.SecondaryColor,
				borderTopRightRadius: 20,
				borderTopLeftRadius: 20,
				borderColor: ColorSelector.SecondaryColor,
				borderBottomWidth: 1,
				paddingBottom: 11
			}
		}
	}
);

export default createAppContainer(Navegador, tabWidth);
