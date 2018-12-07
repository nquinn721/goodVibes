import React from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';
import { Icon } from 'react-native-elements';
import Item from './Item';
import RoundedImage from 'goodVibes/components/RoundedImage';

/**     
 *  <HorizontalList 
 * 		title={String} 
 * 		data={Array<Products>|<Dispensaries>} 
 * 		type={String(dispensaries|quiz)/>
 */

export default class HorizontalList extends React.Component {
  render() {
	const { data = [], title, type, onPress } = this.props;
	if(!~data.map(v => v.text).indexOf('Show More'))
		data.push({text: 'Show More'});
	
    return (
    	<View style={styles.mainContainer}>
    		

    			{ 
    				// Header
    				(!type || type === 'product') ?
    					this.listHeader(title) :
    				type === 'dispensaries' ?
    					this.dispensaryHeader(title) :
    				type === 'quiz' && this.quizHeader(title)
    			}

    			{
    				// Data
	    			data.length > 1 ? 
			    		<FlatList 
				    		data={data}
			    			horizontal={true}
			    			showsHorizontalScrollIndicator={false}
			    			keyExtractor={(item, index) => index.toString()}
							renderItem={({item}) => item.text ? <RoundedImage text={item.text} noShadow={true} onPress={onPress}/> :  <Item item={item} type={type} onPress={onPress} />}
		    			/>
			    		:
			    		<View></View>
	    		}
    	</View>
    )
  }

  dispensaryHeader(title){
  	return (
  		<View>
	  		{this.headerImage()}
	  		<View style={styles.topInfo}>
				<Text style={styles.title}>{title}</Text>
		  		<View style={{flexDirection: 'row'}}>
					<Text style={{color: 'white'}}>Hoboken, NJ </Text>
					<Icon name="edit" color="white" size={12}/>
				</View>
			</View>
		</View>
	)
  }

  quizHeader(title){
  	return (
  		<View style={styles.quizHeaderContainer}>
			<Text style={{color: 'white', fontSize: 14, textAlign: 'center'}}>Your Selection</Text>
			<Text style={{color: Layout.bgColor, textAlign: 'center'}}>{title}</Text>
			<TouchableOpacity style={{borderRadius: 18, borderWidth: 1, borderColor: 'white', width: 72, height: 21, marginTop: 6}} onPress={this.props.onPress}>
				<Text style={{textAlign: 'center', color: 'white'}}>Change</Text>
			</TouchableOpacity>
		</View>
  	)
  }

  listHeader(title){
  	return (
  		<View>
	  		{this.headerImage()}
	  		<View style={styles.topInfo}>
				<Text style={styles.title}>{title}</Text>
			</View>
		</View>
  	)
  }

  headerImage(){
  	return (
	  	<View style={styles.topImage}>
			<Image source={require('goodVibes/assets/images/grey.jpg')} style={{height: 150}}/>
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
		fontFamily: 'circular'
	},
	topInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginBottom: 40
	},
	quizHeaderContainer: {
		alignItems: 'center',
		paddingTop: 14, 
		backgroundColor: Layout.primaryColor,
		height: 150,
		marginBottom: -45
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
