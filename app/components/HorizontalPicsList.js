import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import SvgUri from 'react-native-svg-uri';
import RoundedImage from 'goodVibes/components/RoundedImage';

export default class HorizontalPicList extends React.Component{
	render(){
		let { navigation, product } = this.props;
		let images = product.images || product.photos || [];
		
		images = images.concat(images).concat(images);

		return (
			<View style={[Layout.card, styles.container]}>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, paddingHorizontal: 30}}>
					<Text style={{fontFamily: 'circularbook', color: Layout.secondaryColor, fontSize: 14}}>Pictures</Text>
					<View style={{flexDirection: 'row', alignItems: 'center'}}>
						<SvgUri source={require('goodVibes/assets/images/Camera.svg')} fill={Layout.primaryColor} width="12" height="12"/>
						<Text style={{fontFamily: 'sfprobold', color: Layout.primaryColor}}> Upload</Text>
					</View>
				</View>
				<FlatList 
					data={images}
	    			showsHorizontalScrollIndicator={false}
					style={{flexDirection: 'row', paddingHorizontal: 30}} 
	    			keyExtractor={(item, index) => index.toString()}
	    			horizontal={true}
					renderItem={({item, index}) => {
						return (
							<View style={{marginRight: 23, flexDirection: 'row'}}>
								<RoundedImage source={{uri: item}} type='product'  onPress={() => navigation.navigate('ImageGallery', {product})}/>
							</View> 
						)
					}}
				/>
					
			</View>
        )
	}

}



const styles = StyleSheet.create({
	container: {
		paddingVertical: 30,
	},
})

