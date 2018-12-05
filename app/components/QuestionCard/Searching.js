import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

export default class Searching extends React.Component{
	state = {
		selectedDot: 1
	}

	componentDidMount(){
		this.interval = setInterval(() => {
			this.state.selectedDot === 3 ? 
				this.setState({selectedDot: 0}) :
				this.setState({selectedDot: this.state.selectedDot + 1});
		}, 200);
		setTimeout(() => {
			clearInterval(this.interval);
			this.props.onFinish();
		}, 5000)


	}

	render(){
		const { selectedDot } = this.state;

		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>Finding the best out of 10,000</Text>
					<Text style={styles.text}>strains and products</Text>
				</View>
				<View style={styles.dots}>
					<View style={[styles.dot, {backgroundColor: selectedDot === 1 ? Layout.primaryColor : Layout.ice}]}></View>
					<View style={[styles.dot, {backgroundColor: selectedDot === 2 ? Layout.primaryColor : Layout.ice}]}></View>
					<View style={[styles.dot, {backgroundColor: selectedDot === 3 ? Layout.primaryColor : Layout.ice}]}></View>
				</View>
			</View>
        )
	}

}



const styles = StyleSheet.create({
	container: {
		paddingVertical: 34,
		backgroundColor: 'white',
		...Layout.cardShadow
	},
	text: {
		textAlign: 'center'
	},
	dots: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 16
	},
	dot: {
		borderRadius: 100,
		width: 6,
		height: 6,
		margin: 2,
		backgroundColor: Layout.ice
	}
})

