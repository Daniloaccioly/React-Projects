import React, {useState} from 'react';
import { withNavigation } from 'react-navigation';
import {
	TouchableOpacity,
	StyleSheet,
	Platform,
	Dimensions
} from 'react-native';
import { Button, Block, NavBar, Text, theme } from 'galio-framework';
import Icon from './Icon';
import argonTheme from '../constants/Theme';
import SettingsButton from './SettingsButton';

const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);
const { height, width } = Dimensions.get('window');

class Header extends React.Component {
	handleLeftPress = () => {
		const { back, navigation } = this.props;
		return back ? navigation.goBack() : navigation.openDrawer();
	};
	renderRight = () => {
		const { white, title, navigation } = this.props;
		const { routeName } = navigation.state;

		if (title === 'Title') {
			return [
				<SettingsButton
					key="basket-title"
					navigation={navigation}
					isWhite={white}
				/>
			];
		}

		switch (routeName) {
			case 'Weight':
				return [
					<SettingsButton
						key="basket-weight"
						navigation={navigation}
						isWhite={white}
					/>
				];
			case 'BfScreen':
				return [
					<SettingsButton
						key="basket-bfscreen"
						navigation={navigation}
						isWhite={white}
					/>
				];
			case 'FirstScreen':
				return [
					<SettingsButton
						key="basket-firstscreen"
						navigation={navigation}
						isWhite={white}
					/>
				];
				case 'HiitScreen':
					return [
						<SettingsButton
							key="basket-hiitscreen"
							navigation={navigation}
							isWhite={white}
						/>
					];
			default:
				break;
		}
	};
	renderOptions = () => {
		const { navigation, optionLeft, optionRight } = this.props;

		return (
			<Block row style={styles.options}>
				<Button
					shadowless
					style={[styles.tab, styles.divider]}
					onPress={() => navigation.navigate('FirstScreen')}
				>
					<Block row middle>
						<Icon
							size={20}
							name="dumbbell"
							family="MaterialCommunityIcons"
							style={{ paddingRight: 8 }}
							color={argonTheme.COLORS.ICON}
						/>
						<Text size={16} style={styles.tabTitle}>
							{optionLeft || 'FirstScreen'}
						</Text>
					</Block>
				</Button>
				<Button
					shadowless
					style={[styles.tab, styles.divider]}
					onPress={() => navigation.navigate('BfScreen')}
				>
					<Block row middle>
						<Icon
							size={20}
							name="human-male"
							family="MaterialCommunityIcons"
							style={{ paddingRight: 8 }}
							color={argonTheme.COLORS.ICON}
						/>
						<Text size={16} style={styles.tabTitle}>
							{optionLeft || 'BfScreen'}
						</Text>
					</Block>
				</Button>
				<Button
					shadowless
					style={styles.tab}
					onPress={() => navigation.navigate('Weight')}
				>
					<Block row middle>
						<Icon
							size={20}
							name="scale-bathroom"
							family="MaterialCommunityIcons"
							style={{ paddingRight: 8 }}
							color={argonTheme.COLORS.ICON}
						/>
						<Text size={16} style={styles.tabTitle}>
							{optionRight || 'Weight'}
						</Text>
					</Block>
				</Button>
			</Block>
		);
	};
	renderHeader = () => {
		const { search, options } = this.props;
		if (search || options) {
			return (
				<Block center>
					{options ? this.renderOptions() : null}
				</Block>
			);
		}
	};
	render() {
		const {
			back,
			title,
			white,
			transparent,
			bgColor,
			iconColor,
			titleColor,
			navigation,
			...props
		} = this.props;
		const { routeName } = navigation.state;
		const noShadow = [
			'BfScreen',
			'Weight',
			'FirstScreen',
			'HiitScreen',
		].includes(routeName);
		const headerStyles = [
			!noShadow ? styles.shadow : null,
			transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null
		];

		const navbarStyles = [
			styles.navbar,
			bgColor && { backgroundColor: bgColor }
		];

		return (
			<Block style={headerStyles}>
				<NavBar
					back={back}
					title={title}
					style={navbarStyles}
					transparent={transparent}
					right={this.renderRight()}
					rightStyle={{ alignItems: 'center' }}
					left={
						<Icon
							name={back ? 'nav-left' : 'menu-8'}
							family="ArgonExtra"
							size={14}
							onPress={this.handleLeftPress}
							color={
								iconColor ||
								argonTheme.COLORS.ICON
							}
						/>
					}
					leftStyle={{ paddingVertical: 12, flex: 0.2 }}
					titleStyle={[
						styles.title,
						{
							color:
								argonTheme.COLORS[
									white ? 'WHITE' : 'HEADER'
								]
						},
						titleColor && { color: titleColor }
					]}
					{...props}
				/>
				{this.renderHeader()}
			</Block>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		padding: 12,
		position: 'relative'
	},
	title: {
		width: '100%',
		fontSize: 16,
		fontWeight: 'bold'
	},
	navbar: {
		paddingVertical: 0,
		paddingBottom: theme.SIZES.BASE * 1.5,
		paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
		zIndex: 5
	},
	shadow: {
		backgroundColor: theme.COLORS.WHITE,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.2,
		elevation: 3
	},
	header: {
		backgroundColor: theme.COLORS.WHITE
	},
	divider: {
		borderRightWidth: 0.3,
		borderRightColor: theme.COLORS.ICON
	},
	search: {
		height: 48,
		width: width - 32,
		marginHorizontal: 16,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: argonTheme.COLORS.BORDER
	},
	options: {
		marginBottom: 24,
		marginTop: 10,
		elevation: 4
	},
	tab: {
		backgroundColor: theme.COLORS.TRANSPARENT,
		width: width * 0.35,
		borderRadius: 0,
		borderWidth: 0,
		height: 24,
		elevation: 0
	},
	tabTitle: {
		lineHeight: 19,
		fontWeight: '400',
		color: argonTheme.COLORS.HEADER
	}
});

export default withNavigation(Header);