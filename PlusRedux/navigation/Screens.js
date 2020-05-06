import React from 'react';
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// screens
import FirstScreen from '../screens/FirstScreen';
import HiitScreen from '../screens/HiitScreen';
import Weight from '../screens/Weight';
import BfScreen from '../screens/BfScreen';

// drawer
import Menu from './Menu';
import DrawerItem from '../components/DrawerItem';

// header for screens
import Header from '../components/Header';

const transitionConfig = (transitionProps, prevTransitionProps) => ({
	transitionSpec: {
		duration: 500,
		easing: Easing.out(Easing.poly(4)),
		timing: Animated.timing
	},
	screenInterpolator: sceneProps => {
		const { layout, position, scene } = sceneProps;
		const thisSceneIndex = scene.index;
		const width = layout.initWidth;

		const scale = position.interpolate({
			inputRange: [
				thisSceneIndex - 1,
				thisSceneIndex,
				thisSceneIndex + 1
			],
			outputRange: [4, 1, 1]
		});
		const opacity = position.interpolate({
			inputRange: [
				thisSceneIndex - 1,
				thisSceneIndex,
				thisSceneIndex + 1
			],
			outputRange: [0, 1, 1]
		});
		const translateX = position.interpolate({
			inputRange: [thisSceneIndex - 1, thisSceneIndex],
			outputRange: [width, 0]
		});

		const scaleWithOpacity = { opacity };
		const screenName = 'Search';

		if (
			screenName === transitionProps.scene.route.routeName ||
			(prevTransitionProps &&
				screenName ===
					prevTransitionProps.scene.route.routeName)
		) {
			return scaleWithOpacity;
		}
		return { transform: [{ translateX }] };
	}
});

const WeightStack = createStackNavigator(
	{
		Weight: {
			screen: Weight,
			navigationOptions: ({ navigation }) => ({
				header: (
					<Header
						search
						options
						title="Weight"
						navigation={navigation}
					/>
				)
			})
		},
	},
	{
		cardStyle: {
			backgroundColor: '#F8F9FE'
		},
		transitionConfig
	}
);

const BfStack = createStackNavigator(
	{
		BfScreen: {
			screen: BfScreen,
			navigationOptions: ({ navigation }) => ({
				header: (
					<Header
						search
						options
						title="Body Fat Percentage"
						navigation={navigation}
					/>
				)
			})
		},
	},
	{
		cardStyle: {
			backgroundColor: '#F8F9FE'
		},
		transitionConfig
	}
);


const FirstStack = createStackNavigator(
	{
		FirstScreen: {
			screen: FirstScreen,
			navigationOptions: ({ navigation }) => ({
				header: (
					<Header
						title="HIIT Exercises"
						navigation={navigation}
					/>
				)
			})
		},
		HiitScreen: {
			screen: HiitScreen,
			navigationOptions: ({ navigation }) => ({})
		},
	},
	{
		cardStyle: {
			backgroundColor: '#F8F9FE',
			opacity: 1,
		},
		transitionConfig
	}
);

const AppStack = createDrawerNavigator(
	{
		FirstScreen: {
			screen: FirstStack,
			navigationOptions: navOpt => ({
				drawerLabel: ({ focused }) => (
					<DrawerItem focused={focused} title="FirstScreen" />
				)
			})
		},
		Weight: {
			screen: WeightStack,
			navigationOptions: navOpt => ({
				drawerLabel: ({ focused }) => (
					<DrawerItem focused={focused} title="Weight" />
				)
			})
		},
		BfScreen: {
			screen: BfStack,
			navigationOptions: navOpt => ({
				drawerLabel: ({ focused }) => (
					<DrawerItem focused={focused} title="BfScreen" />
				)
			})
		},
	},
	Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
