import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import SearchHeader from './components/SearchHeader';
import SearchDispensaries from './SearchDispensaries.screen';
import SearchCannabis from './SearchCannabis.screen';
import ScrollViewAction from 'goodVibes/components/ScrollViewAction';

class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    page: 'dispensaries'
  }

  render() {

    return (
      <ScrollViewAction>
        <SearchHeader onPress={page => this.setState({page})}/>

        {this.state.page === 'dispensaries' && <SearchDispensaries navigation={this.props.navigation}/>}
        {this.state.page === 'cannabis' && <SearchCannabis />}
      </ScrollViewAction>
    );
  }

 
}

const styles = StyleSheet.create({
    separator: {
      height: 20,
    }
});



export default connect(
  ({location}) => ({location})
)(SearchScreen);