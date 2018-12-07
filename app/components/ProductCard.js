import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import RoundedImage from './RoundedImage';
import StarRating from './StarRating';
import BarSlider from './BarSlider';
import ProductInfo from './generic/ProductInfo';

export default class ProductCard extends React.Component{
	state = {
		loaded: false
	}

	render(){
		let { data } = this.props;
		let review = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel dolor dolor. Ut lacinia sed lectus porttitor sagittis. Sed scelerisque tristique justo, et vestibulum lectus luctus quis. Praesent iaculis odio vitae ex sollicitudin, ut mattis risus pulvinar.';
		let reviewedBy = 'Nate Q';

		data.rightText = ['Reviewed & Effects Recorded', '11.12.18'];

		return (
			<View style={styles.container}>
				<View style={styles.card}>
					<View style={styles.image}>
						<RoundedImage source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Big_Pine_landscape.jpg'}} loaded={this.state.loaded} onLoadEnd={() => {
							{!this.state.loaded && this.setState({loaded: true})}
						}}/>
					</View>

					{/** TOP **/}
					<ProductInfo data={data} loaded={this.state.loaded} />
					{/** END TOP **/}



					{/** SLIDER **/}
					<BarSlider left="Lorem" right="Lorem" value={3} loaded={this.state.loaded}/>
					{/** END SLIDER **/}

					{/** REVIEW **/}
					{
						this.state.loaded ?
						<View style={{marginTop: 20}}>
							<View style={{flexDirection: 'row', marginBottom: 10}}>
								<Text style={{color: '#666'}}>"</Text>
								<Text style={{color: '#666'}}>{review}"</Text>
							</View>
							<Text>reviewed by {reviewedBy}</Text>
						</View>
						:
						<View style={{marginTop: 20}}>
							<View style={{height: 10, backgroundColor: Layout.ice, marginBottom: 6}}></View>
							<View style={{height: 10, backgroundColor: Layout.ice, marginBottom: 6}}></View>
							<View style={{height: 10, backgroundColor: Layout.ice, marginBottom: 9}}></View>
							<View style={{height: 10, width: 150, backgroundColor: Layout.ice}}></View>
						</View>
					}
					{/** END REVIEW **/}
				</View>
			</View>
        )
	}

}



const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 4,
		padding: 20,
		paddingTop: 60,
		marginTop: 40,
		...Layout.cardShadow
	},
	
	image: {
		position: 'absolute',
		alignItems: 'center',
		marginTop: -45,
		width: '100%',
		marginLeft: 20
		
	},
	imageCover: {

	}
})

