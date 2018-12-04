import React from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import BottomMiddleShadow from 'goodVibes/components/BottomMiddleShadow';
import RoundedImage from './RoundedImage';
import { Icon } from 'react-native-elements';

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
						renderItem={({item}) => (
							<View style={styles.item}>
								<RoundedImage source={{uri: item.img}} type={this.props.type} />
								<BottomMiddleShadow/>
								<View style={styles.nameContainer}>
									<Text style={styles.name}>{item.name}</Text>
								</View>
								<View>
									<Text style={{color: Layout.lightText}}>{item.type}</Text>
								</View>
								<View style={styles.starRating}>
								 	<StarRating rating={item.rating}/>
								</View>
								<View>
									<Text style={styles.rating}>{item.rating}</Text>
								</View>
							</View>
						)}
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
	rating: {
		fontSize: 22
	}
});
