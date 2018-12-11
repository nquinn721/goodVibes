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
		let { loaded, textStyle, rating, noText } = this.props;

		for(let i = 0; i < stars[0]; i++){
			starsView.push(<Icon key={i} name='star' size={fullStarSize} color={Layout.primaryColor} />);
		}

		if(stars[1]){
			starsView.push(<View key={5} style={{width: (fullStarSize * (stars[1]/10))}}><Icon name='star' size={fullStarSize} color={Layout.primaryColor} /></View>)
		}

		if(rating.toString().length === 1)rating = rating + '.0';

		return (
			<View style={{alignItems: 'center', alignItems: 'center'}}>
				<View style={{flexDirection: 'row'}}>
					{backgroundStars.map((v, i) => <Icon key={i} name='star' size={fullStarSize} color={Layout.lightGrey} />)}
					{loaded && <View style={{position: 'absolute', left: 0, flexDirection: 'row'}}>
						{starsView}
					</View>}
				</View>
				{
					!noText ?
					loaded ?
						<Text style={[{fontSize: 24, textAlign: 'center', fontFamily: 'sfprolight'}, textStyle]}>{rating}</Text>
						:
						<View style={{flexDirection: 'row', justifyContent: 'center'}}>
							<View style={{height: 16, width: 14, marginRight: 4, backgroundColor: Layout.ice}}></View>
							<View style={{height: 16, width: 14, backgroundColor: Layout.ice}}></View>
						</View>
					:<View />
				}
			</View>
		)
	}
}



