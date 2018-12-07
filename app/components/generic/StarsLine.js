import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import { Icon } from 'react-native-elements';

/*
 *	<StarsLine stars={Number} num={Number}/>
 */

export default class StarsLine extends React.Component{

	render(){
		const { stars, num } = this.props;
		let totalStars = [];

		for(let i = 0; i < stars; i++)totalStars.push(1);
		
		return (
			<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
				<View style={{justifyContent: 'flex-end', flexDirection: 'row', width: '26%'}}>
					{totalStars.map((v, i) => <Icon key={i} name='star' color={Layout.primaryColor} size={18}/>)}
				</View>
				<View style={{width: '60%'}}>
					<View style={[styles.bar]}>
						<View style={[styles.innerBar, {width: num * 10 + '%'}]}></View>
					</View>
				</View>
				<View>
					<Text style={{color: Layout.secondaryColor}}>{num}</Text>
				</View>
			</View>
			
		)
	}
}


const styles = StyleSheet.create({
	bar: {
		backgroundColor: Layout.ice,
		height: 8,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
	},
	innerBar: {
		height: 8,
		backgroundColor: Layout.thirdaryColor,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
	}
})