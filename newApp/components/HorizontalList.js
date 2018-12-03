import React from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';

export default class HorizontalList extends React.Component {
  render() {
	const { data, title } = this.props;
	console.log('length');
	console.log(data.length);
    return (

    	<View style={styles.mainContainer}>
    		<View style={styles.topImage}>
	    		<Image source={require('goodVibes/assets/images/grey.jpg')} style={{height: 150}}/>
	    	</View>
    		<View>
    			<Text style={styles.title}>{title}</Text>
    		</View>
    		{
    			data.length ? 
		    		<FlatList 
			    		data={data}
		    			horizontal={true}
						renderItem={({item}) => (
							<View key={item.id} style={styles.item}>
								<View style={styles.image}>
									<Image source={{uri: item.img}} style={{width: 50, height: 50}}/>
								</View>
								<View>
									<Text style={styles.name}>{item.name}</Text>
								</View>
								<View style={styles.type}></View>
								<View style={styles.starRating}></View>
								<View style={styles.rating}></View>
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
		height: 300,
		backgroundColor: 'white',
		...Layout.cardShadow
	},
	topImage: {
		height: 50
	},
	title: {
		color: 'white',
		fontSize: 16,
		paddingLeft: 20,
		marginBottom: 41
	},
	item: {
		width: 110,
		justifyContent: 'center'
	}
});
