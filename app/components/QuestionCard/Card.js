import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import MainButton from 'goodVibes/components/MainButton';

export default class Card extends React.Component{
	render(){
		let { title, question, answers } = this.props,
			spacing = answers.length >= 2 ? 'center' : 'space-between';
		answers = JSON.parse(answers);
		
		return (
			<View style={styles.container}>
				<View>
					<Text style={{fontSize: 12, textAlign: 'center', marginBottom: 10, color: Layout.lightText}}>{title}</Text>
				</View>
				<View style={{flex: 2}}>
					<Text style={{fontStyle: 'italic', fontSize: 16, textAlign: 'center'}}>{question}</Text>
					<View style={{justifyContent: spacing, flexDirection: 'row', flexWrap: 'wrap'}}>
						
							{answers.map((v, i) => (
								<View key={i} style={{margin: 10}}>
									<MainButton text={v} onPress={this.props.onPress}/>
								</View>
							))}
						
					</View>
				</View>
			</View>
        )
	}

}



const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		backgroundColor: 'white',
		...Layout.cardShadow
	}
})

