import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from 'goodVibes/constants/Layout';
import MainButton from './MainButton';

export default class BottomMiddleShadow extends React.Component{
	render(){
		let { title, question, answers } = this.props;
		answers = JSON.parse(answers);
		console.log(answers, typeof answers);
		return (
			<View style={styles.container}>
				<View>
					<Text style={{fontSize: 12, textAlign: 'center', marginBottom: 10}}>{title}</Text>
				</View>
				<View style={{flex: 2}}>
					<Text style={{fontStyle: 'italic', fontSize: 16, textAlign: 'center'}}>{question}</Text>
					<View style={{justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap'}}>
						
							{answers.map((v, i) => (
								<View key={i} style={{margin: 10}}>
									<MainButton text={v}/>
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
		padding: 20,
		backgroundColor: 'white',
		...Layout.cardShadow
	}
})

