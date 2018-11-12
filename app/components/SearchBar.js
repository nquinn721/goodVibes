import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
/*
	<SearchBar navigation={this.props.navigation} />
*/

export default class Search extends React.Component{
	render(){
		return (
			<View style={styles.container}>
	            <SearchBar
	              onChangeText={this.search}
	              inputStyle={{
	              	backgroundColor: 'white',
	              }}
	              containerStyle={{
	              	backgroundColor: 'white',
	              	borderTopWidth: 0,
	              	borderBottomWidth: 0,
	              	
	              }}
	              icon={{ type: 'feather', color: '#86939e', name: 'search' }}
	              placeholderTextColor='#b8b8b8'
	              placeholder='Search for good vibes' />
	              <TouchableOpacity style={{paddingRight: 20}} onPress={() => this.props.navigation.navigate('User')}>
		              <Icon name='user' size={25} color='#b8b8b8' type='feather' />
		          </TouchableOpacity>
	        </View>
        )
	}

	search(){

	}
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center', 
		backgroundColor: 'white',
		shadowOffset: {  width: 0,  height: 5,  },
		shadowColor: '#cdcdcd',
		shadowOpacity: 0.5,
	}
})

