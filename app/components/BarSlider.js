import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

export default class RoundedImage extends React.Component{
	render(){
		let { left, right, value, loaded } = this.props;

		let view = (
			<View style={styles.container}>
				<Text>{left}</Text>
				<View style={styles.bar}>
					<View style={styles.slider}></View>
					<View style={styles.centerLine}></View>
				</View>
				<Text>{right}</Text>
			</View>
        )

        if(!loaded){
        	view = (
        		<View style={styles.container}>
        			<View style={{height: 9, width: 32, backgroundColor: Layout.ice}}></View>
        			<View style={[styles.bar, {marginTop: 2}]}></View>
        			<View style={{height: 9, width: 32, backgroundColor: Layout.ice}}></View>
        		</View>
        	)
        }

        return view;
	}


}



const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bar: {
		flexGrow: 4,
		backgroundColor: Layout.ice,
		height: 5,
		borderRadius: 2,
		marginTop: 8,
		marginHorizontal: 10
	},
	slider: {
		width: 27,
		height: 9,
		borderRadius: 100,
		backgroundColor: Layout.primaryColor,
		zIndex: 2,
		position: 'absolute',
		marginTop: -2,
		left: 20
	},
	centerLine: {
		position: 'absolute',
		height: 5,
		width: 1,
		backgroundColor: Layout.lightText,
		left: '50%'
	}
})

