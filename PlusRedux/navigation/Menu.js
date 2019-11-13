import React from 'react';
import {  DrawerNavigatorItems } from 'react-navigation-drawer';
import { ScrollView, StyleSheet, Dimensions, Image } from 'react-native';
import { Block, theme, Text } from 'galio-framework';


const { width } = Dimensions.get('screen');

const Drawer = props => (
	<Block
		style={styles.container}
		forceInset={{ top: 'always', horizontal: 'never' }}
	>
		<Block flex={0.05} style={styles.header}>
                  <Text>Menu</Text>
		</Block>
		<Block flex>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ flex: 1 }}
			>
				< DrawerNavigatorItems {...props} />
			</ScrollView>
		</Block>
	</Block>
);

const Menu = {
	contentComponent: props => <Drawer {...props} />,
	drawerBackgroundColor: 'white',
	drawerWidth: width * 0.8,
	contentOptions: {
		activeTintColor: 'white',
		inactiveTintColor: '#000',
		activeBackgroundColor: 'transparent',
		itemStyle: {
			width: width * 0.75,
			backgroundColor: 'transparent'
		},
		labelStyle: {
			fontSize: 18,
			marginLeft: 12,
			fontWeight: 'normal'
		},
		itemsContainerStyle: {
			paddingVertical: 16,
			paddingHorizonal: 12,
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			overflow: 'hidden'
		}
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		paddingHorizontal: 28,
		paddingBottom: theme.SIZES.BASE,
		paddingTop: theme.SIZES.BASE * 3,
		justifyContent: 'center'
	}
});

export default Menu;
