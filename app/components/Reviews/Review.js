import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import SvgUri from 'react-native-svg-uri';

export default class Review extends React.Component{
	state = {
	}
	render(){
		const { full } = this.props;
		let review = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor dolor. Ut lacinia sed lectus porttitor sagittis. Sed scelerisque tristique justo, et vestibulum lectus luctus quis. Praesent iaculis odio vitae ex sollicitudin, ut mattis risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor dolor. Ut lacinia sed lectus porttitor sagittis. Sed scelerisque tristique justo, et vestibulum lectus luctus quis. Praesent iaculis odio vitae ex sollicitudin, ut mattis risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor dolor. Ut lacinia sed lectus porttitor sagittis. Sed scelerisque tristique justo, et vestibulum lectus luctus quis. Praesent iaculis odio vitae ex sollicitudin, ut mattis risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor dolor. Ut lacinia sed lectus porttitor sagittis. Sed scelerisque tristique justo, et vestibulum lectus luctus quis. Praesent iaculis odio vitae ex sollicitudin, ut mattis risus ';
		let reviewBy = 'Nate Q';
		let age = '1 month ago';
		let num = 3.4;
		let likes = 1;

		return (
			<View>
				<Text style={{fontSize: 14, marginBottom: 8}}>
					<Text>{full ? review : review.slice(0, 300)}</Text>
					<Text style={{color: Layout.primaryColor}}>{(!full && '... Read More')}</Text>
				</Text>
				<View style={{flexDirection: 'row'}}>
					<StarRating rating={num} noText={true} loaded={true}/>
				</View>


				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<View style={{flexDirection: 'row'}}>
						<Image source={require('goodVibes/assets/images/User_pic.png')} style={{height: 30, width: 30, marginRight: 5}}/>
						<View>
							<Text style={{fontFamily: 'sfprobold', color: Layout.lightText}}>{reviewBy}</Text>
							<Text style={{color: Layout.thirdaryColor, fontSize: 10}}>{age}</Text>
						</View>
					</View>
					<TouchableOpacity style={[styles.defaultLike, (this.state.liked && styles.liked)]} onPress={() => this.setState({liked: !this.state.liked})}>
						<SvgUri source={require('goodVibes/assets/images/Helpful.svg')} fill={this.state.liked ? "white" : "#e0e0e0"} width="17" height="17"/>
						{this.state.liked && <Text style={{color: 'white', fontSize: 16}}> {likes}</Text>}
					</TouchableOpacity>
				</View>
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

