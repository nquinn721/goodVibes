import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import SvgUri from 'react-native-svg-uri';

export default class Review extends React.Component{
	state = {
	}
	render(){
		const { length } = this.state;
		let review = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor dolor. Ut lacinia sed lectus porttitor sagittis. Sed scelerisque tristique justo, et vestibulum lectus luctus quis. Praesent iaculis odio vitae ex sollicitudin, ut mattis risus ';
		let reviewBy = 'Nate Q';
		let age = '1 month ago';
		let num = 3.4;
		return (
			<View>
				<Text style={{fontSize: 14, marginBottom: 8}}>
					<Text>{review}</Text>
					<Text style={{color: Layout.primaryColor}}>... Read More</Text>
				</Text>
				<View style={{flexDirection: 'row'}}>
					<StarRating rating={num} noText={true} loaded={true}/>
				</View>


				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<View style={{flexDirection: 'row'}}>
						<View style={{borderWidth: 2, borderColor: Layout.lightText, borderRadius: 1000, width: 33, marginRight: 5}}/>
						<View>
							<Text style={{fontFamily: 'sfprobold', color: Layout.lightText}}>{reviewBy}</Text>
							<Text style={{color: Layout.thirdaryColor}}>{age}</Text>
						</View>
					</View>
					<View style={{width: 60, height: 30, borderRadius: 20, borderColor: '#e0e0e0', borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
						<SvgUri source={require('goodVibes/assets/images/Helpful.svg')} fill="#e0e0e0" width="17" height="17"/>
					</View>
				</View>
			</View>
    )
	}

}



const styles = StyleSheet.create({
	container: {
	}
});

