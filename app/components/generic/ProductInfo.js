import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import StarRating from 'goodVibes/components/StarRating';

export default class ProductInfo extends React.Component{


	render(){
		const { data, loaded } = this.props;

		return (
			<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
				<View style={styles.infoSection}>
					{
						loaded ? 
						<View>
							<Text style={{fontFamily: 'sfprobold'}}>{data.name}</Text>
						 	<Text style={{color: Layout.lightText}}>{data.type}</Text>
						</View>
						:
						<View>
							<View style={{width: 100, height: 10, backgroundColor: Layout.ice, marginBottom: 5}}></View>
							<View style={{width: 50, height: 10, backgroundColor: Layout.ice}}></View>
						</View>
					}
				</View>
				
				<View style={styles.infoSection}>
					<Text></Text>
					<StarRating rating={data.rating} loaded={loaded}/>
				</View>
				
				{
					loaded ?
					<View style={styles.infoSection}>
						<Text></Text>
						<View style={{position: 'absolute', bottom: 2, right: 0}}>
							<Text style={{color: Layout.lightText, fontSize: 10, textAlign: 'right'}}>{data.rightText[0]}</Text>
							<Text style={{color: Layout.secondaryColor, textAlign: 'right'}}>{data.rightText[1]}</Text>
						</View>
					</View>
					: <View style={styles.infoSection}></View>
				}

			</View>
			
		)
	}
}


const styles = StyleSheet.create({
	infoSection: {
		width: '30%'
	},
})