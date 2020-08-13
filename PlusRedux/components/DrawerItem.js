import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from 'galio-framework';
import { withTheme } from 'styled-components';
import Icon from './Icon';
import LightTheme from '../constants/Light';

const DrawerItem = props =>{

	const { focused, title } = props;

	return (
		<Block flex row style={styles.defaultStyle}>
			<Block row center flex={0.9}>
			<Icon
				name= 'send'
				family='MaterialCommunityIcons'
			      size={focused ? 24 : 18}
			      color={props.theme.COLORS.ICON}
			/>
				<Text
					size={focused ? 24 : 18}
					bold={focused ? true : false}
					color={
						focused ? props.theme.COLORS.ICON : props.theme.COLORS.TEXT
					}
				>
					{title == 'BfScreen' ? '  Body Fat Percentage' : 
						(title == 'FirstScreen' ? '  HIIT Exercises': 
							(title == 'Weight' ? '  Weight': null)
						)
					}
				</Text>
			</Block>
		</Block>
	);
};

const styles = StyleSheet.create({
	defaultStyle: {
		paddingVertical: 15,
		paddingHorizontal: 14,
	},
	activeStyle: {
		backgroundColor: LightTheme.COLORS.ACTIVE,
		borderRadius: 4
	},
});

export default withTheme(DrawerItem);