import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

/*
 * <RoundedImage 
 *		source={Object || {uri: String}} 
 * 		onLoad={Function} 
 *		onLoadStart={Function} 
 *		onLoadEnd={Function} />
 */

export default class RoundedImage extends React.Component{
	state = {
		loaded: false
	}

	

	render(){
		let { source, onLoad, onLoadStart, onLoadEnd } = this.props,
			width = this.setWidthOfImage();

		return (
			<View style={[styles.image, {borderRadius: this.setBorderRadiusForImage()}]}>
				<View style={{height: !this.state.loaded ? 0 : 85}}>
				<Image 
					source={source} 
					style={{width: width, height: 85}}
					onLoad={() => {}}
				  	onLoadStart={() => {}}
				  	onLoadEnd={() => {
				  		if(!this.state.loaded){
					  		this.setState({loaded: true});
					  		onLoadEnd && onLoadEnd()
				  		}
				  	}}

					/>
				</View>
				{!this.state.loaded &&  <View style={{width: width, height: 85, backgroundColor: Layout.ice}}></View>}
			</View>
        )
	}

	setBorderRadiusForImage(){
		const { type } = this.props;
		return(
			(/product|dispensaries/).test(type) ? 10 : 100
		)
	}

	setWidthOfImage(){
		const { type } = this.props;
		return(
			(/dispensaries/).test(type) ? 120:  85
		)
	}

}



const styles = StyleSheet.create({
	image: {
		overflow: 'hidden',
		zIndex: 1
	}
})

