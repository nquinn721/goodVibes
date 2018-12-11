import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Layout from 'goodVibes/constants/Layout';
import ReviewButton from 'goodVibes/components/ReviewButton';


export default class ScrollViewAction extends React.Component{
	y = 0;
	state = {
		scrollDirection: 'up'
	}

	scroll(e){
		const { y } = e.nativeEvent.contentOffset;
		const scrollDirection = y > this.y ? 'down' : 'up';

		if(scrollDirection !== this.state.scrollDirection && y > 0)
		  this.setState({scrollDirection});

		this.y = y;
	}

	render(){

        return (
        	<View style={Layout.container}>
				<ScrollView 
		            style={[Layout.container, {backgroundColor: Layout.bgColor}]} 
		            scrollEventThrottle={300}
		            showsVerticalScrollIndicator={false} 
		            onScroll={this.scroll.bind(this)}>
		            {this.props.children}
				 </ScrollView>
		        <ReviewButton show={this.state.scrollDirection !== 'up'}/>
			</View>

        )
	}


}



const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 20,
		paddingTop: 14,
		backgroundColor: Layout.primaryColor,
		height: 80
	},
	titleText: {
		color: 'white',
		fontSize: 17,
		fontFamily: 'sfpromedium'
	},
	sticky: {
		position: 'absolute', 
		top: 0, 
		left: 0, 
		right: 0, 
		zIndex: 1
	}
	
})

