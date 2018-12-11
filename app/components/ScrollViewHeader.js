import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Layout from 'goodVibes/constants/Layout';
import ReviewButton from 'goodVibes/components/ReviewButton';
import Header from 'goodVibes/components/Header';


export default class ScrollViewAction extends React.Component{
	y = 0;
	state = {
		scrollDirection: 'up'
	}

	scroll(e){
		const { y } = e.nativeEvent.contentOffset;

		if(y > this.distance && this.state.showHeader !== true)
		  this.setState({showHeader: true});
		else if(y < this.distance && this.state.showHeader !== false){
			this.setState({showHeader: false})
		}

		this.y = y;
	}

	render(){
		const { type, product, navigation } = this.props;

		this.distance = (type !== 'product' ? 80 : 250);

        return (
        	<View style={Layout.container}>
        	{this.state.showHeader && <Header short={true} navigation={navigation} showTitle={true} title={product.name} sticky={true}/> }
				<ScrollView 
		            style={Layout.container} 
		            scrollEventThrottle={300}
		            showsVerticalScrollIndicator={false} 
		            onScroll={this.scroll.bind(this)}>
		            {this.props.children}
				 </ScrollView>
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

