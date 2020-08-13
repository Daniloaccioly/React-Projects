import React from 'react';
import {  DrawerNavigatorItems } from 'react-navigation-drawer';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Block, theme } from 'galio-framework';
import * as S from '../styles';
const { width } = Dimensions.get('screen');

const Drawer = props => (
	<S.MainView
		forceInset={{ top: 'always', horizontal: 'never' }}
	>
		<Block style={styles.header}>
                  <S.HeaderText>Menu</S.HeaderText>
		</Block>
		<Block flex>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ flex: 1 }}
			>
				< DrawerNavigatorItems {...props} />
			</ScrollView>
		</Block>
	</S.MainView>
);

const Menu = {
	contentComponent: props => <Drawer {...props} />,
	drawerWidth: width * 0.75,
};

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 28,
		paddingBottom: theme.SIZES.BASE,
		paddingTop: theme.SIZES.BASE * 3,
		justifyContent: 'center'
	}
});

export default Menu;