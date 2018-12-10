import React from 'react';
import { View, Text, StyleSheet, Image, Platform, Linking, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import { WebBrowser } from 'expo';
import Communications from 'react-native-communications';

/*
 * <StoreInfo 
 */

export default class StoreInfo extends React.Component{

	openSite(){
		WebBrowser.openBrowserAsync('http://good-vibes-tech.herokuapp.com');
	}

	call(){
		Communications.phonecall('6148048521', true);
	}

	render(){
		const { product } = this.props;

		return (
			<View style={[Layout.card, {padding: 30}]}>
				<Text style={styles.title}>Store Info</Text>
				<View>
					<Image source={{uri : 'https://s11986.pcdn.co/wp-content/uploads/2016/09/navigation-map.jpg'}} style={{height: 120, width: '100%'}}/>
					<View style={{alignItems: 'flex-end', marginTop: -20}}>
						<View style={{alignItems: 'center'}}>
							<View style={{width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: Layout.primaryColor}}>
								<Image source={require('goodVibes/assets/images/Direction.png')} style={{tintColor: 'white', width: 22, height: 22}}/>
							</View>
							<Text style={{color: Layout.primaryColor, fontFamily: 'sfpromedium'}}>Directions</Text>
						</View>
					</View>
				</View>

				<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}} onPress={this.call}>
					<Image source={require('goodVibes/assets/images/Call.png')} style={{width: 8, height: 10, tintColor: Layout.secondaryColor}} />
					<Text style={{color: Layout.secondaryColor, paddingLeft: 5, paddingRight: 24, fontFamily: 'sfpromedium'}}>Call</Text>
					<Text style={{color: Layout.lightText}}>{product.phone}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#f0f0f0'}} onPress={this.openSite}>
					<Image source={require('goodVibes/assets/images/GoTo.png')} style={{width: 10, height: 10, tintColor: Layout.secondaryColor}} />
					<Text style={{color: Layout.secondaryColor, paddingLeft: 5, paddingRight: 14, fontFamily: 'sfpromedium'}}>Go to</Text>
					<Text style={{color: Layout.lightText}}>{product.website}</Text>
				</TouchableOpacity>
			</View>
        )
	}


}



const styles = StyleSheet.create({
	title: {
		fontFamily: 'circular',
		fontSize: 16,
		marginBottom: 10
	}
})

