import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Layout from 'goodVibes/constants/Layout';
import LocationFinder from './components/LocationFinder';
import DispensaryList from './components/DispensaryList';

class SearchScreen extends React.Component {

  state = {
    location: null
  }

  render() {

    return (
      <View style={Layout.container}>
          {
            !this.state.location ?
            <LocationFinder onPress={() => this.setState({location: true})}/> :
            <DispensaryList navigation={this.props.navigation}/>

          }
          
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
});



export default connect(
  // ({products, dispensaries}) => ({products, dispensaries})
)(SearchScreen);