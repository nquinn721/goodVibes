import React from 'react';
import { SearchBar } from 'react-native-elements'


export default class Search extends React.Component{
	render(){
		return (
            <SearchBar
              onChangeText={this.search}
              placeholder='Search cannabis world' />
        )
	}

	search(){

	}
}


