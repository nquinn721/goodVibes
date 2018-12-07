import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Slider } from 'react-native-elements';
import Layout from 'goodVibes/constants/Layout';

/*
 *	<Slider text={String} />
 */

export default class BudSlider extends React.Component{
	state = {
		value: 0
	}


	render(){
		const { text, style = {}, disabled = false, value = 5} = this.props;
		const textLeft = (this.state.value * 10 -10);
		
		return (
			<View style={style}>
				<View>
					<Text>{text}</Text>
				</View>
				<Slider 
                	thumbStyle={styles.thumbStyle}
                	maximumTrackTintColor={Layout.bgColor}
					minimumTrackTintColor={Layout.thirdaryColor}
					minumValue={0}
					maximumValue={10}
					value={value}
                	onValueChange={(value) => this.setState({value})}
                	disabled={disabled}
              	/>
			</View>
			
		)
	}
}


const styles = StyleSheet.create({
	thumbStyle: {
		height: 12, 
		width: 30, 
		backgroundColor: Layout.primaryColor, 
		borderRadius: 6
	}
})