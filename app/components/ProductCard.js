import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import RoundedImage from './RoundedImage';
import StarRating from './StarRating';
import BarSlider from './BarSlider';

export default class ProductCard extends React.Component{
	render(){
		let { data } = this.props;

		let review = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor dolor. Ut lacinia sed lectus porttitor sagittis. Sed scelerisque tristique justo, et vestibulum lectus luctus quis. Praesent iaculis odio vitae ex sollicitudin, ut mattis risus pulvinar.';
		let reviewedBy = 'Nate Q';

		return (
			<View style={styles.container}>
				<View style={styles.image}>
					<RoundedImage source={{uri: data.img}} />
				</View>
				<View style={styles.card}>

					{/** TOP **/}
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
						<View style={styles.infoSection}>
							<Text>{data.name}</Text>
							<Text style={{color: Layout.lightText}}>{data.type}</Text>
						</View>
						
						<View style={styles.infoSection}>
							<Text></Text>
							<StarRating rating={data.rating}/>
							<Text style={{fontSize: 24, textAlign: 'center'}}>{data.rating}</Text>
						</View>
						
						<View style={styles.infoSection}>
							<Text></Text>
							<Text style={{color: Layout.lightText, fontSize: 10, textAlign: 'right'}}>Reviewed & Effects Recorded</Text>
							<Text style={{color: Layout.secondaryColor, textAlign: 'right'}}>11.12.18</Text>
						</View>

					</View>
					{/** END TOP **/}



					{/** SLIDER **/}
					<BarSlider left="Lorem" right="Lorem" value={3} />
					{/** END SLIDER **/}

					{/** REVIEW **/}
					<View style={{marginTop: 20}}>
						<View style={{flexDirection: 'row', marginBottom: 10}}>
							<Text style={{color: '#666'}}>"</Text>
							<Text style={{color: '#666'}}>{review}"</Text>
						</View>
						<Text>reviewed by {reviewedBy}</Text>
					</View>
					{/** END REVIEW **/}
				</View>
			</View>
        )
	}

}



const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingTop: 0,
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 4,
		padding: 20,
		paddingTop: 40,
		...Layout.cardShadow
	},
	infoSection: {
		width: '30%'
	},
	image: {
		height: 45,
		alignItems: 'center',
		zIndex: 2
	}
})

