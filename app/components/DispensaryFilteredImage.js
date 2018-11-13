import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';

/*


*/

class BackButton extends React.Component{
	render(){
		const {dispensary, style} = this.props;

		return (
			<View style={style || {}}> 
				<View style={{height: 0}}>
                  <Image source={{uri: dispensary.img}} style={{width: '100%', height: 200}}/>
                </View>
                <View style={{height: 0}}>
                  <Image source={require('goodVibes/assets/images/dispen_filter_layer_bottom.png')} style={{width: '100%', height: 200}}/>
                </View>
                <View style={{height: 0}}>
                  <Image source={require('goodVibes/assets/images/dispen_filter_layer_top.png')} style={{height: 200, width: '100%'}}/>
                </View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
})


export default connect(
	// ({products}) => ({products}),
	// (dispatch) => (bindActionCreators({addToCart, removeFromCart}, dispatch))
)(BackButton);