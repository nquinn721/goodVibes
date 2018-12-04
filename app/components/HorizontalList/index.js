import React from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import BottomMiddleShadow from 'goodVibes/components/BottomMiddleShadow';
import { Icon } from 'react-native-elements';
import Item from './Item';

export default class HorizontalList extends React.Component {
  render() {
	const { data, title, type } = this.props;

    return (
    	<View style={styles.mainContainer}>
    		<View style={styles.topImage}>
	    		<Image source={require('goodVibes/assets/images/grey.jpg')} style={{height: 150}}/>
	    	</View>
    		<View style={styles.topInfo}>
    			<Text style={styles.title}>{title}</Text>
    			{ type === 'dispensaries' && 
    				<View style={{flexDirection: 'row'}}>
    					<Text style={{color: 'white'}}>Hoboken, NJ </Text>
    					<Icon name="edit" color="white" size={12}/>
    				</View>}
    		</View>
    		{
    			data.length ? 
		    		<FlatList 
			    		data={data}
		    			horizontal={true}
		    			keyExtractor={(item, index) => index.toString()}
						renderItem={({item}) => <Item item={item} type={type} />}
	    			/>
	    		:
	    		<View>
	    		</View>
    		}
    	</View>
    )
  }

  
}

const styles = StyleSheet.create({
	mainContainer: {
		height: 320,
		backgroundColor: 'white',
		...Layout.cardShadow
	},
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
		textAlign: 'center'
	},
});
