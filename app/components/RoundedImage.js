import React from 'react';
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

/*
 * <RoundedImage 
 *		source={Object || {uri: String}}
 *		type={String} // Determines size and rounding
 *		onPress={Function}
 *		text={String} // If you just want text instead of image
 * 		onLoad={Function} 
 *		onLoadStart={Function} 
 *		onLoadEnd={Function} />
 */

export default class RoundedImage extends React.Component{
	state = {
		loaded: false
	}

	

	render(){
		let { source, onLoad, onLoadStart, onLoadEnd, type, text, onPress = () => {} } = this.props,
			width = this.setWidthOfImage();

		return (
			<View>
				<View style={[styles.image, {borderRadius: this.setBorderRadiusForImage()}]}>
					<View style={{height: !this.state.loaded && !text ? 0 : 85}}>
					{ !text ? 
						<TouchableOpacity onPress={onPress}>
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
						</TouchableOpacity>
						:
						<TouchableOpacity style={styles.showMoreButton} onPress={onPress}>
							<Text style={{color: Layout.primaryColor, textAlign: 'center'}}>{text}</Text>
						</TouchableOpacity> 
					}
					</View>


					{/* LOADING PLACEHOLDER */}
					{!this.state.loaded && !text &&  <View style={{width: width, height: 85, backgroundColor: Layout.ice}}></View>}
				</View>


				{/** SHADOW */}
				{ !this.props.noShadow && <View style={[styles.block, {width: (type === 'product' ? width - 20 : width - 40)}]}></View>}
			</View>
        )
	}

	setBorderRadiusForImage(){
		const { type } = this.props;
		return(
			(/product|dispensaries/).test(type) ? 4 : 100
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
		overflow: 'hidden'
	},
	block: {
		width: 40,
		alignSelf: 'center',
		marginHorizontal: 10,
		borderRadius: 10,
		...Platform.select({
			ios: {
				marginTop: -1,
				backgroundColor: 'rgba(206,206,206,0.7)',
				height: 2,
			},
			android: {
				marginTop: -2,
				backgroundColor: 'rgba(206,206,206,0)',
				height: 1,
			},
		}),
		zIndex: -1,
		shadowOffset: {  width: 0,  height: 0,  },
		shadowColor: 'black',
		shadowOpacity: 1,
		elevation: 7,
		shadowRadius: 5
	},
	shadow: {
	},
	showMoreButton: {

		borderRadius: 100, 
		backgroundColor: Layout.bgColor, 
		width: 85, 
		height: 85, 
		alignItems: 'center', 
		justifyContent: 'center', 
		padding: 10, 
		marginHorizontal: 18
	}
})

