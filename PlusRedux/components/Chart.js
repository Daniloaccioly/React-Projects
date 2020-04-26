import React, { useState, useEffect } from 'react';
import { Circle } from 'react-native-svg';
import { AreaChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import { argonTheme } from '../constants/index';
import { Text, View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import moment from 'moment';
import { useSelector } from 'react-redux';

const { height } = Dimensions.get('window');

const WeightChart = (props) => {

	const [data, setdata] = useState([]);
	const [tooltipX, settooltipX] = useState(null);
	const [tooltipY, settooltipY] = useState(null);
	const [elapsed, setelapsed] = useState('');
	const [tooltipIndex, settooltipIndex] = useState(null);

	const contentInset = { left: 10, right: 10, top: 10, bottom: 10};
	const DATA = [
		{
			id: 1,
			date: '2019-04-07T22:37:01Z',
			score: 104,
		},
		{
			id: 2,
			date: '2019-01-06T06:03:09Z',
			score: 105,
		},
		{
			id: 3,
			date: '2019-02-08T14:10:00Z',
			score: 103,
		},
		{
			id: 4,
			date: '2019-01-03T02:07:38Z',
			score: 105,
		},
		{
			id: 5,
			date: '2019-01-15T14:48:59Z',
			score: 95,
		},
		{
			id: 6,
			date: '2019-02-22T04:10:45Z',
			score: 96,
		},
		{
			id: 7,
			date: '2019-01-23T06:23:01Z',
			score: 95,
		},
		{
			id: 8,
			date: '2019-01-01T20:36:24Z',
			score: 107,
		},
		{
			id: 9,
			date: '2019-01-05T02:31:40Z',
			score: 104,
		},
		{
			id: 10,
			date: '2019-01-30T16:20:19Z',
			score: 91,
		},
	];

	const Max = Math.max.apply(Math, DATA.map(item => { return item.score; }));
	const Min = Math.min.apply(Math, DATA.map(item => { return item.score; }));
	reorderData = () => {
		const reorderedData = DATA.sort((a, b) => {		
			// Turn your strings into dates, and then subtract them
			// to get a value that is either negative, positive, or zero.
			return new Date(a.date) - new Date(b.date);
		});	
		setdata(reorderedData);
		
		const start = new Date(reorderedData[0].date)
		const end = new Date(reorderedData[reorderedData.length - 1].date)

		setelapsed((end.getTime() - start.getTime())/86400000) // elapsed time in days
		elapsedMonths = (
			(((end.getTime() - start.getTime())/86400000)/30) - 
			(((end.getTime() - start.getTime())/86400000)/30) % 1) + 1
		
			console.log(elapsedMonths, elapsed)
	};

	useEffect(() => {
		reorderData();
	}, []);

	const ChartPoints = ({ x, y, color }) =>
		data.map((item, index) => (
			<Circle
				key={index}
				cx={x(moment(item.date))}
				cy={y(item.score)}
				r={6}
				stroke={color}
				fill={
					tooltipIndex == index
						? argonTheme.COLORS.PRIMARY
						: '#DAFBF7'
				}
				onPress={() => {
					settooltipX(moment(item.date)),
						settooltipY(item.score),
						settooltipIndex(index);
				}}/>
		));

	return (
		<View >
			{data.length !== 0 ? (
			<View>
				<View style={{ flexDirection: 'row'}}>
					<View style={{ 
						flexDirection: 'column', 
						borderColor: 'black',
						borderRightWidth: 3,
						backgroundColor: argonTheme.COLORS.BACKGROUND  }} >
						<Text style={{ height: 32 }}></Text>
						<YAxis
							style={{ flex: 1}}
							data={[Min, Max]}
							contentInset={contentInset}
							svg={{fill: argonTheme.COLORS.PRIMARY, fontSize: 20 }}
							numberOfTicks={(Max-Min)/2}
							formatLabel={(value) => `${value}kg`}/>
					</View>
					<ScrollView 
						ref={ref => {ThisSV = ref}}
						style={{
							 flex: 1,
							 borderColor: 'black',
							borderBottomWidth: 3,
							borderRightWidth: 3}}
							onContentSizeChange={() => ThisSV.scrollToEnd({animated: false})}
							horizontal={true}>
						<View style={{width: elapsed*3.6,}}>
							<XAxis
								style={{
								backgroundColor: argonTheme.COLORS.PRIMARY, 
								paddingTop: 10,}}
							data={data}
							xAccessor={({ item }) => moment(item.date) }
							contentInset={contentInset}
							svg={{fill: 'white', fontSize: 16}}
							numberOfTicks={elapsedMonths}
								formatLabel={(value) => `${moment(value).format('DD MMM')}`}/>
							<AreaChart
								style={styles.container}
								data={data}
								yAccessor={({ item }) => item.score}
								xAccessor={({ item }) => moment(item.date)}
								contentInset={contentInset}
								svg={{
									fill: argonTheme.COLORS.PRIMARY,
									fillOpacity: 0.75}}
								numberOfTicks={10}>
								<Grid
									svg={{stroke: argonTheme.COLORS.PRIMARY,}}
									belowChart={false}
									direction={Grid.Direction.BOTH}/>
								<ChartPoints color="black" />
							</AreaChart>
						</View>
					</ScrollView>					
				</View>
				<View style={{ flexDirection: 'row' }}>
					{tooltipX == null ? (<Text  style={styles.tooltext}> </Text>
					) : (
					<Text style={styles.tooltext}>{moment(tooltipX).format('DD MMM')},{' '}</Text>)}
					{tooltipY == null ? (<Text  style={styles.tooltext}> </Text>
					) : (
					<Text style={styles.tooltext}>{tooltipY} kg</Text>)}
					{tooltipX == null ? (<Text  style={styles.tooltext}> </Text>
					) : (
					<Text style={{
					...styles.tooltext,
						...{flex: 1,textAlign: 'right',}
					}}>{moment(tooltipX).format('YYYY')}{' '}</Text>)}
				</View>
			</View>
			) : (
				<View
					style={{
						height: '50%',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 18,
							color: argonTheme.COLORS.SECONDARY,
						}}
					>
						No data to show yet.
					</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding:1,
		height: height / 2,
		flex: 6.5,
	},
	heading: {
		fontSize: 25,
		textAlign: 'center',
	},
	tooltext:{
		paddingLeft: 12,
		fontFamily: argonTheme.FONTS.PRIMARY,
		fontSize: 18,
		color: 'black',
	}
});

export default WeightChart;