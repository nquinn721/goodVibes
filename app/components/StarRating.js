import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import { Icon } from 'react-native-elements';
/*

	<StarRating rating={4.5} />

*/

export default class StarRating extends React.Component{
	render(){
		const fullStarSize = 16,
			  stars = this.props.rating ? this.props.rating.toString().split('.') : [0],
			  starsView = [],
			  backgroundStars = [1,2,3,4,5];

		for(let i = 0; i < stars[0]; i++){
			starsView.push(<Icon key={i} name='star' size={fullStarSize} color={Layout.purple} />);
		}

		if(stars[1]){
			starsView.push(<View key={5} style={{width: (fullStarSize * (stars[1]/10))}}><Icon name='star' size={fullStarSize} color={Layout.purple} /></View>)
		}


		return (
			<View style={{flexDirection: 'row'}}>
				{backgroundStars.map((v, i) => <Icon key={i} name='star' size={fullStarSize} color='#e0e0e0' />)}
				<View style={{position: 'absolute', left: 0, flexDirection: 'row'}}>
					{starsView}
				</View>
			</View>
		)
	}
}



