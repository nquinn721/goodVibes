import React from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import RoundedImage from 'goodVibes/components/RoundedImage';
import { Icon } from 'react-native-elements';

export default class HorizontalList extends React.Component {
	state = {
		loaded: false
	}
  render() {
	const { item, type, onPress = () => {} } = this.props;

    return (
		<View style={styles.item}>
			<RoundedImage 
				source={{uri: item.img}} 
				type={type} 
				onPress={onPress}
				onLoadEnd={() => {
					this.setState({loaded: true})
				}}/>
			<View style={styles.nameContainer}>
				{this.state.loaded ? 
					<Text style={styles.name}>{item.name}</Text>:
					<View style={{backgroundColor: Layout.ice, height: 10, width: 63}}></View>
				}
			</View>
			<View>
				{this.state.loaded ? 
					<Text style={{color: Layout.lightText}}>{item.type}</Text> :
					<View style={{backgroundColor: Layout.ice, height: 10, width: 32, marginBottom: 10}}></View>
				}
			</View>
			<View style={styles.starRating}>
			 	<StarRating rating={item.rating} loaded={this.state.loaded}/>
			</View>
		</View>
	    			
    )
  }

  
}

const styles = StyleSheet.create({
	topImage: {
		height: 45,
	},
	title: {
		color: 'white',
		fontSize: 16,
	},
	topInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginBottom: 40
	},


	item: {
		width: 110,
		height: 150,
		alignItems: 'center',
		marginHorizontal: 18
	},
	
	nameContainer: {
		height: 40,
		marginTop: 10
	},
	name: {
		textAlign: 'center',
		fontFamily: 'sfprobold'
	},
	
});
