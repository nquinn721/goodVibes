import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import SvgUri from 'react-native-svg-uri';

/*
 * <LikeButton
 *	onPress={Function}
 *  liked={Boolean}
 *  totalLikes={Number}
 *  showLikes={Boolean}
 */

export default class Review extends React.Component{
	render(){
		const { onPress, liked, totalLikes=1, showLikes } = this.props;
		
		return (
			<View>
				<TouchableOpacity style={[styles.defaultLike, (liked && styles.liked)]} onPress={onPress}>
					<SvgUri source={require('goodVibes/assets/images/Helpful.svg')} fill={liked ? "white" : "#e0e0e0"} width="17" height="17"/>
					{(liked || showLikes) && <Text style={{color: 'white', fontSize: 16}}> {totalLikes}</Text>}
				</TouchableOpacity>
			</View>
    	)
	}

}



const styles = StyleSheet.create({
	defaultLike: {
		width: 60, 
		height: 30, 
		borderRadius: 20, 
		borderColor: '#e0e0e0', 
		borderWidth: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
		flexDirection: 'row'
	},
	liked: {
		backgroundColor: Layout.primaryColor,
		borderColor: 'white'
	}
});

